import { cloneDeep } from 'lodash';

import * as types from 'constants/actionTypes/Posts';
import { CREATE_POST_LIKE_SUCCESS } from 'constants/actionTypes/Post';

function updatedItems(items, payload) {
  const { id, meta } = payload;
  const clonedItems = cloneDeep(items);

  clonedItems
    .find(item => item.id === id)
    .meta = meta;

  return clonedItems;
}

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
    case CREATE_POST_LIKE_SUCCESS:
      return { ...initialState, items: updatedItems(state.items, payload) };
    default:
      return state;
  }
}
