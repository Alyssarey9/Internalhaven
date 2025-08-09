'use client';

export default function ModalWrapper({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-overlay">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-deep-plum/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-deep-plum text-cotton max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl animate-modal-content">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-cotton/60 hover:text-apricot text-4xl transition-all duration-300 hover:scale-110 z-10"
        >
          ×
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
} 