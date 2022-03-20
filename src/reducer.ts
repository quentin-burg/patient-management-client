import { combineReducers } from 'redux-loop';
import identityReducer from './identity/reducer';

export default () =>
  combineReducers({
    myReducer: identityReducer,
  });
