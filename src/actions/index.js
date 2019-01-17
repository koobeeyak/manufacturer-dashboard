export const GET_BRANDS_REQUEST = 'GET_BRANDS_REQUEST';
export const GET_BRANDS_FAILURE = 'GET_BRANDS_FAILURE';
export const GET_BRANDS_SUCCESS = 'GET_BRANDS_SUCCESS';
export const GET_MANUFACTURERS_REQUEST = 'GET_MANUFACTURERS_REQUEST';
export const GET_MANUFACTURERS_FAILURE = 'GET_MANUFACTURERS_FAILURE';
export const GET_MANUFACTURERS_SUCCESS = 'GET_MANUFACTURERS_SUCCESS';
export const SET_MANUFACTURERS_FILTER = 'SET_MANUFACTURERS_FILTER';

export const getBrandsRequest = () => ({
  type: GET_BRANDS_REQUEST,
});

export const getBrandsFailure = errorMessage => ({
  type: GET_BRANDS_FAILURE,
  errorMessage,
});

export const getBrandsSuccess = data => ({
  type: GET_BRANDS_SUCCESS,
  data,
});

export const getManufacturersRequest = () => ({
  type: GET_MANUFACTURERS_REQUEST,
});

export const getManufacturersFailure = errorMessage => ({
  type: GET_MANUFACTURERS_FAILURE,
  errorMessage,
});

export const getManufacturersSuccess = data => ({
  type: GET_MANUFACTURERS_SUCCESS,
  data,
});

export const setManufacturersFilter = filter => ({
  type: SET_MANUFACTURERS_FILTER,
  filter,
});
