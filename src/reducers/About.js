import * as types from 'constants/actionTypes/About';

const initialState = {
  isFetching: false,
  error: false,
  info: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_ABOUT_REQUEST:
      return { ...initialState, isFetching: true };
    case types.FETCH_ABOUT_ERROR:
      return { ...initialState, error: true };
    case types.FETCH_ABOUT_SUCCESS:
      return { ...initialState, info: payload };
    default:
      return state;
  }
}
