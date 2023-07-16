import { ToastConstrains } from '../../contrains/components/toast';

export type ToastContextType = {
  showToast: (data: ToastData) => void;
};

export type ToastProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  state: ToastState;
};

export type ToastAction =
  | { type: ToastConstrains.SHOW_TOAST; payload: ToastData }
  | { type: ToastConstrains.HIDE_TOAST };

export type ToastData = {
  message: string;
  title: string;
  type: 'success' | 'danger' | 'warning';
};

export type ToastState = {
  open: boolean;
  toastData: ToastData | null;
};
