import * as types from 'constants/actionTypes/Search';
import { API_CALL } from 'middleware/API';

export function search({ q }) {
  return {
    [API_CALL]: {
      endpoint: '/search',
      method: 'GET',
      query: { q },
      types: [
        types.SEARCH_REQUEST,
        types.SEARCH_SUCCESS,
        types.SEARCH_ERROR,
      ],
    },
  };
}

export function changeSearchTerm(value) {
  return {
    type: types.CHANGE_SEARCH_TERM,
    payload: value,
  };
}
