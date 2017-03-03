import * as types from 'constants/actionTypes/Search';

const initialState = {
  isLoading: false,
  results: [],
  value: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.CHANGE_SEARCH_TERM:
      return { ...initialState, value: payload };
    case types.SEARCH_REQUEST:
      return { ...state, isLoading: true };
    case types.SEARCH_SUCCESS:
      return { ...state, isLoading: false, results: payload };
    case types.SEARCH_ERROR:
      return { ...initialState };
    default:
      return state;
  }
}
