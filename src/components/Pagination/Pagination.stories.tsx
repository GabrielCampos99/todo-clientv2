/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';

const meta = {
  title: 'Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { totalPages: 10 },
}; */

// eslint-disable-next-line import/no-extraneous-dependencies
/* eslint-disable import/no-extraneous-dependencies */
import { Story, Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import Pagination from '.';

export default {
  title: 'Province',
  component: Pagination,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <Pagination totalPages={10} {...args} />;

export const Province = Template.bind({});
Province.parameters = {};
Province.args = {};
