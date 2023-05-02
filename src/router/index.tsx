import {Navigate} from 'react-router-dom';
import Auth from '../pages/Auth';
import About from '../pages/About';
import Posts from '../pages/Posts';
import PostId from '../pages/PostId';
import NotFound from '../pages/404';

export const privateRoutes = [
  {path: '/about', element: <About />},
  {path: '/posts', element: <Posts />},
  {path: '/posts/:id', element: <PostId />},
  {path: '/auth', element: <Navigate to="/posts"/>},
  {path: '/', element: <Navigate to="/posts"/>},
  {path: '*', element: <NotFound />},
];

export const publicRoutes = [
  {path: '/auth', element: <Auth />},
  {path: '/', element: <Navigate to="/auth"/>},
  {path: '*', element: <Navigate to="/auth"/>},
];