import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const UserAuthSchema = z.object({
  user: UserSchema,
  token: z.string(),
});

export type UserAuthSchemaProps = z.infer<typeof UserAuthSchema>;
export type UserSchemaProps = z.infer<typeof UserSchema>;
