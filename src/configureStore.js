import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import getManufacturersSaga from './sagas/getManufacturersSaga';
import getBrandsSaga from './sagas/getBrandsSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));

  sagaMiddleware.run(getManufacturersSaga);
  sagaMiddleware.run(getBrandsSaga);

  return store;
};

export default configureStore;
