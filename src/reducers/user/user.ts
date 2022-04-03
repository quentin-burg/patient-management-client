import { compose } from 'redux';
import { Cmd, liftState, Loop, loop } from 'redux-loop';
import { UserActions } from '../../actions/user.types';
import { cmdFetch } from '../../infra/api';
import { defaultUserState, UserState } from './user.types';
import { push } from '@lagunovsky/redux-react-router';
import { FileActions } from '../../actions/medical-file.types';

const reducer = (state: UserState, action: UserActions | FileActions): UserState | Loop<UserState> => {
  if (!state) return defaultUserState;
  switch (action.type) {
    case 'LOGIN_COMMIT':
    case 'REGISTER_COMMIT':
      if (action.payload) {
        const { email, id, firstname, lastname, isPatient, isProfessional } = action.payload.user;
        return loop(
          { ...state, me: { id, email, firstname, lastname, isPatient, isProfessional }, token: action.payload.token },
          Cmd.action(push('/files')),
        );
      }
      return state;
    case 'GET_USER_BY_ID_COMMIT':
      if (action.payload) {
        const user = action.payload.user;
        return { ...state, users: { ...state.users, [user.id]: user } };
      }
      return state;
    case 'CREATE_MEDICAL_FILE_COMMIT':
      if (action.payload) {
        const patient = action.payload.file.patient;
        const professional = action.payload.file.professional;
        return { ...state, users: { ...state.users, [patient.id]: patient, [professional.id]: professional } };
      }
      return state;
    case 'GET_ALL_MEDICAL_FILES_COMMIT':
      if (action.payload) {
        const s = action.payload.files.map(f => ({
          [f.patient.id]: f.patient,
          [f.professional.id]: f.professional,
        })); /* .reduce((acc, current) => {
          return {...acc, [Object.(current)]}
        }, {}) */
        const newUsers = action.payload.files.reduce((acc, current) => {
          return { ...acc, [current.patient.id]: current.patient, [current.professional.id]: current.professional };
        }, {});
        return { ...state, users: { ...state.users, ...newUsers } };
      }
      return state;
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
    case 'GET_USER_BY_ID_REQUEST':
      return loop(state, cmdFetch(action));
    case 'LOGOUT':
      return loop(defaultUserState, Cmd.action(push('/')));
    default:
      return state;
  }
};
export const isConnected = (state: UserState) => !!state.token;
export const getToken = (state: UserState) => state.token;
export const getRole = (state: UserState) => (state.me.isPatient ? 'patient' : 'professional');

export const getUser = (state: UserState, id: string) => state.users[id];

export default compose(liftState, reducer);
