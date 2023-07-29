import * as ToastPrimitive from '@radix-ui/react-toast';
import {
  createContext,
  useCallback,
  useMemo,
  useContext,
  useReducer,
} from 'react';
import { clsx } from 'clsx';
import { SHOW_TOAST, ToastConstrains } from '../../contrains/components/toast';
import {
  ToastState,
  ToastAction,
  ToastContextType,
  ToastData,
  ToastProps,
} from '../../types/components/toast';

const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        open: true,
        toastData: action.payload,
      };
    case 'HIDE_TOAST':
      return {
        open: false,
        toastData: state.toastData,
      };
    default:
      return state;
  }
};

const Toast = ({ state, setOpen }: ToastProps) => {
  const bgColorMap = {
    success: 'bg-green-500',
    danger: 'bg-rose-500',
    warning: 'bg-yellow-500',
    default: 'bg-white dark:bg-gray-800',
  };

  const bgColor = () => {
    const type = state.toastData?.type || 'default';
    return bgColorMap[type] || 'bg-white dark:bg-gray-800';
  };

  return (
    <ToastPrimitive.Provider swipeDirection="right">
      <ToastPrimitive.Root
        open={state.open}
        onOpenChange={setOpen}
        className={clsx(
          'z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg',
          `${bgColor()}`,
          'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
          'radix-state-closed:animate-toast-hide',
          'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
          'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
          'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
          'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
          'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
          'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
        )}
      >
        <div className="flex">
          <div className="w-0 flex-1 flex items-center pl-5 py-4">
            <div className="w-full radix">
              <ToastPrimitive.Title className="text-sm font-medium text-gray-900">
                {state.toastData?.title}
              </ToastPrimitive.Title>
              <ToastPrimitive.Description className="mt-1 text-sm text-gray-700">
                {state.toastData?.message}
              </ToastPrimitive.Description>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col px-3 py-2 space-y-1">
              <div className="h-0 flex-1 flex">
                <ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 hover:bg-white hover:bg-opacity-60 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  Fechar
                </ToastPrimitive.Close>
              </div>
            </div>
          </div>
        </div>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
};
type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast: () => ToastContextType = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
};

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(toastReducer, {
    open: false,
    toastData: null,
  });

  const showToast = useCallback(
    (data: ToastData) => {
      if (state.open) {
        dispatch({ type: ToastConstrains.HIDE_TOAST });
        setTimeout(() => {
          dispatch({ type: ToastConstrains.SHOW_TOAST, payload: data });
        }, 400);
      } else {
        dispatch({ type: ToastConstrains.SHOW_TOAST, payload: data });
      }
    },
    [state.open]
  );

  const ToastProviderValues = useMemo(
    () => ({
      showToast,
    }),
    [showToast]
  );

  return (
    <ToastContext.Provider value={ToastProviderValues}>
      {children}
      <Toast
        state={state}
        setOpen={() => dispatch({ type: ToastConstrains.HIDE_TOAST })}
      />
    </ToastContext.Provider>
  );
};