import type { Meta } from '@storybook/react';
import Modal from '.';
import Button from '../Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;

export const Primary = {
  render: () => (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button text="Abra o modal" />
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <h1>Modal aberto</h1>
      </Modal.Window>
    </Modal>
  ),
};
