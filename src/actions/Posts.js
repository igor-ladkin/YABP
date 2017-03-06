import * as types from 'constants/actionTypes/Posts';
import { API_CALL } from 'middleware/API';

export function fetchPosts({ page }) {
  return {
    [API_CALL]: {
      endpoint: '/posts',
      method: 'GET',
      query: { page },
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR,
      ],
    },
  };
}
