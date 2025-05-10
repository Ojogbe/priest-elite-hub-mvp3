
import { useState } from 'react';

export type ToastVariant = 'default' | 'destructive' | 'success';

export interface ToastProps {
  title?: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
  action?: React.ReactNode;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  const toast = ({
    title,
    description,
    variant = 'default',
    duration = 5000,
    action,
  }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant, duration, action }]);
    
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, duration);
    
    return id;
  };

  return { toast, toasts };
};

export const toast = (props: ToastProps) => {
  const event = new CustomEvent('toast', {
    detail: props,
  });
  
  window.dispatchEvent(event);
};
