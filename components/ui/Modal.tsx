'use client';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export function Modal({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = 'Xác nhận',
  cancelText = 'Hủy',
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4 shadow-lg">
        {title && (
          <div className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}

        <div className="px-6 py-4">
          {children}
        </div>

        <div className="border-t px-6 py-4 flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
          >
            {cancelText}
          </button>
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
