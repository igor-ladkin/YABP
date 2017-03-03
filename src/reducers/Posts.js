import * as types from 'constants/actionTypes/Posts';

const initialState = {
  isFetching: false,
  error: false,
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.FETCH_POSTS_REQUEST:
      return { ...initialState, isFetching: true };
    case types.FETCH_POSTS_ERROR:
      return { ...initialState, error: true };
    case types.FETCH_POSTS_SUCCESS:
      return { ...initialState, items: payload.entries };
    default:
      return state;
  }
}
