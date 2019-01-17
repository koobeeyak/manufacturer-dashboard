import {
  GET_MANUFACTURERS_REQUEST,
  GET_MANUFACTURERS_SUCCESS,
  GET_MANUFACTURERS_FAILURE,
} from '../actions';

const defaultState = {
  data: [],
  loading: false,
  errorMessage: '',
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
    default:
      return state;
  }
};
