import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ 
  size = 32, 
  className = '',
  showText = false 
}) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div 
        className="flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Custom SVG version of your logo */}
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0"
        >
          {/* Code brackets in green */}
          <g fill="#22c55e">
            <path d="M15 25L5 35L15 45" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M25 20L20 50" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
            <path d="M35 25L45 35L35 45" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          
          {/* NULLBOTS text representation */}
          <g fill="currentColor" className="text-white">
            <rect x="55" y="25" width="4" height="20" />
            <rect x="55" y="25" width="12" height="4" />
            <rect x="63" y="25" width="4" height="12" />
            <rect x="63" y="33" width="8" height="4" />
            <rect x="67" y="37" width="4" height="8" />
            
            <rect x="75" y="25" width="4" height="20" />
            <rect x="75" y="25" width="12" height="4" />
            <rect x="75" y="33" width="8" height="4" />
            <rect x="75" y="41" width="12" height="4" />
          </g>
        </svg>
      </div>
      {showText && (
        <span className="ml-2 font-bold text-white">NULLBOTS</span>
      )}
    </div>
  );
};

export default BrandLogo;