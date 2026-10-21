import type { FieldOrder } from '../types/order';

export const orders: FieldOrder[] = [
  {
    id: 'ord-001',
    code: 'NX-2026-1001',
    title: 'Inspección periódica de subestación eléctrica modular de alta tensión en zona norte',
    description: 'Verificación exhaustiva de transformadores principales, conectores de alta tensión, niveles de aislante fluido y prueba de disyuntores térmicos de respaldo.',
    assignedAgent: 'Valeria Arancibia',
    status: 'en_proceso',
    date: '2026-10-02',
    location: 'Sector Industrial Norte, Parcela 14B',
    priority: 'alta'
  },
  {
    id: 'ord-002',
    code: 'NX-2026-1002',
    title: 'Mantenimiento preventivo del sistema de ventilación de flujo dinámico en túnel subterráneo',
    description: 'Revisión técnica de turbinas de aire, calibración de sensores de concentración de monóxido de carbono y sustitución de rodamientos con desgaste prematuro.',
    assignedAgent: 'Gonzalo Sepúlveda',
    status: 'pendiente',
    date: '2026-10-04',
    location: 'Acceso Vehicular Sur, Tramo Elevado 3',
    priority: 'media'
  },
  {
    id: 'ord-003',
    code: 'NX-2026-1003',
    title: 'Reparación de emergencia por filtración en válvula de presión de red hídrica principal',
    description: 'Sustitución de empaquetaduras hidráulicas de alta resistencia, sellado térmico de fisura en empalme primario y presurización de prueba de flujo continuo.',
    assignedAgent: 'Matías Riquelme',
    status: 'en_proceso',
    date: '2026-10-05',
    location: 'Planta Tratadora Central, Módulo D',
    priority: 'urgente'
  },
  {
    id: 'ord-004',
    code: 'NX-2026-1004',
    title: 'Auditoría de nodos de fibra óptica y reemplazo de repetidores ópticos secundarios',
    description: 'Diagnóstico de pérdida de atenuación de señal, empalme por fusión en caja de distribución troncal y verificación de redundancia en canal de transmisión.',
    assignedAgent: 'Camila Fuenzalida',
    status: 'completado',
    date: '2026-10-08',
    location: 'Distrito Tecnológico, Bloque A6',
    priority: 'media'
  },
  {
    id: 'ord-005',
    code: 'NX-2026-1005',
    title: 'Reemplazo programado de paneles solares fotovoltaicos dañados por granizo',
    description: 'Desconexión de cadenas fotovoltaicas, desmonte de seis unidades con microfisuras superficiales, instalación de nuevos módulos y ajuste de inversores.',
    assignedAgent: 'Esteban Sanhueza',
    status: 'pendiente',
    date: '2026-10-10',
    location: 'Parque Energético Solar, Campo 2',
    priority: 'baja'
  },
  {
    id: 'ord-006',
    code: 'NX-2026-1006',
    title: 'Calibración de sensores telemétricos en estación meteorológica automatizada',
    description: 'Ajuste de precisión de pluviómetros, anemómetros ultrasónicos, termómetros de ambiente y sincronización de transmisión de microdatos por radiofrecuencia.',
    assignedAgent: 'Loreto Becerra',
    status: 'completado',
    date: '2026-10-12',
    location: 'Reserva Forestal, Puesto Met 08',
    priority: 'baja'
  },
  {
    id: 'ord-007',
    code: 'NX-2026-1007',
    title: 'Sustitución de motobomba de achique en sala de máquinas nivel subterráneo -2',
    description: 'Falla crítica por sobrecalentamiento del motor principal. Se requiere izamiento de bomba defectuosa, acople de reemplazo y reconexión del tablero eléctrico.',
    assignedAgent: 'Joaquín Navarrete',
    status: 'cancelado',
    date: '2026-10-14',
    location: 'Edificio Operativo Centro, Nivel -2',
    priority: 'urgente'
  },
  {
    id: 'ord-008',
    code: 'NX-2026-1008',
    title: 'Instalación de actuadores neumáticos para compuertas automáticas de derivación',
    description: 'Montaje mecánico de compresores de alta precisión, tendido de mangueras neumáticas reforzadas y pruebas intermitentes de apertura/cierre de seguridad.',
    assignedAgent: 'Daniela Alarcón',
    status: 'en_proceso',
    date: '2026-10-15',
    location: 'Canal de Distribución Oeste, Estación 4',
    priority: 'alta'
  },
  {
    id: 'ord-009',
    code: 'NX-2026-1009',
    title: 'Revisión y actualización de firmware en controladores lógicos programables PLC',
    description: 'Carga de parche de estabilidad operativa v4.2, verificación de ciclos de memoria no volátil y reconfiguración de temporizadores de corte de energía.',
    assignedAgent: 'Ignacio Henríquez',
    status: 'pendiente',
    date: '2026-10-17',
    location: 'Terminal Logístico Marítimo, Muelle 2',
    priority: 'media'
  },
  {
    id: 'ord-010',
    code: 'NX-2026-1010',
    title: 'Prueba de carga y mantenimiento preventivo a generadores diésel de respaldo térmico',
    description: 'Análisis de calidad de lubricante, cambio de filtros de aire/combustible, drenaje de condensación y prueba de transferencia continua a plena carga por 120 minutos.',
    assignedAgent: 'Rodrigo Cárcamo',
    status: 'completado',
    date: '2026-10-18',
    location: 'Data Center Operativo, Nave B',
    priority: 'alta'
  },
  {
    id: 'ord-011',
    code: 'NX-2026-1011',
    title: 'Reparación de tramo de canalización subterránea de energía expuesta por erosión',
    description: 'Excavación localizada, colocación de cubierta protectora de polietileno de alta densidad, relleno consolidado y señalización preventiva de seguridad.',
    assignedAgent: 'Beatriz Santibáñez',
    status: 'pendiente',
    date: '2026-10-20',
    location: 'Ruta Perimetral Este, Kilómetro 18',
    priority: 'media'
  },
  {
    id: 'ord-012',
    code: 'NX-2026-1012',
    title: 'Monitoreo de frecuencia de vibración y alineamiento láser de grupo turbocompresor',
    description: 'Medición con acelerómetros triaxiales, corrección de alineación mediante cuñas mecánicas de precisión y calibración de paradas automáticas por sobrerotación.',
    assignedAgent: 'Felipe Venegas',
    status: 'cancelado',
    date: '2026-10-21',
    location: 'Planta Térmica Auxiliar, Unidad 1',
    priority: 'baja'
  }
];