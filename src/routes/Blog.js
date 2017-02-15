import MainLayout from 'layouts/MainLayout';
import BlogPage from 'views/BlogPage';
import Post from 'views/Post';

import { postPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: BlogPage,
};

const PostRoute = {
  path: postPath(),
  component: Post,
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
  ],
};
