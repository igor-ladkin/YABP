import * as types from 'constants/actionTypes/Post';

const initialState = {
  isFetching: false,
  error: false,
  item: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return { ...initialState, isFetching: true };
    case types.FETCH_POST_ERROR:
      return { ...initialState, error: true };
    case types.FETCH_POST_SUCCESS:
      return { ...initialState, item: action.payload };
    default:
      return state;
  }
}
