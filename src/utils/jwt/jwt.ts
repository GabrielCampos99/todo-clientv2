import {
  UserAuthSchemaProps,
  UserSchemaProps,
} from '../../types/schemas/auth/user';

const JWT_EXPIRATION_TIME = 3600;

export function storeJWT(jwt: object) {
  // Make sure the JWT is valid.
  const stringfyJwt = JSON.stringify(jwt);
  if (!jwt || !stringfyJwt) {
    throw new Error('Invalid JWTTT');
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

  console.log(
    "localStorage.getItem('jwt_expiration_date')",
    parseDate(Number(localStorage.getItem('jwt_expiration_date')))
  );

  if (!jwt) return null;
  if (
    parseDate(Number(localStorage.getItem('jwt_expiration_date'))) < new Date()
  ) {
    // Faz o logout
    console.log('passei por aqui');
    logout();

    // Retorna null
    return null;
  }

  const jwtValid: UserAuthSchemaProps = JSON.parse(jwt);

  // Return the JWT.
  return jwtValid.token;
}

function parseDate(timestamp: number): Date {
  const date = new Date(timestamp * 1000);
  return date;
}

export function logout() {
  // Remove o JWT do armazenamento local.
  localStorage.removeItem('jwt');
  localStorage.removeItem('jwt_expiration_date');

  // Redireciona para a página inicial.
  window.location.href = '/';
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
