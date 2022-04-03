import { User } from 'src/shared.types';

export type UserState = {
  me: User;
  users: { [key: string]: User };
  token: string | null;
};

export const defaultUserState: UserState = {
  me: { id: '', firstname: '', lastname: '', email: '', isPatient: false, isProfessional: false },
  token: null,
  users: {},
};
