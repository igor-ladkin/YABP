import { get } from 'lodash';

import MainLayout from 'layouts/MainLayout';
import Blog from 'views/Blog';
import Post from 'views/Post';
import About from 'views/About';

import { postPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const Index = {
  path: '/',
  component: Blog,
  prepareData(store, query) {
    store.dispatch(fetchPosts({ page: query.page }));
  },
};

const AboutRoute = {
  path: aboutPath(),
  component: About,
};

const PostRoute = {
  path: postPath(),
  component: Post,
  prepareData(store, query, params) {
    if (get(store.getState(), 'post.item.id', null) !== params.id) {
      store.dispatch(fetchPost(params.id));
    }
  },
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    AboutRoute,
    PostRoute,
  ],
};
