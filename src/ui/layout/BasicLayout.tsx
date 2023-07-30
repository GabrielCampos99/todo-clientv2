import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useJwt from '../../hooks/auth/useJwt';

type BasicLayoutProps = { children: React.ReactNode };

const BasicLayout = (props: BasicLayoutProps) => {
  const { children } = props;

  const navigate = useNavigate();
  const { isAuthenticated } = useJwt();

  useEffect(() => {
    if (isAuthenticated) navigate('/tarefas');
  }, [isAuthenticated, navigate]);

  return <div>{children}</div>;
};

export default BasicLayout;
