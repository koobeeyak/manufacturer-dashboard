import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

// import reducers from './reducers';

// double check on imports working, you should never have to specify ./reducers/index
const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(() => {}, applyMiddleware(...middlewares));

  return store;
};

export default configureStore;
