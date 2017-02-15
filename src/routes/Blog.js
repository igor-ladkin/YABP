import MainLayout from 'layouts/MainLayout';
import BlogPage from 'containers/BlogPage';

const Index = {
  path: '/',
  component: BlogPage,
}

export default {
  component: MainLayout,
  childRoutes: [
    Index,
  ],
};
