import Icon from './Icon';

export default function Header({
  onSimulate,
  isSimulating,
}: {
  onSimulate: () => void;
  isSimulating: boolean;
}) {
  return (
    <header className="bg-white shadow-sm z-20 border-b border-gray-200 flex-none h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold text-red-600 tracking-tight">
          Proceso de creación de Deliveries
        </h1>
        <div className="h-8 w-px bg-gray-300 hidden sm:block"></div>
        <div className="hidden sm:flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-600">
              Grupo SLI
            </span>
          </div>
          <span className="text-gray-400">+</span>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-600">
              AkzoNobel
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={onSimulate}
          disabled={isSimulating}
          className={`flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium shadow transition transform active:scale-95 ${
            isSimulating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-red-700'
          }`}
        >
          <Icon name="play_circle" />
          <span>Simular Flujo</span>
        </button>
      </div>
    </header>
  );
}
