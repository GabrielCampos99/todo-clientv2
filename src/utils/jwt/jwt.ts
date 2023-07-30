import {
  UserAuthSchemaProps,
  UserSchemaProps,
} from '../../types/schemas/auth/user';

const JWT_EXPIRATION_TIME = 3600;

export function storeJWT(jwt: object) {
  // Make sure the JWT is valid.
  const stringfyJwt = JSON.stringify(jwt);
  if (!jwt || !stringfyJwt) {
    throw new Error('Invalid JWT');
  }

  // Store the JWT in the localStorage.
  localStorage.setItem('jwt', stringfyJwt);

  // Set an expiration date for the JWT.
  const jwtExpirationSeconds =
    Math.floor(Date.now() / 1000) + JWT_EXPIRATION_TIME;

  // Armazena a data de expiração no localStorage
  localStorage.setItem('jwt_expiration_date', `${jwtExpirationSeconds}`);
}

export function getJWT(): string | null {
  const jwt = localStorage.getItem('jwt');
  if (
    !jwt ||
    new Date(`${localStorage.getItem('jwt_expiration_date')}`) < new Date()
  ) {
    return null;
  }
  const jwtValid: UserAuthSchemaProps = JSON.parse(jwt);

  // Return the JWT.
  return jwtValid.token;
}

export function getAuthUserFromLocalStorage(): UserSchemaProps | null {
  // Get the JWT from the localStorage.
  const jwt = localStorage.getItem('jwt');
  // Make sure the JWT is not expired.
  if (
    !jwt ||
    new Date(`${localStorage.getItem('jwt_expiration_date')}`) < new Date()
  ) {
    return null;
  }
  const jwtValid: UserAuthSchemaProps = JSON.parse(jwt);

  // Return the user.
  return jwtValid.user;
}
