import { throttle } from 'lodash';

import * as types from 'constants/actionTypes/Search';
import { searchPath } from 'helpers/routes';
import { API_CALL } from 'middleware/API';

function search({ q }) {
  return {
    [API_CALL]: {
      endpoint: `${searchPath()}`,
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
    payload: { value },
  };
}

const throttledSearch = throttle(search, 3000);
export { throttledSearch as search };
