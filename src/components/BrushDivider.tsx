import React from 'react';

interface BrushDividerProps {
  className?: string;
}

/**
 * BrushDivider
 * A delicate, calligraphic sumi-e brush stroke divider.
 * Replaces generic straight lines with an authentic Japanese martial arts brush stroke,
 * tapering at the edges with organic ink variation in the Grimoire purple palette.
 */
export const BrushDivider: React.FC<BrushDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full overflow-hidden flex items-center justify-center py-2 relative pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-6xl h-4 sm:h-5 opacity-40 hover:opacity-60 transition-opacity"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="brushStrokeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F5FE8" stopOpacity="0" />
            <stop offset="12%" stopColor="#8F5FE8" stopOpacity="0.45" />
            <stop offset="35%" stopColor="#5E2B97" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#411B6F" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#5E2B97" stopOpacity="0.85" />
            <stop offset="88%" stopColor="#8F5FE8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#8F5FE8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Primary Calligraphic Brush Stroke Path (natural pressure and taper) */}
        <path
          d="M 60 12 
             C 180 10.5, 300 13.5, 420 11.8 
             C 540 10.2, 600 13.8, 720 12.2 
             C 840 10.8, 960 13.2, 1080 11.5 
             C 1110 11.2, 1140 12, 1160 12
             C 1130 13.2, 1070 14, 950 13.2
             C 830 14.2, 710 11.8, 590 13.8
             C 470 14.5, 350 12.5, 230 14
             C 150 14.2, 90 12.8, 60 12 Z"
          fill="url(#brushStrokeGrad)"
        />

        {/* Secondary Delicate Bristle Echo */}
        <path
          d="M 120 13.8 
             C 260 14.5, 400 12.5, 540 14.2 
             C 680 13.5, 820 14.8, 960 13.5 
             C 1020 13.2, 1060 12.8, 1080 13
             C 980 14.5, 840 15, 700 14.2
             C 560 15.2, 420 13.8, 280 14.8
             C 200 15, 150 14.2, 120 13.8 Z"
          fill="url(#brushStrokeGrad)"
          opacity="0.6"
        />

        {/* Subtle Center Ink Accent Node */}
        <circle cx="600" cy="12" r="1.5" fill="#4B2080" opacity="0.8" />
      </svg>
    </div>
  );
};
