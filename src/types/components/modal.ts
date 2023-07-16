export type ModalProps = { children: React.ReactNode };
export type OpenProps = { children: React.ReactElement; opens: string };

export type WindowProps = { children: React.ReactNode; name: string };
export type ModalContextProps = {
  openName: string;
  close: () => void;
  open: React.Dispatch<React.SetStateAction<string>>;
};
