import React from 'react';

export const LogoIcon = ({ className = '', size = 44 }) => (
  <svg
    viewBox="0 0 44 44"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
  >
    <rect x=".5" y=".5" width="43" height="43" rx="4" fill="#fff" stroke="#dcdfe7" />
    <path
      d="M22 7 38 36H6z"
      fill="none"
      stroke="#43217a"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
    <path
      d="M22 17 30 31H14z"
      fill="none"
      stroke="#43217a"
      strokeWidth="2.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const HvacIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="1.8" />
    <path d="M12 10.2C12 6 13.5 3 17 3c0 3-2 6-5 7.2zM13.8 12c4.2 0 7.2 1.5 7.2 5-3 0-6-2-7.2-5zM12 13.8c0 4.2-1.5 7.2-5 7.2 0-3 2-6 5-7.2zM10.2 12C6 12 3 10.5 3 7c3 0 6 2 7.2 5z" />
  </svg>
);

export const ElecIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </svg>
);

export const PlumIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 3C8 8 6 11 6 14a6 6 0 0 0 12 0c0-3-2-6-6-11z" />
  </svg>
);

export const FireIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M12 2c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z" />
  </svg>
);

export const ExtIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M8 10h8v11H8zM12 10V6M12 6h5M8 14h8" />
    <circle cx="18.5" cy="6" r="1.5" />
  </svg>
);

export const RulerIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M3 17 17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2" />
  </svg>
);

export const ClockIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const ToolIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5zM14.5 6.5l3-3" />
  </svg>
);

export const CheckIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.5 3 3 5-6" />
  </svg>
);

export const IbmsIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 9h2M13 9h2M9 13h2M13 13h2M9 17h2M13 17h2" />
  </svg>
);

export const PhoneIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const MailIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export const MapPinIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const CloseIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const ExternalLinkIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const ChevronIcon = ({ className = '', direction = 'right' }) => {
  const rotate = {
    down: 'rotate(90deg)',
    up: 'rotate(-90deg)',
    left: 'rotate(180deg)',
    right: 'rotate(0deg)',
  }[direction];

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={{ transform: rotate, transition: 'transform .15s ease' }}
      aria-hidden="true"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
};

export const DocumentIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export const ShieldIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

export const AwardIcon = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

export const ServiceIconMap = {
  hvac: HvacIcon,
  elec: ElecIcon,
  electrical: ElecIcon,
  plum: PlumIcon,
  plumbing: PlumIcon,
  fire: FireIcon,
  firefighting: FireIcon,
  ext: ExtIcon,
  equipment: ExtIcon,
  ibms: IbmsIcon,
};
