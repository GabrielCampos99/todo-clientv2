import { z } from 'zod';

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Campo obrigatório.' })
    .email({ message: 'Por favor, digite um e-mail válido' }),
  password: z
    .string()
    .min(1, 'Por favor, insira no mínimo 1 caracteres para a senha.'),
});

export type LoginSchemaProps = z.infer<typeof LoginSchema>;
