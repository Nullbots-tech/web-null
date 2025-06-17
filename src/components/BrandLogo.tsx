import React from 'react';

interface BrandLogoProps {
  size?: number;
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ size = 32, className = '' }) => (
  <div className={`inline-flex items-center justify-center ${className}`}>
    <img
      src="/image copy copy.png"
      alt="NULLBOTS Logo"
      width={size}
      height={size}
      className="object-contain"
    />
  </div>
);

export default BrandLogo;