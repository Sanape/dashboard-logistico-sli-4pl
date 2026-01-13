import React from 'react';

interface StepCardProps {
  stepId: number;
  activeStep: number | null;
  onClick: (id: number) => void;
  className?: string;
  children: React.ReactNode;
}

export default function StepCard({
  stepId,
  activeStep,
  onClick,
  className = '',
  children,
}: StepCardProps) {
  const isActive = activeStep === stepId;

  // Clases para el estado activo idénticas al CSS original
  const activeClasses = isActive
    ? 'bg-red-50 !border-red-500 ring-4 ring-red-500 scale-105 z-20'
    : 'hover:scale-[1.02] hover:shadow-lg';

  return (
    <div
      id={`step-${stepId}`}
      onClick={() => onClick(stepId)}
      className={`step-card transition-all duration-300 cursor-pointer ${className} ${activeClasses}`}
      // style={{ transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)' }} // Handled in globals.css
    >
      {children}
    </div>
  );
}
