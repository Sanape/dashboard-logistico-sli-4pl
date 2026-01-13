import React from 'react';
import StepCard from './StepCard';
import Icon from './Icon';

interface SwimlaneProps {
  activeStep: number | null;
  onStepClick: (id: number) => void;
}

export default function Swimlane({ activeStep, onStepClick }: SwimlaneProps) {
  return (
    <div className="w-full min-w-[1200px] flex flex-col space-y-8 relative">
      {/* Timeline Headers */}
      <div className="ml-24 mb-2 sticky top-0 z-10 pb-2 bg-gray-50/80 backdrop-blur-sm rounded-lg px-4 grid grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] gap-4 items-center">
        <div className="text-center font-bold text-gray-400 uppercase tracking-widest text-xs border-b-2 border-gray-200 pb-2">
          Planificación
        </div>
        <div></div>
        <div className="text-center font-bold text-gray-500 uppercase tracking-widest text-xs border-b-2 border-gray-300 pb-2">
          Día N-3 (Ruteo)
        </div>
        <div></div>
        <div className="text-center font-bold text-gray-600 uppercase tracking-widest text-xs border-b-2 border-gray-400 pb-2">
          Día N-2 (Prep)
        </div>
        <div></div>
        <div className="text-center font-bold text-gray-700 uppercase tracking-widest text-xs border-b-2 border-gray-500 pb-2">
          Día N-1 (Factura)
        </div>
        <div></div>
        <div className="text-center font-bold text-red-600 uppercase tracking-widest text-xs border-b-2 border-red-500 pb-2">
          Día N (Entrega)
        </div>
      </div>

      {/* Swimlane: AKZO */}
      <div className="flex group relative">
        <div className="absolute -left-4 top-0 bottom-0 w-24 flex items-center justify-center bg-blue-50 border-r-4 border-blue-500 rounded-l-lg shadow-sm">
          <span className="font-bold text-blue-800 tracking-widest transform -rotate-90 text-sm">
            AKZO
          </span>
        </div>
        <div className="ml-24 py-4 px-4 border-t border-b border-gray-100 w-full bg-white/50 hover:bg-white/80 transition rounded-r-lg grid grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] gap-4">
          <div className="flex flex-col items-center justify-center">
            {/* Step 1 */}
            <StepCard
              stepId={1}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-blue-100 border-2 border-blue-400 text-blue-900 rounded-xl relative"
            >
              <div className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow font-bold">
                INICIO
              </div>
              <div className="flex items-center mb-2">
                <Icon name="shopping_cart" className="mr-2" />
                <span className="font-bold text-sm">PEDIDO Cliente</span>
              </div>
              <p className="text-xs leading-snug opacity-80">
                Con crédito aprobado y stock validado.
              </p>
              {/* Logic Bubble */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white border border-red-300 border-dashed text-red-600 text-[10px] p-2 rounded-lg shadow-sm text-center z-10 pointer-events-none">
                &quot;Sin delivery ni shipment&quot;
              </div>
            </StepCard>
          </div>
          {/* Spacers */}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Swimlane: SLI */}
      <div className="flex group relative mt-4">
        <div className="absolute -left-4 top-0 bottom-0 w-24 flex items-center justify-center bg-gray-100 border-r-4 border-gray-600 rounded-l-lg shadow-sm">
          <span className="font-bold text-gray-700 tracking-widest transform -rotate-90 text-sm">
            SLI
          </span>
        </div>
        <div className="ml-24 py-8 px-4 border-t border-b border-gray-100 w-full bg-white/50 hover:bg-white/80 transition rounded-r-lg grid grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] gap-4 items-start">
          {/* Col 1: Planning */}
          <div className="flex flex-col space-y-6 items-center">
            {/* Step 2 */}
            <StepCard
              stepId={2}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border border-gray-300 text-gray-700 rounded-lg"
            >
              <div className="flex items-center mb-1">
                <Icon name="database" className="mr-2 text-gray-400" />
                <span className="font-bold text-xs">DATOS MAESTROS</span>
              </div>
              <ul className="text-[10px] list-disc list-inside text-gray-500 space-y-0.5">
                <li>SLA Clientes</li>
                <li>Días de entregas</li>
                <li>Bandas horarias</li>
                <li>Tipo de vehículo</li>
                <li>Zona de ruteo</li>
              </ul>
            </StepCard>
            <Icon
              name="arrow_downward"
              className="text-gray-300 animate-pulse"
            />

            {/* Step 3 */}
            <StepCard
              stepId={3}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-full flex flex-col items-center justify-center text-center aspect-square hover:bg-gray-50"
            >
              <Icon name="inventory_2" className="mb-1 text-gray-600" />
              <span className="font-bold text-xs">
                Bolsa de pedidos
                <br />
                sin procesar
              </span>
            </StepCard>
            <Icon name="arrow_downward" className="text-gray-400" />

            {/* Step 4 */}
            <StepCard
              stepId={4}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg relative"
            >
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow">
                <Icon name="bolt" className="text-white text-xs" />
              </div>
              <span className="font-bold text-sm block mb-1">TURNADOR</span>
              <p className="text-xs text-gray-500">
                Asignación de pedidos con entrega día N
              </p>
            </StepCard>
            <div className="bg-red-50 border border-red-200 border-dashed p-2 rounded text-[10px] text-red-600 text-center leading-tight w-full max-w-[260px]">
              &quot;Si no saturan capacidad, se suman días siguientes&quot;
            </div>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <Icon name="arrow_forward" className="text-gray-400" />
          </div>

          {/* Col 2: Day N-3 */}
          <div className="flex flex-col space-y-4 pt-10 items-center">
            {/* Step 5 */}
            <StepCard
              stepId={5}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-32 h-32 p-2 bg-white border-2 border-gray-800 rounded-full flex flex-col items-center justify-center text-center"
            >
              <span className="font-bold text-xs">
                Bolsa de
                <br />
                pedidos para
                <br />
                rutear
              </span>
            </StepCard>
            <Icon name="arrow_downward" className="text-gray-400" />
            {/* Step 6 */}
            <StepCard
              stepId={6}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-3 bg-purple-100 border border-purple-300 rounded-lg text-center"
            >
              <span className="font-bold text-xs text-purple-800">
                Creación de la DELIVERY
              </span>
            </StepCard>
            <Icon name="arrow_downward" className="text-gray-400" />
            {/* Step 7 */}
            <StepCard
              stepId={7}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg text-center"
            >
              <Icon name="map" className="block mx-auto text-gray-600 mb-1" />
              <br />
              <span className="font-bold text-sm">TMS</span>
              <p className="text-xs text-gray-500">
                Ruteo pedidos con entrega día N
              </p>
            </StepCard>
            {/* Step 8 */}
            <StepCard
              stepId={8}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-3 bg-purple-100 border border-purple-300 rounded-lg text-center mt-2"
            >
              <span className="font-bold text-xs text-purple-800">
                Creación del SHIPMENT
              </span>
            </StepCard>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <Icon name="arrow_forward" className="text-gray-400" />
          </div>

          {/* Col 3: Day N-2 */}
          <div className="flex flex-col space-y-4 pt-4 items-center">
            {/* Step 9 */}
            <StepCard
              stepId={9}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg"
            >
              <span className="font-bold text-sm block">WMS</span>
              <p className="text-xs text-gray-500">
                Plan de preparación por turnos de depósito
              </p>
            </StepCard>
            <Icon name="arrow_downward" className="text-gray-400" />
            {/* Step 10 */}
            <StepCard
              stepId={10}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg relative"
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-gray-200 text-[10px] px-1 rounded border border-gray-300">
                08:00
              </div>
              <span className="font-bold text-sm block">Plan de despachos</span>
              <p className="text-xs text-gray-500">Con turnos de playa</p>
            </StepCard>
            {/* Step 11 */}
            <StepCard
              stepId={11}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg relative"
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-gray-200 text-[10px] px-1 rounded border border-gray-300">
                12:00
              </div>
              <span className="font-bold text-sm block">Confirmación</span>
              <p className="text-xs text-gray-500">del plan de despachos</p>
            </StepCard>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <Icon name="arrow_forward" className="text-gray-400" />
          </div>

          {/* Col 4: Day N-1 */}
          <div className="flex flex-col space-y-4 pt-10 items-center">
            {/* Step 12 */}
            <StepCard
              stepId={12}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-blue-100 border border-blue-300 rounded-lg text-center"
            >
              <Icon
                name="receipt_long"
                className="block mx-auto text-blue-600 mb-1"
              />
              <br />
              <span className="font-bold text-sm text-blue-900">
                FACTURACION
              </span>
              <p className="text-xs text-blue-800">de los pedidos preparados</p>
            </StepCard>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <Icon name="arrow_forward" className="text-gray-400" />
          </div>

          {/* Col 5: Day N */}
          <div className="flex flex-col space-y-4 pt-10 items-center">
            {/* Step 13 */}
            <StepCard
              stepId={13}
              activeStep={activeStep}
              onClick={onStepClick}
              className="w-full max-w-[260px] p-4 bg-white border-2 border-gray-800 rounded-lg text-center"
            >
              <Icon
                name="local_shipping"
                className="block mx-auto text-green-600 mb-1"
              />
              <br />
              <span className="font-bold text-sm">TMS Despacho</span>
            </StepCard>
            <div className="bg-red-50 border border-red-200 border-dashed p-2 rounded-full text-[10px] text-red-600 text-center mt-4 w-full max-w-[260px] aspect-square flex items-center justify-center">
              &quot;El circuito administrativo SLI cierra con rendición del
              viaje&quot;
            </div>
          </div>
        </div>
      </div>

      {/* Swimlane: CLIENTE */}
      <div className="flex group relative mt-4">
        <div className="absolute -left-4 top-0 bottom-0 w-24 flex items-center justify-center bg-green-50 border-r-4 border-green-500 rounded-l-lg shadow-sm">
          <span className="font-bold text-green-800 tracking-widest transform -rotate-90 text-sm">
            CLIENTE
          </span>
        </div>
        <div className="ml-24 py-6 px-4 border-t border-b border-gray-100 w-full bg-white/50 hover:bg-white/80 transition rounded-r-lg grid grid-cols-[1fr_40px_1fr_40px_1fr_40px_1fr_40px_1fr] gap-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-red-50 border border-red-200 border-dashed p-2 rounded text-[10px] text-red-600 text-center w-full max-w-[260px]">
              &quot;Pedidos no confirmados pasan al día siguiente&quot;
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

          {/* Last Col */}
          <div className="flex flex-col items-center justify-center relative">
            <div className="flex items-center absolute right-0 top-1/2 -translate-y-1/2 pr-4 space-x-2">
              <div className="flex flex-col items-center justify-center px-3">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-tighter mb-0.5 whitespace-nowrap">
                  Cierre Digital
                </span>
                <Icon name="arrow_right_alt" className="text-gray-400" />
              </div>
              {/* Step 14 */}
              <StepCard
                stepId={14}
                activeStep={activeStep}
                onClick={onStepClick}
                className="w-52 p-4 bg-white border-2 border-gray-800 rounded-lg shadow-sm relative z-10"
              >
                <div className="flex items-center justify-center mb-1 text-green-600">
                  <Icon name="devices" />
                </div>
                <span className="font-bold text-sm block text-center leading-tight">
                  OK Recepción &amp;
                  <br />
                  Digitalización
                </span>
              </StepCard>
              <div className="flex flex-col space-y-2 ml-2">
                <div className="px-3 py-2 bg-green-50 border border-green-200 rounded-lg flex items-center shadow-sm w-44 hover:scale-105 transition-transform">
                  <Icon
                    name="cloud_done"
                    className="text-green-600 text-sm mr-2"
                  />
                  <span className="text-[10px] font-bold text-green-800 leading-tight">
                    Confirmación
                    <br />
                    Automática POD
                  </span>
                </div>
                <div className="px-3 py-2 bg-orange-50 border border-orange-200 rounded-lg flex items-center shadow-sm w-44 hover:scale-105 transition-transform">
                  <Icon
                    name="phonelink_ring"
                    className="text-orange-600 text-sm mr-2"
                  />
                  <span className="text-[10px] font-bold text-orange-800 leading-tight">
                    Novedad de
                    <br />
                    entrega digital
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
