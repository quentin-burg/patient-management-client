import { LoginBody, LoginRequest, RegisterBody, RegisterRequest } from './user.types';

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
