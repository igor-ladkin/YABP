import MainLayout from 'layouts/MainLayout';
import Blog from 'views/Blog';
import Post from 'views/Post';

import { postPath } from 'helpers/routes';

const Index = {
  path: '/',
  component: Blog,
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
