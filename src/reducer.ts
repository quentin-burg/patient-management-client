import { AnyAction } from 'redux';
import { combineReducers, LoopReducer } from 'redux-loop';
import login from './reducers/login/login';
import { LoginState } from './reducers/login/login.types';
import { createRouterReducer, ReduxRouterState } from '@lagunovsky/redux-react-router';

const loginReducer = login as LoopReducer<LoginState, AnyAction>;
const routerReducer = history => createRouterReducer(history) as LoopReducer<ReduxRouterState, AnyAction>;

export default history =>
  combineReducers({
    login: loginReducer,
    router: routerReducer(history),
  });
