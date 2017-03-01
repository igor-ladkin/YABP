import * as types from 'constants/actionTypes/Posts';
import { rootPath } from 'helpers/routes';
import { API_CALL } from 'middleware/API';

export function fetchPosts() {
  return {
    [API_CALL]: {
      endpoint: `${rootPath()}`,
      method: 'GET',
      query: {},
      types: [
        types.FETCH_POSTS_REQUEST,
        types.FETCH_POSTS_SUCCESS,
        types.FETCH_POSTS_ERROR,
      ],
    },
  };
}
