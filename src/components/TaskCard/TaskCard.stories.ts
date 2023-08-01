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
  args: {},
};
