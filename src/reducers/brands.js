import {
  GET_BRANDS_REQUEST,
  GET_BRANDS_SUCCESS,
  GET_BRANDS_FAILURE,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_BRANDS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRANDS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_BRANDS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
