import rootReducer from './reducer';

import { compose, createStore, applyMiddleware } from 'redux';
import { install, StoreCreator } from 'redux-loop';
import { createLogger } from 'redux-logger';
import history from './history';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';

const enhancedStore = createStore as StoreCreator;

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const routerMiddleware = createRouterMiddleware(history);

const store = enhancedStore(
  rootReducer(history),
  undefined,
  compose(install(), applyMiddleware(routerMiddleware, logger)),
);

export default store;
