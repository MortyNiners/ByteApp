import { Outlet, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export const PrivateRoutes = () => {
  const access_token = localStorage.getItem('access_token');
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ['access_token'],
    queryFn: () => access_token,
  });
  return <>{data ? <Outlet /> : navigate('/')}</>;
};
