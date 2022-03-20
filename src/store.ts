import rootReducer from './reducer';

import { compose, createStore, applyMiddleware } from 'redux';
import { install } from 'redux-loop';
import logger from 'redux-logger';

const enhancers = compose(install(), applyMiddleware(logger));
const store = createStore(rootReducer, {}, enhancers);

export default store;
