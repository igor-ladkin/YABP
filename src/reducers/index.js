import { combineReducers } from 'redux';

import posts from './Posts';
import post from './Post';
import stats from './Stats';
import search from './Search';
import about from './About';

export default combineReducers({
  posts,
  post,
  stats,
  search,
  about,
});
