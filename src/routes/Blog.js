import MainLayout from 'layouts/MainLayout';
import Blog from 'views/Blog';
import Post from 'views/Post';
import About from 'views/About';

import { postPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';
import { fetchAbout } from 'actions/About';

const Index = {
  path: '/',
  component: Blog,
  prepareData(store, query) {
    return store.dispatch(fetchPosts({ page: query.page }));
  },
};

const AboutRoute = {
  path: aboutPath(),
  component: About,
  prepareData(store) {
    return store.dispatch(fetchAbout());
  },
};

const PostRoute = {
  path: postPath(),
  component: Post,
  prepareData(store, query, params) {
    return store.dispatch(fetchPost(params.id));
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
