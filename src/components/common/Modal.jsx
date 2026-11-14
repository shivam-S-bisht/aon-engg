import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icons';

export const Modal = ({ isOpen, onClose, title, subtitle, children, maxWidth = '720px' }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" style={{ maxWidth }} ref={modalRef}>
        <div className="modal-header">
          <div>
            {title && <h2 id="modal-title">{title}</h2>}
            {subtitle && <p className="modal-subtitle">{subtitle}</p>}
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};
