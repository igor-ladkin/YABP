import { FETCH_POSTS_SUCCESS } from 'constants/actionTypes/Posts';

const initialState = {
  count: 0,
  likes: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return payload.stats;
    default:
      return state;
  }
}
