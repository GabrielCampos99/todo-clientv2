import { render, fireEvent } from '@testing-library/react';
import Modal from '.';

test('abre e fecha a janela modal', () => {
  // Renderiza o componente Modal
  const { getByText, queryByText } = render(
    <Modal>
      <Modal.Open opens="modal1">
        <button>Abrir Modal</button>
      </Modal.Open>
      <Modal.Window name="modal1">
        <div>Conteúdo do Modal</div>
      </Modal.Window>
    </Modal>,
  );

  // Verifica se a janela modal não está sendo exibida inicialmente
  expect(queryByText('Conteúdo do Modal')).toBeNull();

  // Clica no botão para abrir a janela modal
  fireEvent.click(getByText('Abrir Modal'));

  // Verifica se a janela modal foi aberta
  expect(getByText('Conteúdo do Modal')).toBeInTheDocument();

  // Clica no botão para fechar a janela modal
  fireEvent.click(getByText('Fechar'));

  // Verifica se a janela modal foi fechada
  expect(queryByText('Conteúdo do Modal')).toBeNull();
});
