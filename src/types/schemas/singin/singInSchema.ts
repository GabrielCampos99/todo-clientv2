import { z } from 'zod';

export const SingInSchema = z.object({
  name: z
    .string({ required_error: 'Por favor, insira o seu nome de usuário.' })
    .min(1, {
      message:
        'Por favor, insira no mínimo 1 caracteres para o nome de usuário.',
    }),
  password: z
    .string()
    .min(1, 'Por favor, insira no mínimo 1 caracteres para a senha.'),
  email: z
    .string({ required_error: 'Campo obrigatório.' })
    .email({ message: 'Por favor, digite um e-mail válido' }),
});

export type SingInProps = z.infer<typeof SingInSchema>;
