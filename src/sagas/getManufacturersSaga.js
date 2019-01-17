import { call, put, takeEvery } from 'redux-saga/effects';

import getManufacturersAPICall from '../api/getManufacturers';
import { GET_MANUFACTURERS_REQUEST, getManufacturersFailure, getManufacturersSuccess } from '../actions';

function* getManufacturers() {
  try {
    const data = yield call(getManufacturersAPICall);
    yield put(getManufacturersSuccess(data));
  } catch (error) {
    // TODO extract the message string from whatever the error here looks like
    yield put(getManufacturersFailure(error.message));
  }
}

function* getManufacturersSaga() {
  yield takeEvery(GET_MANUFACTURERS_REQUEST, getManufacturers);
}

export default getManufacturersSaga;
