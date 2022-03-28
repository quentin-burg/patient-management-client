import { compose } from 'redux';
import { Cmd, liftState, Loop, loop } from 'redux-loop';
import { UserActions } from '../../actions/user.types';
import { cmdFetch } from '../../infra/api';
import { defaultLoginState, LoginState } from './login.types';
import { push } from '@lagunovsky/redux-react-router';

const reducer = (state: LoginState, action: UserActions): LoginState | Loop<LoginState> => {
  if (!state) return defaultLoginState;
  switch (action.type) {
    case 'LOGIN_COMMIT':
    case 'REGISTER_COMMIT':
      if (action.payload) {
        const { email, id, firstname, lastname } = action.payload.user;
        return loop({ ...state, id, email, firstname, lastname, token: action.payload.token }, Cmd.action(push('/')));
      }
      return state;
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return loop(state, cmdFetch(action));
    default:
      return state;
  }
};

export default compose(liftState, reducer);

export const isConnected = (state: LoginState) => !!state.token;
