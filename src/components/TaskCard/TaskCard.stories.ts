import type { Meta, StoryObj } from '@storybook/react';
import TaskCard from '.';

const meta = {
  title: 'Components/TaskCard',
  component: TaskCard,
  argTypes: {},
} satisfies Meta<typeof TaskCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Tarefa 1',
    description: 'Terminar a tarefa 1',
    created_at: new Date(),
  },
};
