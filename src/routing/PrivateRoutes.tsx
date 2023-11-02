import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext.tsx';

export const PrivateRoutes = () => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate('');
    }
  }, [isAuth, navigate]);
  return (
    <>
      <Outlet />
    </>
  );
};
