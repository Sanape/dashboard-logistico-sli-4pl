export interface StepData {
  id: number;
  title: string;
  role: string;
  description: string;
  note?: string;
  icon: string;
}

export const stepsData: Record<number, StepData> = {
  1: {
    id: 1,
    title: 'PEDIDO Cliente',
    role: 'AKZO (Cliente)',
    description:
      'El proceso inicia cuando AkzoNobel recibe un pedido de un cliente. Para proceder, el sistema valida automáticamente dos condiciones críticas: el cliente debe tener crédito aprobado y debe haber stock físico disponible.',
    note: 'En esta etapa aún no se genera ninguna orden de transporte (Delivery/Shipment). Es puramente comercial.',
    icon: 'shopping_cart',
  },
  2: {
    id: 2,
    title: 'DATOS MAESTROS',
    role: 'SLI (Logística)',
    description:
      'Grupo SLI mantiene una base de datos maestra con las reglas logísticas de cada cliente: SLA acordado, días específicos de entrega, ventanas horarias permitidas, tipos de camión requeridos y la zona geográfica de ruteo.',
    note: "Estos datos alimentan el 'Turnador' para asignar fechas factibles.",
    icon: 'database',
  },
  3: {
    id: 3,
    title: 'Bolsa de pedidos sin procesar',
    role: 'SLI (Logística)',
    description:
      "Todos los pedidos validados por Akzo caen en una 'bolsa' o pool de pendientes. Aquí esperan ser procesados por el sistema de planificación.",
    note: 'Es el backlog operativo.',
    icon: 'inventory_2',
  },
  4: {
    id: 4,
    title: 'TURNADOR',
    role: 'SLI (Logística)',
    description:
      "El 'Turnador' es el cerebro de la planificación. Asigna cada pedido a una fecha de entrega 'N' específica, basándose en las reglas del cliente y la capacidad.",
    note: 'Regla de Eficiencia: Si los pedidos de hoy no llenan los camiones/capacidad, el sistema adelanta pedidos de días futuros para optimizar el viaje.',
    icon: 'bolt',
  },
  5: {
    id: 5,
    title: 'Bolsa de pedidos para rutear',
    role: 'SLI (Logística)',
    description:
      'Una vez asignada la fecha, los pedidos pasan a la bolsa de ruteo. Esta etapa se cierra cuando se alcanza la capacidad máxima operativa del depósito.',
    note: 'Aquí se define qué sale definitivamente.',
    icon: 'alt_route',
  },
  6: {
    id: 6,
    title: 'Creación de la DELIVERY',
    role: 'Sistema',
    description:
      "Se genera la entidad 'Delivery' en el sistema. Este documento agrupa los ítems que serán entregados a un destino específico.",
    note: 'Paso técnico de sistema (ERP/WMS).',
    icon: 'description',
  },
  7: {
    id: 7,
    title: 'TMS Ruteo',
    role: 'SLI (TMS)',
    description:
      'El Sistema de Gestión de Transporte (TMS) calcula las rutas óptimas para los pedidos del día N. Consolida cargas por zona y eficiencia.',
    note: 'Ocurre en el Día N-3 (3 días antes de la entrega).',
    icon: 'map',
  },
  8: {
    id: 8,
    title: 'Creación del SHIPMENT',
    role: 'Sistema',
    description:
      "Se crea el 'Shipment' (Viaje/Transporte). Agrupa varias 'Deliveries' en un solo camión/vehículo.",
    note: 'Documento maestro para el transportista.',
    icon: 'local_shipping',
  },
  9: {
    id: 9,
    title: 'WMS Plan de preparación',
    role: 'SLI (Almacén)',
    description:
      'El WMS (Warehouse Management System) organiza las tareas de picking para los operarios del depósito, dividiéndolas por turnos de trabajo.',
    note: 'Ocurre en el Día N-2. Sin restricción horaria.',
    icon: 'shelves',
  },
  10: {
    id: 10,
    title: 'Plan de despachos',
    role: 'SLI (Playa)',
    description:
      'Se planifica el uso de las dársenas de carga (turnos de playa) para que los camiones carguen ordenadamente según su turno.',
    note: 'Corte a las 08:00 hs del Día N-2.',
    icon: 'dock',
  },
  11: {
    id: 11,
    title: 'Confirmación del plan',
    role: 'SLI (Control)',
    description:
      'Se confirma definitivamente qué camiones salen y qué pedidos llevan. Se cierran los cambios.',
    note: 'Corte a las 12:00 hs del Día N-2.',
    icon: 'check_box',
  },
  12: {
    id: 12,
    title: 'FACTURACION',
    role: 'AKZO / SLI',
    description:
      'Con los pedidos preparados y validados, se emiten las facturas y remitos correspondientes. La mercadería está lista para salir.',
    note: 'Ocurre el Día N-1.',
    icon: 'receipt_long',
  },
  13: {
    id: 13,
    title: 'TMS Despacho',
    role: 'SLI (Transporte)',
    description:
      'El camión sale físicamente del centro de distribución rumbo al cliente.',
    note: 'Día N (Día de Entrega).',
    icon: 'local_shipping',
  },
  14: {
    id: 14,
    title: 'OK Recepción & Digitalización',
    role: 'CLIENTE / APP',
    description:
      'El cliente valida la entrega. Se disparan dos procesos digitales inmediatos: 1) Confirmación automática del POD y 2) Registro de Novedades.',
    note: 'Los procesos digitales se disparan al cierre del viaje.',
    icon: 'devices',
  },
};

export const simulationPath = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
