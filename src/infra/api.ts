import { Cmd } from 'redux-loop';

type Method = 'GET' | 'POST' | 'PUT';

interface Action<Req, Com, Roll> {
  request: Req;
  commit: Com;
  rollback: Roll;
}

interface Request {
  type: string;
  path: string;
  method: Method;
}

interface Commit {
  type: string;
  payload: unknown;
}

interface Rollback {
  type: string;
  error: Error;
}

type Actions = Action<Request, Commit, Rollback>;

const createRequestAction = (type: string, path: string, method: Method): Request => ({
  type,
  path,
  method,
});

const createCommitAction = (type: string, payload: unknown): Commit => ({
  type,
  payload,
});

const createRollbackAction = (type: string, error: Error): Rollback => ({
  type,
  error,
});

export const cmdFetch = (action: Action<Request, Commit, Rollback>) =>
  Cmd.run(
    () => {
      makeRequest(action.request);
    },
    {
      successActionCreator: payload => ({ ...action.commit, payload }),
      failActionCreator: (error: string) => ({ ...action.rollback, error }),
    },
  );

const makeRequest = (request: Request) => {
  return fetch(request.path, { method: request.method })
    .then(checkStatus)
    .then(response => response.json());
};

const checkStatus = (response: Response) => {
  if (response.ok) return response;
  throw new Error(`${response.status}`);
};
