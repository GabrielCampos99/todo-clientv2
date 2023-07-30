import type { Meta, StoryObj } from '@storybook/react';
import BottomNav from '.';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
  title: 'Components/BottomNav',
  component: BottomNav,
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.story = {
  parameters: {
    reactRouter: {
      routePath: '/tarefas',
    },
  },
};
