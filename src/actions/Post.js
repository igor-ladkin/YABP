import * as types from 'constants/actionTypes/Post';
import { postPath } from 'helpers/routes';
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
