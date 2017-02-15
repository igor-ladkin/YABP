import MainLayout from 'layouts/MainLayout';
import BlogPage from 'containers/BlogPage';
import Post from 'containers/Post';

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
