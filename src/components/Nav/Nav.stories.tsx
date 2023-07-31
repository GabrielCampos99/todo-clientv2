import type { Meta, StoryObj } from '@storybook/react';
import TopNav from '.';
import { ToastProvider } from '../Toast';

const meta: Meta<typeof TopNav> = {
  component: TopNav,
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <ToastProvider>
          <Story />
        </ToastProvider>
      </div>
    ),
  ],
};
