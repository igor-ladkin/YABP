import MainLayout from 'layouts/MainLayout';
import BlogPage from 'containers/BlogPage';
import Post from 'containers/Post';

const Index = {
  path: '/',
  component: BlogPage,
};

const PostRoute = {
  path: '/posts/:id',
  component: Post,
}

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
  ],
};
