'use client';

interface AlertProps {
  title?: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose?: () => void;
}

const alertStyles = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconStyles = {
  success: '✓',
  error: '✕',
  warning: '!',
  info: 'i',
};

export function Alert({ title, message, type, onClose }: AlertProps) {
  return (
    <div className={`border rounded-lg p-4 ${alertStyles[type]}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <span className="font-bold mt-0.5">{iconStyles[type]}</span>
          <div>
            {title && <p className="font-semibold mb-1">{title}</p>}
            <p className="text-sm">{message}</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="text-lg leading-none hover:opacity-70"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
