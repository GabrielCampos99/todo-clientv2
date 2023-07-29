import { LoginSchemaProps } from '../../types/schemas/login/loginSchema';
import { SingInProps } from '../../types/schemas/singin/singInSchema';

export const loginService = async (props: LoginSchemaProps) => {
  try {
    const url = import.meta.env.VITE_API_URL;

    if (!url) throw new Error('Erro ao recuperar url da API');

    const response = await fetch(`${url}/users`, {
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

export const singInService = async (props: SingInProps) => {
  try {
    const url = import.meta.env.VITE_API_URL;

    if (!url) throw new Error('Erro ao recuperar url da API');

    const response = await fetch(`${url}/users`, {
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
