import { fireEvent, render } from '@testing-library/react';
import Button from '.';

test('renderiza o componente Button com os estilos e texto corretos', () => {
  const { getByText, getByTestId } = render(
    <Button
      text="Clique aqui"
      fullWidth
      bgColor="bg-indigo-400"
      hasBorder={false}
      data-testid="button"
    />,
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
  const onClick = jest.fn();
  const { getByTestId } = render(
    <Button text="Clique aqui" onClick={onClick} data-testid="button" />,
  );

  // Simula um clique no botão
  fireEvent.click(getByTestId('button'));

  // Verifica se a função de callback foi chamada
  expect(onClick).toHaveBeenCalled();
});

test('verifica a ausência de classes quando fullWidth e hasBorder são falsos', () => {
  const { getByTestId } = render(
    <Button
      text="Teste"
      fullWidth={false}
      hasBorder={false}
      data-testid="button"
    />,
  );

  const button = getByTestId('button');

  expect(button).not.toHaveClass('w-full');
  expect(button).not.toHaveClass('border');
  expect(button).not.toHaveClass('rounded');
});