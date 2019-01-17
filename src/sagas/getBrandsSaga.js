import { call, put, takeEvery } from 'redux-saga/effects';

import getBrandsAPICall from '../api/getBrands';
import { GET_BRANDS_REQUEST, getBrandsFailure, getBrandsSuccess } from '../actions';

function* getBrands() {
  try {
    const data = yield call(getBrandsAPICall);
    yield put(getBrandsSuccess(data));
  } catch (error) {
    yield put(getBrandsFailure(error.message));
  }
}

function* getBrandsSaga() {
  yield takeEvery(GET_BRANDS_REQUEST, getBrands);
}

export default getBrandsSaga;
