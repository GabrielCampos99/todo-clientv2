import { fireEvent, render } from '@testing-library/react';
import { vitest } from 'vitest';
import Button from '.';

test('renderiza o componente Button com os estilos e texto corretos', () => {
  const { getByText, getByTestId } = render(
    <Button
      fullWidth
      bgColor="bg-indigo-400"
      hasBorder={false}
      data-testid="button"
    >
      Clique aqui
    </Button>,
  );

  // Verifica se o texto do botão está correto
  expect(getByText('Clique aqui')).toBeInTheDocument();

  // Verifica se os estilos foram aplicados corretamente
  const button = getByTestId('button');
  expect(button).toHaveClass('w-full');
  expect(button).toHaveClass('bg-indigo-400');
  expect(button).not.toHaveClass('border');
  expect(button).not.toHaveClass('rounded');
});

test('chama a função de callback ao clicar no botão', () => {
  const onClick = vitest.fn();
  const { getByTestId } = render(
    <Button onClick={onClick} data-testid="button">
      Clique aqui
    </Button>,
  );

  // Simula um clique no botão
  fireEvent.click(getByTestId('button'));

  // Verifica se a função de callback foi chamada
  expect(onClick).toHaveBeenCalled();
});

test('verifica a ausência de classes quando fullWidth e hasBorder são falsos', () => {
  const { getByTestId } = render(
    <Button fullWidth={false} hasBorder={false} data-testid="button" />,
  );

  const button = getByTestId('button');

  expect(button).not.toHaveClass('w-full');
  expect(button).not.toHaveClass('border');
  expect(button).not.toHaveClass('rounded');
});

test('verifica a existências de classes quando disabled é verdadeiro.', () => {
  const { getByTestId } = render(<Button data-testid="button" disabled />);

  const button = getByTestId('button');

  expect(button).toHaveClass('opacity-50');
  expect(button).toHaveClass('cursor-not-allowed');
});

test('verifica a ausência de classes quando disabled é verdadeiro.', () => {
  const { getByTestId } = render(<Button data-testid="button" />);

  const button = getByTestId('button');

  expect(button).not.toHaveClass('opacity-50');
  expect(button).not.toHaveClass('cursor-not-allowed');
});
