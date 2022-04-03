import { GetUserByIdRequest, LoginBody, LoginRequest, Logout, RegisterBody, RegisterRequest } from './user.types';

export const register = (registerInfos: RegisterBody): RegisterRequest => ({
  type: 'REGISTER_REQUEST',
  meta: {
    path: '/user/register',
    method: 'POST',
    body: registerInfos,
  },
  commit: { type: 'REGISTER_COMMIT' },
  rollback: { type: 'REGISTER_ROLLBACK' },
});

export const login = (loginInfos: LoginBody): LoginRequest => ({
  type: 'LOGIN_REQUEST',
  meta: {
    path: '/user/login',
    method: 'POST',
    body: loginInfos,
  },
  commit: {
    type: 'LOGIN_COMMIT',
  },
  rollback: { type: 'LOGIN_ROLLBACK' },
});

export const logout = (): Logout => ({
  type: 'LOGOUT',
});

export const getUserById = (id: string): GetUserByIdRequest => ({
  type: 'GET_USER_BY_ID_REQUEST',
  meta: {
    path: `/user/${id}`,
    method: 'GET',
  },
  commit: {
    type: 'GET_USER_BY_ID_COMMIT',
  },
  rollback: {
    type: 'GET_USER_BY_ID_ROLLBACK',
  },
});
