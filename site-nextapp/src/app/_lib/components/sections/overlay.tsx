import React from "react";

interface OverlayProps {
  className?: string;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ className = "", children }) => {
  return (
    <div
      className={`relative inset-0 flex items-center justify-center ${className}`}
    >
      {children}
      
    </div>
  );
};

export default Overlay;