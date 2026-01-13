import { stepsData, StepData } from '@/data/processSteps';
import Icon from './Icon';

export default function Sidebar({ activeStep }: { activeStep: number | null }) {
  const data: StepData | undefined = activeStep
    ? stepsData[activeStep]
    : undefined;

  return (
    <aside className="w-80 bg-white border-r border-gray-200 flex flex-col shadow-lg z-10 hidden md:flex transition-all duration-300">
      <div className="p-6 border-b border-gray-100 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-800 flex items-center">
          <Icon name="info" className="mr-2 text-red-600" />
          Detalle del Paso
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          Selecciona o simula un paso para ver info.
        </p>
      </div>

      <div className="p-6 flex-1 overflow-y-auto space-y-4">
        {data ? (
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-lg">
                <Icon name={data.icon} className="text-2xl" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg leading-tight">
                  {data.title}
                </h3>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {data.role}
                </span>
              </div>
            </div>
            <div className="text-gray-600 text-sm">
              <p className="mb-4">{data.description}</p>
              {data.note && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 text-xs text-yellow-800 italic">
                  {data.note}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 text-gray-400">
            <Icon name="touch_app" className="text-4xl mb-2" />
            <p>
              Haz clic en un paso del diagrama para ver sus detalles operativos.
            </p>
          </div>
        )}
      </div>

      {/* Leyenda */}
      <div className="p-4 border-t border-gray-200 bg-gray-50 text-xs">
        <h3 className="font-bold text-gray-700 mb-2">Referencias</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-100 border border-blue-500 mr-2"></span>
            AKZO (Cliente)
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-white border border-gray-800 mr-2"></span>
            SLI (Logística)
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-purple-100 border border-purple-500 mr-2"></span>
            Acción Clave
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-red-100 border border-red-400 border-dashed mr-2"></span>
            Regla / Lógica
          </div>
        </div>
      </div>
    </aside>
  );
}
