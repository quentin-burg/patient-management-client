import { AnyAction } from 'redux';
import { combineReducers, LoopReducer } from 'redux-loop';
import user from './reducers/user/user';
import type { UserState } from './reducers/user/user.types';
import { createRouterReducer, ReduxRouterState } from '@lagunovsky/redux-react-router';
import file from './reducers/medical-file/medical-file';
import consultation from './reducers/consultation/consultation';
import type { FileState } from './reducers/medical-file/medical-file.types';
import { ConsultationState } from './reducers/consultation/consultation.types';

const userReducer = user as LoopReducer<UserState, AnyAction>;
const routerReducer = history => createRouterReducer(history) as LoopReducer<ReduxRouterState, AnyAction>;
const fileReducer = file as LoopReducer<FileState, AnyAction>;
const consultationReducer = consultation as LoopReducer<ConsultationState, AnyAction>;

export default history =>
  combineReducers({
    user: userReducer,
    router: routerReducer(history),
    file: fileReducer,
    consultation: consultationReducer,
  });
