'use client'

import { useToast } from './use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} data-toast-id={id}>
            <div className="flex-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
            <div className="flex items-center gap-1 h-full min-h-[20px]">
              <span className="toast-dot w-[4px] h-[4px] bg-white/40 rounded-full" />
              <span className="toast-dot w-[4px] h-[4px] bg-white/40 rounded-full" />
              <span className="toast-dot w-[4px] h-[4px] bg-white/40 rounded-full" />
            </div>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
