import React from 'react';

export const InstagramIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.79 14.07c-.24.67-1.4 1.24-1.92 1.28-.49.03-.98.15-3.32-.78-2-.8-3.48-2.77-3.58-2.9-.1-.13-.81-1.07-.81-2.05 0-.97.51-1.45.69-1.65.18-.2.4-.25.54-.25.13 0 .27 0 .38.01.12.01.28-.05.44.33.17.4.58 1.41.63 1.51.05.1.08.22.02.35-.07.13-.1.22-.2.33-.1.12-.22.26-.31.35-.11.1-.22.21-.1.41.13.22.58.96 1.25 1.56.86.77 1.59 1.01 1.82 1.12.22.11.36.1.49-.05.13-.16.57-.66.72-.89.15-.22.31-.19.51-.11.21.08 1.33.63 1.56.74.23.11.38.17.44.27.06.1.06.58-.18 1.25z" />
  </svg>
);

export const LattesIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <circle cx="12" cy="10" r="3" />
    <line x1="12" y1="13" x2="12" y2="16" />
  </svg>
);
