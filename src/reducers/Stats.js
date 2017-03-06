import { cloneDeep } from 'lodash';

import { FETCH_POSTS_SUCCESS } from 'constants/actionTypes/Posts';
import { CREATE_POST_LIKE_SUCCESS } from 'constants/actionTypes/Post';

const initialState = {
  count: 0,
  likes: {},
};

function updatedLikes(likes, payload) {
  const { id, meta } = payload;
  const clonedLikes = cloneDeep(likes);

  clonedLikes[id][1] = meta.likeCount;

  return clonedLikes;
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return payload.stats;
    case CREATE_POST_LIKE_SUCCESS:
      return { ...state, likes: updatedLikes(state.likes, payload) };
    default:
      return state;
  }
}
