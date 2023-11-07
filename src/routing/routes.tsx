import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout.tsx';
import { HomePage } from '../components/HomePage.tsx';
import { PrivateRoutes } from './PrivateRoutes.tsx';
import { CreateAccount } from '../components/CreateAccount.tsx';
import { LogIn } from '../components/LogIn.tsx';
import { ResetPassword } from '../components/ResetPassword.tsx';
import { AppContainer } from '../components/AppContainer.tsx';
import { AuthProvider } from '../context/AuthContext.tsx';
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
        element: (
          <AuthProvider>
            <LogIn />
          </AuthProvider>
        ),
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthProvider>
        <PrivateRoutes />
      </AuthProvider>
    ),
    children: [
      {
        path: 'main-container',
        element: <AppContainer />,
      },
    ],
  },
]);
