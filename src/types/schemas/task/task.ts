import { z } from 'zod';
import { UserSchemaProps } from '../auth/user';

export const TaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  completed: z.boolean(),
});

export type TaskSchemaProps = z.infer<typeof TaskSchema>;
export type ITask = TaskSchemaProps & {
  id: string;
  created_at: Date;
  updated_at: Date;
  user: UserSchemaProps;
};
