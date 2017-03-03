import * as types from 'constants/actionTypes/Post';
import { postPath, postLikePath } from 'helpers/routes';
import { API_CALL } from 'middleware/API';

export function fetchPost(id) {
  return {
    [API_CALL]: {
      endpoint: `${postPath(id)}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POST_REQUEST,
        types.FETCH_POST_SUCCESS,
        types.FETCH_POST_ERROR,
      ],
    },
  };
}

export function createPostLike(id) {
  return {
    [API_CALL]: {
      endpoint: `${postLikePath(id)}`,
      method: 'POST',
      query: {},
      types: [
        types.CREATE_POST_LIKE_REQUEST,
        types.CREATE_POST_LIKE_SUCCESS,
        types.CREATE_POST_LIKE_ERROR,
      ],
    },
  };
}
