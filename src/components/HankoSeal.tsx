import React from 'react';

interface HankoSealProps {
  size?: number;
  className?: string;
}

/**
 * HankoSeal (判子)
 * Japanese signature seal stamp rendered in the Digital Grimoire purple palette.
 * Features an authentic circular stamp frame, internal seal characters (representing Logic & Mastery - 理 / 道),
 * and tactile ink stamp characteristics.
 */
export const HankoSeal: React.FC<HankoSealProps> = ({ size = 26, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      aria-label="Hanko signature stamp"
      role="img"
    >
      <defs>
        <radialGradient id="hankoInk" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#8E54E9" />
          <stop offset="70%" stopColor="#5E2B97" />
          <stop offset="100%" stopColor="#3F1968" />
        </radialGradient>
        <filter id="hankoStampNoise" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Group with slight organic stamp displacement */}
      <g filter="url(#hankoStampNoise)">
        {/* Outer Circular Ring (Authentic heavy outer seal wall) */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#hankoInk)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="98 2 80 1"
          fill="none"
        />

        {/* Inner concentric fine seal line */}
        <circle
          cx="50"
          cy="50"
          r="37"
          stroke="url(#hankoInk)"
          strokeWidth="1.4"
          strokeOpacity="0.8"
          fill="none"
        />

        {/* Stylized Seal Script (Traditional Tensho style monogram for "Oliveira / 道 / 理") */}
        {/* Top/Left Quadrant: Stylized '王 / 里' (Reason / Data logic) */}
        <path
          d="M32 28 H68 M50 28 V46 M36 38 H64 M34 46 H66"
          stroke="url(#hankoInk)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Central Divider Bar */}
        <line
          x1="26"
          y1="51"
          x2="74"
          y2="51"
          stroke="url(#hankoInk)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />

        {/* Bottom Quadrant: Stylized '道 / 印' (The Path / Official Stamp) */}
        <path
          d="M38 58 H62 M50 58 V76 M33 76 H67 M36 67 H64"
          stroke="url(#hankoInk)"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Martial Seal Corner Marks */}
        <circle cx="28" cy="50" r="1.8" fill="url(#hankoInk)" />
        <circle cx="72" cy="50" r="1.8" fill="url(#hankoInk)" />
      </g>
    </svg>
  );
};
