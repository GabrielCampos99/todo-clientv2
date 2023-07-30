import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useJwt from '../../hooks/auth/useJwt';

type ProtectedRouteProps = { children: React.ReactNode };

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const navigate = useNavigate();
  const { isAuthenticated } = useJwt();

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  return children;
};

export default ProtectedRoute;
