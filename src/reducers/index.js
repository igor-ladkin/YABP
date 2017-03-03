import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import stats from './Stats';

export default combineReducers({
  posts,
  post,
  stats,
});
