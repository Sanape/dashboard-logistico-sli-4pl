import React from "react";
import Icon from "./Icon";
import { InfoPointData } from "@/data/infoPoints";

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: InfoPointData | null;
}

export default function InfoModal({ isOpen, onClose, data }: InfoModalProps) {
  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      {/* Contenedor del Modal */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Botón Cerrar */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition text-gray-700"
        >
          <Icon name="close" />
        </button>

        {/* Columna Izquierda: Texto */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col justify-center">
          
          {/* Header del Modal */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
                {/* Icono temático */}
                <span className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                   <Icon name={data.icon} className="text-xl" />
                </span>
                <h2 className="text-3xl font-bold text-gray-800 leading-tight">{data.title}</h2>
            </div>
            
            {/* Subtítulo (si existe) */}
            {data.subtitle && (
                <h3 className="text-lg font-bold text-gray-600 mt-2">{data.subtitle}</h3>
            )}
          </div>
          
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            
            {/* Intro (si existe) */}
            {data.intro && (
                <p className="mb-4">{data.intro}</p>
            )}

            {/* Lista de Bullets (si existe) */}
            {data.bullets && (
                <ul className="space-y-3 ml-1">
                    {data.bullets.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-800 rounded-full flex-shrink-0"></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Párrafos normales (si existe, para casos como 'flota') */}
            {data.paragraphs && data.paragraphs.map((para, index) => (
                <p key={index} className="mb-4">{para}</p>
            ))}

            {/* Footer / Nota al pie (si existe) */}
            {data.footer && (
                <p className="mt-8 text-gray-500 text-base border-t pt-4">
                    {data.footer}
                </p>
            )}

          </div>
        </div>

        {/* Columna Derecha: Imagen */}
        <div className="w-full md:w-1/2 bg-gray-100 relative min-h-[200px] md:min-h-full">
          <img 
            src={data.imageSrc} 
            alt={data.title} 
            className="w-full h-full object-cover"
          />
          {/* Overlay gradiente para estilo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-l opacity-30"></div>
        </div>
      </div>
    </div>
  );
}