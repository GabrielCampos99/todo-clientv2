import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { placeholder: 'Enter your Username', label: 'Username', error: '' },
};
