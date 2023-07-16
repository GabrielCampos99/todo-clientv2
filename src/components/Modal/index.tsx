import {
  cloneElement,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import {
  ModalContextProps,
  ModalProps,
  OpenProps,
  WindowProps,
} from '../../types/components/modal';

const ModalContext = createContext<ModalContextProps | null>(null);

const Modal = (props: ModalProps) => {
  const { children } = props;
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = setOpenName;

  const ModalProviderValue = useMemo(
    () => ({ openName, close, open }),
    [openName, open]
  );

  return (
    <ModalContext.Provider value={ModalProviderValue}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = (props: OpenProps) => {
  const { children, opens: opensWindowName } = props;
  const { open } = useContext(ModalContext) as ModalContextProps;
  return cloneElement(children, { onClick: () => open(opensWindowName) });
};

const Window = (props: WindowProps) => {
  const { children, name } = props;
  const { openName, close } = useContext(ModalContext) as ModalContextProps;

  const ref = useOutsideClick(close);

  if (name !== openName) return null;
  return createPortal(
    <div className="overlay fixed top-0 left-0 w-full h-screen bg-white bg-opacity-10 backdrop-blur-sm z-50 transition-all duration-500">
      <div
        ref={ref}
        className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg shadow-lg p-8 transition-all duration-500"
      >
        <button onClick={close}>Fechar</button>
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
