import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { HomePage } from '../components/HomePage.tsx';
import { PrivateRoutes } from './PrivateRoutes.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [{}],
  },
]);
