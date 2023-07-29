import { z } from 'zod';

export const LoginSchema = z.object({
  username: z
    .string({ required_error: 'Por favor, insira o seu nome de usuário.' })
    .min(10, {
      message:
        'Por favor, insira no mínimo 10 caracteres para o nome de usuário.',
    }),
  password: z
    .string()
    .min(10, 'Por favor, insira no mínimo 10 caracteres para a senha.'),
});

export type LoginSchemaProps = z.infer<typeof LoginSchema>;
