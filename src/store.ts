import rootReducer from './reducer';

import { compose, createStore, applyMiddleware } from 'redux';
import { install, StoreCreator } from 'redux-loop';
import { createLogger } from 'redux-logger';
import history from './history';
import { createRouterMiddleware } from '@lagunovsky/redux-react-router';
import { loadState, saveState } from './local-storage';

const enhancedStore = createStore as StoreCreator;

const persistState = loadState('user');

const logger = createLogger({
  collapsed: true,
  diff: true,
});

const routerMiddleware = createRouterMiddleware(history);

const store = enhancedStore(
  rootReducer(history),
  persistState,
  compose(install(), applyMiddleware(routerMiddleware, logger)),
);

store.subscribe(() =>
  setInterval(() => {
    saveState(
      {
        user: store.getState().user,
      },
      'user',
    );
  }, 5000),
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
