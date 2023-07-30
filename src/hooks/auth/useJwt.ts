import { getJWT } from '../../utils/jwt/jwt';

const useJwt = () => {
  const jwtFromStorage = getJWT();

  const isAuthenticated = jwtFromStorage;
  return { isAuthenticated };
};

export default useJwt;
