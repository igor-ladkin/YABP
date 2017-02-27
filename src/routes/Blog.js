import MainLayout from 'layouts/MainLayout';
import Blog from 'views/Blog';
import Post from 'views/Post';
import About from 'views/About';

import { postPath, aboutPath } from 'helpers/routes';
import { fetchPosts } from 'actions/Posts';

const Index = {
  path: '/',
  component: Blog,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  },
};

const AboutRoute = {
  path: aboutPath(),
  component: About,
};

const PostRoute = {
  path: postPath(),
  component: Post,
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    AboutRoute,
    PostRoute,
  ],
};
