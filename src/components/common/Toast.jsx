import React, { useEffect } from 'react';
import { CheckIcon, CloseIcon } from './Icons';

export const Toast = ({ message, type = 'success', onClose, duration = 6000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className={`toast ${type}`}>
        <div className="toast-icon">
          <CheckIcon />
        </div>
        <div className="toast-body">
          <p>{message}</p>
        </div>
        <button
          type="button"
          className="toast-close"
          onClick={onClose}
          aria-label="Dismiss message"
        >
          <CloseIcon size={16} />
        </button>
      </div>
    </div>
  );
};
