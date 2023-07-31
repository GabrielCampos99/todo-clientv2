/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import BottomNav from '.';

const meta = {
  title: 'Components/BottomNav',
  component: BottomNav,
  decorators: [withRouter],
  argTypes: {},
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em 0' }}>
        <Story />
      </div>
    ),
  ],
};

Primary.story = {
  parameters: {
    reactRouter: {
      routePath: '/tarefas',
    },
  },
};
