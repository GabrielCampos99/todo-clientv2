import { render, fireEvent } from '@testing-library/react';
import { useOutsideClick } from './useOutsideClick';

test('Call the manipulador when click outside the element', () => {
  const handler = jest.fn();

  const Component = () => {
    const ref = useOutsideClick(handler);
    return <div ref={ref}>Elemento</div>;
  };

  const { getByText } = render(<Component />);

  // Simula um clique dentro do elemento
  fireEvent.click(getByText('Elemento'));

  // Verifica se o manipulador não foi chamado
  expect(handler).not.toHaveBeenCalled();

  // Simula um clique fora do elemento
  fireEvent.click(document);

  // Verifica se o manipulador foi chamado uma vez
  expect(handler).toHaveBeenCalledTimes(1);
});
