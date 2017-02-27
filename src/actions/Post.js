import request from 'superagent';

import * as types from 'constants/actionTypes/Post';
import { API_ROOT } from 'constants';
import { postPath } from 'helpers/routes';

function requestPost() {
  return {
    type: types.FETCH_POST_REQUEST,
  };
}

function errorPost() {
  return {
    type: types.FETCH_POST_ERROR,
  };
}

function receivePost(payload) {
  return {
    type: types.FETCH_POST_SUCCESS,
    payload,
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost());

    return request
      .get(`${API_ROOT}${postPath(id)}`)
      .end((err, res) => (
        err ? dispatch(errorPost()) : dispatch(receivePost(res.body))
      ));
  };
}
