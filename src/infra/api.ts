import { Cmd } from 'redux-loop';
import { getToken } from '../reducers';

type Method = 'GET' | 'POST' | 'PUT';

interface Request {
  type: string;
  path: string;
  method: Method;
  body?: any;
  normalizer: any;
}

export const cmdFetch = (action: any) =>
  Cmd.run(
    getState => {
      const token = getToken(getState());
      return makeRequest(action.meta, token || '');
    },
    {
      args: [Cmd.getState],
      successActionCreator: payload => ({ ...action.commit, payload }),
      failActionCreator: (error: string) => ({ ...action.rollback, error }),
    },
  );

const makeRequest = (request: Request, token: string) => {
  const body = request.body ? JSON.stringify(request.body) : null;
  const headers = { 'Content-Type': 'application/json', Authorization: token };
  return fetch(import.meta.env.VITE_SERVER_URI /* 'http://localhost:3001' */ + request.path, {
    method: request.method,
    body,
    headers: body ? { ...headers, 'Content-Length': `${body.length}` } : headers,
  })
    .then(checkStatus)
    .then(response => response.json())
    .then(response => (request.normalizer ? request.normalizer(response) : response));
};

const checkStatus = (response: Response) => {
  if (response.ok) return response;
  response.json().then(e => alert(e.reason));
  throw new Error(`${response.status}${response.statusText}`);
};
