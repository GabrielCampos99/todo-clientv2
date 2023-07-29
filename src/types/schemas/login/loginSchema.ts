import { z } from 'zod';

export const LoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginSchemaProps = z.infer<typeof LoginSchema>;
