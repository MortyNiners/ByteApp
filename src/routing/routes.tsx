import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { HomePage } from '../components/HomePage.tsx';
import { PrivateRoutes } from './PrivateRoutes.tsx';
import { CreateAccount } from '../components/CreateAccount.tsx';
import { LogIn } from '../components/LogIn.tsx';
import { ResetPassword } from '../components/ResetPassword.tsx';
import { ChatRoom } from '../components/ChatRoom.tsx';

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
      {
        path: 'login',
        element: <LogIn />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: '/',
    element: <PrivateRoutes />,
    children: [
      {
        path: 'chat-room',
        element: <ChatRoom />,
      },
    ],
  },
]);
