import React, { useEffect, useRef, ReactNode } from 'react';

interface OutsideClickDetectorProps {
  onOutsideClick: () => void;
  children: ReactNode;
}

const OutsideClickDetector: React.FC<OutsideClickDetectorProps> = ({
  onOutsideClick,
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default OutsideClickDetector;