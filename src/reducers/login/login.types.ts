export type LoginState = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  token: string | null;
};

export const defaultLoginState: LoginState = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  token: null,
};
