import React from 'react';

interface SigilProps {
  className?: string;
  size?: number;
  variant?: 'compass' | 'knot' | 'grimoire' | 'kata' | 'telemetry' | 'minimal';
  animated?: boolean;
}

export const SigilRune: React.FC<SigilProps> = ({
  className = '',
  size = 36,
  variant = 'compass',
  animated = false,
}) => {
  if (variant === 'grimoire') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} ${animated ? 'animate-sigil-pulse' : ''}`}
      >
        <circle cx="60" cy="60" r="54" stroke="#D1C2EE" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="60" cy="60" r="46" stroke="#7C4DC4" strokeWidth="1.2" />
        <circle cx="60" cy="60" r="34" stroke="#9A75DC" strokeWidth="0.8" opacity="0.8" />
        {/* Octagram */}
        <polygon
          points="60,18 70,44 96,36 82,58 102,74 76,78 72,104 54,84 28,94 40,70 20,54 44,48"
          stroke="#4D2A8E"
          strokeWidth="0.9"
          opacity="0.4"
        />
        {/* Diamond in square */}
        <rect
          x="36"
          y="36"
          width="48"
          height="48"
          stroke="#7C4DC4"
          strokeWidth="1"
          transform="rotate(45 60 60)"
        />
        <circle cx="60" cy="60" r="8" stroke="#3D2472" strokeWidth="1.4" fill="#F3EEFB" />
        <circle cx="60" cy="60" r="2.5" fill="#3D2472" />
        {/* Axis ticks */}
        <line x1="60" y1="6" x2="60" y2="114" stroke="#8F5FE8" strokeWidth="0.8" strokeDasharray="2 6" />
        <line x1="6" y1="60" x2="114" y2="60" stroke="#8F5FE8" strokeWidth="0.8" strokeDasharray="2 6" />
      </svg>
    );
  }

  if (variant === 'kata') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Martial arts fluid stroke meets geometric precision */}
        <circle cx="40" cy="40" r="36" stroke="#C9B7EA" strokeWidth="1" strokeDasharray="2 4" />
        <circle cx="40" cy="40" r="28" stroke="#7C4DC4" strokeWidth="1.2" />
        <path d="M40 14 L40 66" stroke="#5B32A3" strokeWidth="1.2" />
        <path d="M22 28 L58 52" stroke="#5B32A3" strokeWidth="1" />
        <path d="M58 28 L22 52" stroke="#5B32A3" strokeWidth="1" />
        <polygon points="40,24 54,40 40,56 26,40" stroke="#8F5FE8" strokeWidth="1" fill="#FAF8FD" />
        <circle cx="40" cy="40" r="3.5" fill="#3D2472" />
      </svg>
    );
  }

  if (variant === 'telemetry') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="6" y="6" width="48" height="48" rx="8" stroke="#D1C2EE" strokeWidth="1" />
        <circle cx="30" cy="30" r="18" stroke="#7C4DC4" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="30" y1="12" x2="30" y2="48" stroke="#3D2472" strokeWidth="1.2" />
        <line x1="12" y1="30" x2="48" y2="30" stroke="#3D2472" strokeWidth="1.2" />
        <circle cx="30" cy="30" r="4" fill="#673AB7" />
        <circle cx="30" cy="12" r="2" fill="#7C4DC4" />
        <circle cx="48" cy="30" r="2" fill="#7C4DC4" />
        <circle cx="30" cy="48" r="2" fill="#7C4DC4" />
        <circle cx="12" cy="30" r="2" fill="#7C4DC4" />
      </svg>
    );
  }

  if (variant === 'knot') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="8" y="8" width="24" height="24" transform="rotate(45 20 20)" stroke="#7C4DC4" strokeWidth="1.2" fill="#FAF8FD" />
        <circle cx="20" cy="20" r="14" stroke="#C9B7EA" strokeWidth="0.8" strokeDasharray="2 3" />
        <circle cx="20" cy="20" r="3" fill="#3D2472" />
      </svg>
    );
  }

  if (variant === 'minimal') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="12" cy="12" r="9" stroke="#7C4DC4" strokeWidth="1.2" />
        <path d="M12 4 L12 20 M4 12 L20 12" stroke="#9A75DC" strokeWidth="0.8" strokeDasharray="1 3" />
        <circle cx="12" cy="12" r="2.5" fill="#3D2472" />
      </svg>
    );
  }

  // Default 'compass'
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="17" cy="17" r="14" stroke="#C9B7EA" strokeWidth="1" strokeDasharray="1 3" />
      <circle cx="17" cy="17" r="10" stroke="#7C4DC4" strokeWidth="1.2" />
      <path d="M17 5 L17 29 M5 17 L29 17" stroke="#5B32A3" strokeWidth="1" strokeDasharray="1 4" />
      <polygon points="17,10 20,17 17,24 14,17" stroke="#7C4DC4" strokeWidth="0.8" fill="#F4EFFB" />
      <circle cx="17" cy="17" r="2.6" fill="#3D2472" />
    </svg>
  );
};

export const BackgroundGrimoireMesh: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* Soft gradient ambient orbs */}
      <div className="absolute -top-[120px] -right-[120px] w-[540px] h-[540px] rounded-full bg-gradient-to-br from-[#EBDCFD]/40 to-[#D4BFF9]/20 blur-3xl" />
      <div className="absolute top-[35%] -left-[160px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E3D4FB]/30 to-[#F2E8FD]/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[5%] w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#E9DDFC]/30 to-[#D8C2F8]/20 blur-3xl" />

      {/* Subtle geometric rune watermark in background */}
      <svg
        className="absolute top-16 right-[-80px] w-[600px] h-[600px] opacity-[0.09] text-[#542B9A] animate-slow-spin"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="110" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" />
        <polygon points="200,50 330,125 330,275 200,350 70,275 70,125" stroke="currentColor" strokeWidth="1" />
        <polygon points="200,20 355,110 355,290 200,380 45,290 45,110" stroke="currentColor" strokeWidth="0.8" />
        <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="3 9" />
        <line x1="72" y1="72" x2="328" y2="328" stroke="currentColor" strokeWidth="0.8" />
        <line x1="328" y1="72" x2="72" y2="328" stroke="currentColor" strokeWidth="0.8" />
      </svg>
    </div>
  );
};
