// Modal.jsx
import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Prevent scrolling behind modal
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop (semi‑transparent black) */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      
      {/* Modal panel */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
          <div>{children}</div>
          
          {/* Optional footer with actions – you can pass buttons via children */}
        </div>
      </div>
    </div>
  );
};

export default Modal;