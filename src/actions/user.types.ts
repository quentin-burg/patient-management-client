import { User } from '../shared.types';

type RegisterRollback = {
  type: 'REGISTER_ROLLBACK';
};

type RegisterCommit = {
  type: 'REGISTER_COMMIT';
  payload?: { user: User; token: string };
};

export type RegisterBody = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  isPatient: boolean;
  isProfessional: boolean;
};

export type RegisterRequest = {
  type: 'REGISTER_REQUEST';
  meta: {
    path: '/user/register';
    method: 'POST';
    body: RegisterBody;
  };
  commit: RegisterCommit;
  rollback: RegisterRollback;
};

export type Register = RegisterRequest | RegisterCommit | RegisterRollback;

type LoginCommit = { type: 'LOGIN_COMMIT'; payload?: { user: User; token: string } };
type LoginRollback = { type: 'LOGIN_ROLLBACK' };
export type LoginBody = {
  email: string;
  password: string;
};
export type LoginRequest = {
  type: 'LOGIN_REQUEST';
  meta: {
    path: '/user/login';
    method: 'POST';
    body: LoginBody;
  };
  commit: LoginCommit;
  rollback: LoginRollback;
};

export type Login = LoginRequest | LoginCommit | LoginRollback;

export type Logout = {
  type: 'LOGOUT';
};

type GetUserByIdCommit = { type: 'GET_USER_BY_ID_COMMIT'; payload?: { user: User } };
type GetUserByIdRollback = { type: 'GET_USER_BY_ID_ROLLBACK' };

export type GetUserByIdRequest = {
  type: 'GET_USER_BY_ID_REQUEST';
  meta: {
    path: string;
    method: 'GET';
  };
  commit: GetUserByIdCommit;
  rollback: GetUserByIdRollback;
};

export type GetUserById = GetUserByIdRequest | GetUserByIdCommit | GetUserByIdRollback;

export type UserActions = Login | Register | Logout | GetUserById;
