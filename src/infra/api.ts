import { Cmd } from 'redux-loop';

type Method = 'GET' | 'POST' | 'PUT';

interface Request {
  type: string;
  path: string;
  method: Method;
  body?: any;
}

export const cmdFetch = (action: any) =>
  Cmd.run(
    () => {
      return makeRequest(action.meta);
    },
    {
      successActionCreator: payload => ({ ...action.commit, payload }),
      failActionCreator: (error: string) => ({ ...action.rollback, error }),
    },
  );

const makeRequest = (request: Request) => {
  console.log('req', request);
  const body = request.body ? JSON.stringify(request.body) : null;
  const headers = { 'Content-Type': 'application/json' };
  return fetch(import.meta.env.VITE_SERVER_URI + request.path, {
    method: request.method,
    body,
    headers: body ? { ...headers, 'Content-Length': `${body.length}` } : headers,
  })
    .then(checkStatus)
    .then(response => response.json());
};

const checkStatus = (response: Response) => {
  if (response.ok) return response;
  throw new Error(`${response.status}`);
};
