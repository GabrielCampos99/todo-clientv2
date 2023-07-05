import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    fullWidth: { control: 'boolean' },
    bgColor: {
      options: ['bg-indigo-400', 'bg-transparent'],
      control: { type: 'radio' },
    },
    hasBorder: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
