import * as jwt from 'jose';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getJWT } from '../../utils/jwt/jwt';

type ProtectedRouteProps = { children: React.ReactNode };

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { children } = props;
  const navigate = useNavigate();
  const jwtSecret = import.meta.env.VITE_JWT_TOKEN;
  if (!jwtSecret) throw new Error('Erro ao recuperar o secredo jwt');

  const jwtFromStorage = getJWT();
  const isAuthenticated = jwt.jwtVerify(`${jwtFromStorage}`, jwtSecret);

  useEffect(() => {
    if (!isAuthenticated || !jwtFromStorage) navigate('/login');
  }, [isAuthenticated, jwtFromStorage, navigate]);
  return children;
};

export default ProtectedRoute;
