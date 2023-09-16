import { NetworkError, BadRequestError, ApiError } from '../../utils/errors';
import { getJWT } from '../../utils/jwt/jwt';
import { toast } from 'react-toastify';
import { Response } from '../../types';
const JSON_CONTENT_TYPE = 'application/json';

export const getTasks = async <T>(
  { page }: { page: number },
  token: string | null = getJWT()
): Promise<Response<T>> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  if (!apiUrl || !token) {
    throw new NetworkError('Erro ao recuperar URL da API');
  }

  try {
    const response = await fetch(`${apiUrl}/tasks?page=${page}`, {
      method: 'GET',
      headers: {
        'Content-Type': JSON_CONTENT_TYPE,
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      if (response.status === 400) {
        throw new BadRequestError(errorResponse.message);
      } else {
        throw new NetworkError('Erro na comunicação com a API');
      }
    }

    return response.json() as Promise<Response<T>>;
  } catch (error) {
    if (
      error instanceof ApiError ||
      error instanceof BadRequestError ||
      error instanceof NetworkError
    ) {
      toast(error.message, { type: 'error' });
      throw error;
    } else {
      toast('Erro desconhecido', { type: 'error' });
      throw new Error('Erro desconhecido ao realizar a solicitação da API');
    }
  }
};
