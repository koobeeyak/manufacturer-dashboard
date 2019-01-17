import { createSelector } from 'reselect';

import {
  GET_MANUFACTURERS_REQUEST,
  GET_MANUFACTURERS_SUCCESS,
  GET_MANUFACTURERS_FAILURE,
  SET_MANUFACTURERS_FILTER,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
  filter: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_MANUFACTURERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MANUFACTURERS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_MANUFACTURERS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    case SET_MANUFACTURERS_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export const getManufacturersDataSelector = ({ data }) => data;
export const getManufacturersFilterSelector = ({ filter }) => filter;

export const getFilteredManufacturerSelector = createSelector(
  [getManufacturersDataSelector, getManufacturersFilterSelector],
  (data, filter) => (filter
    ? data.filter(m => m.name === filter)
    : data),
);
