import request from 'superagent';

import * as types from 'constants/actionTypes/Posts';
import { API_ROOT } from 'constants';

function requestPosts() {
  return {
    type: types.FETCH_POSTS_REQUEST,
  };
}

function receivePosts(payload) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
  };
}

function errorPosts() {
  return {
    type: types.FETCH_POSTS_ERROR,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());

    return request
      .get(`${API_ROOT}/`)
      .end((err, res) => (
        err ? dispatch(errorPosts()) : dispatch(receivePosts(res.body))
      ));
  };
}
