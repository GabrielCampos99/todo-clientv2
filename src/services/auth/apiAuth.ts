import { LoginSchemaProps } from '../../types/schemas/login/loginSchema';

export const loginService = async (props: LoginSchemaProps) => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props),
    });
    if (!response.ok) {
      throw new Error('Request failed with status: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('Error');
  }
};
