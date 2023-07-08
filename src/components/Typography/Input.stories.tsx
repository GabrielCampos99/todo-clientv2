import type { Meta, StoryObj } from '@storybook/react';
import Typography from '.';

const meta = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'h1', children: 'H1 TEXT' },
};
