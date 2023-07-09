import type { Meta } from '@storybook/react';
import Carrousel from '.';

const meta = {
  title: 'Components/Carrousel',
  component: Carrousel,
} satisfies Meta<typeof Carrousel>;

export default meta;

const filledArray = [...new Array(10)].map((_, i) => ({ i }));

export const Primary = {
  render: () => (
    <Carrousel
      data={filledArray}
      render={(item) => (
        <div className="border border-red-600 min-h-[500px]">{item.i}</div>
      )}
    />
  ),
};
