export interface InfoPointData {
  id: string;
  title: string;
  icon: string;
  imageSrc: string;
  // Campos opcionales para distintos formatos de texto
  subtitle?: string;
  intro?: string;
  bullets?: string[];
  paragraphs?: string[];
  footer?: string;
}

export const infoPointsData: Record<string, InfoPointData> = {
  "sla": {
    id: "sla",
    title: "Acordar SLA",
    icon: "check",
    imageSrc: "/pedidoClientesModal.png",
    bullets: [
      "Horario corte atendimiento de pedidos",
      "Leadtime creación de delivery",
      "Clientes Rush? Definir leadtime"
    ]
  },
  "clientes": {
    id: "clientes",
    title: "Maestro de Clientes",
    icon: "search",
    imageSrc: "/MaestroClientesModal.png",
    subtitle: "Fuente informacion para Turnador",
    intro: "Solicitar a los transportes información de clientes:",
    bullets: [
      "Direcciones de entrega",
      "Días y horarios de recepción",
      "Restricciones de unidades",
      "Restricciones de volumen por entrega",
      "Contacto (Whatsapp Chatbot) y email (Packtracking)"
    ],
    footer: "El maestro de clientes será transparente para Akzo"
  },
  "flota": {
    id: "flota",
    title: "Disponibilidad de Unidades",
    icon: "priority_high",
    imageSrc: "/TMSModal.png",
    paragraphs: [
      "Nuestro sistema de ruteo emplea algoritmos avanzados para la generación de rutas óptimas, operando sobre una flota fija y predefinida. La disponibilidad de estas unidades constituye el factor crítico de éxito para asegurar la eficiencia operativa.",
      "Es fundamental que las empresas de transporte establezcan y mantengan una flota de unidades operativas."
    ]
  }
};