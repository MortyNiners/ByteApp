import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { HomePage } from '../components/HomePage.tsx';
import { PrivateRoutes } from './PrivateRoutes.tsx';
import { CreateAccount } from '../components/CreateAccount.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'create-account',
        element: <CreateAccount />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [{}],
  },
]);
