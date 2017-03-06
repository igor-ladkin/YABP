import * as types from 'constants/actionTypes/About';
import { API_CALL } from 'middleware/API';

export function fetchAbout() {
  return {
    [API_CALL]: {
      endpoint: '/about',
      method: 'GET',
      query: {},
      types: [
        types.FETCH_ABOUT_REQUEST,
        types.FETCH_ABOUT_SUCCESS,
        types.FETCH_ABOUT_ERROR,
      ],
    },
  };
}
