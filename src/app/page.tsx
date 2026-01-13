'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Swimlane from '@/components/Swimlane';
import { simulationPath } from '@/data/processSteps';

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  // Lógica de simulación
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSimulating) {
      let index = 0;
      setActiveStep(simulationPath[0]);

      // Auto-scroll inicial
      const firstEl = document.getElementById(`step-${simulationPath[0]}`);
      firstEl?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });

      interval = setInterval(() => {
        index++;
        if (index >= simulationPath.length) {
          setIsSimulating(false);
          clearInterval(interval);

          // Reset después de completado (opcional, como en el original)
          setTimeout(() => setActiveStep(null), 3000);
          return;
        }

        const stepId = simulationPath[index];
        setActiveStep(stepId);

        // Auto-scroll a cada paso
        const el = document.getElementById(`step-${stepId}`);
        el?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }, 1800); // 1.8 segundos por paso
    }

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStepClick = (id: number) => {
    if (!isSimulating) {
      setActiveStep(id);
    }
  };

  const startSimulation = () => {
    setIsSimulating(true);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header onSimulate={startSimulation} isSimulating={isSimulating} />

      <main className="flex-1 flex overflow-hidden relative">
        <Sidebar activeStep={activeStep} />

        <div
          className="flex-1 overflow-x-auto overflow-y-auto bg-grid-pattern relative p-8 cursor-grab active:cursor-grabbing"
          id="workspace"
        >
          <Swimlane activeStep={activeStep} onStepClick={handleStepClick} />
        </div>
      </main>
    </div>
  );
}
