import type { FieldOrder } from '../types/order';

export const orders: FieldOrder[] = [
  {
    id: 'ord-001',
    code: 'NX-2026-1001',
    title: 'Routine inspection of the high-voltage modular electrical substation in the northern service area',
    description: 'Inspect primary transformers, high-voltage connectors, insulating fluid levels, and backup thermal circuit breakers.',
    assignedAgent: 'Olivia Carter',
    status: 'in_progress',
    date: '2026-10-02',
    location: 'North Industrial District, Lot 14B',
    priority: 'high'
  },
  {
    id: 'ord-002',
    code: 'NX-2026-1002',
    title: 'Preventive maintenance of the dynamic airflow ventilation system in the underground transit tunnel',
    description: 'Inspect air turbines, calibrate carbon monoxide sensors, and replace bearings showing premature wear.',
    assignedAgent: 'Ethan Brooks',
    status: 'pending',
    date: '2026-10-04',
    location: 'South Vehicle Entrance, Elevated Section 3',
    priority: 'medium'
  },
  {
    id: 'ord-003',
    code: 'NX-2026-1003',
    title: 'Emergency repair of a leaking pressure valve in the primary water distribution network',
    description: 'Replace heavy-duty hydraulic seals, seal the fracture at the primary joint, and run a continuous-flow pressure test.',
    assignedAgent: 'Marcus Reed',
    status: 'in_progress',
    date: '2026-10-05',
    location: 'Central Water Treatment Plant, Module D',
    priority: 'urgent'
  },
  {
    id: 'ord-004',
    code: 'NX-2026-1004',
    title: 'Audit fiber-optic network nodes and replace secondary optical signal repeaters',
    description: 'Diagnose signal attenuation, fusion-splice the trunk distribution enclosure, and verify transmission path redundancy.',
    assignedAgent: 'Sophia Bennett',
    status: 'completed',
    date: '2026-10-08',
    location: 'Technology District, Block A6',
    priority: 'medium'
  },
  {
    id: 'ord-005',
    code: 'NX-2026-1005',
    title: 'Scheduled replacement of photovoltaic solar panels damaged during a hailstorm',
    description: 'Disconnect the photovoltaic strings, remove six units with surface microcracks, install new modules, and tune the inverters.',
    assignedAgent: 'Noah Mitchell',
    status: 'pending',
    date: '2026-10-10',
    location: 'Solar Energy Park, Field 2',
    priority: 'low'
  },
  {
    id: 'ord-006',
    code: 'NX-2026-1006',
    title: 'Calibrate telemetry sensors at the automated remote weather monitoring station',
    description: 'Calibrate rain gauges, ultrasonic anemometers, and ambient thermometers; synchronize radio transmission of sensor readings.',
    assignedAgent: 'Grace Turner',
    status: 'completed',
    date: '2026-10-12',
    location: 'Pine Ridge Reserve, Weather Station 08',
    priority: 'low'
  },
  {
    id: 'ord-007',
    code: 'NX-2026-1007',
    title: 'Replace the drainage pump in the basement mechanical room on level minus two',
    description: 'The primary motor overheated. Lift out the failed pump, fit its replacement, and reconnect the electrical control panel.',
    assignedAgent: 'Jackson Miller',
    status: 'canceled',
    date: '2026-10-14',
    location: 'Central Operations Building, Level -2',
    priority: 'urgent'
  },
  {
    id: 'ord-008',
    code: 'NX-2026-1008',
    title: 'Install pneumatic actuators for the automated water diversion gates',
    description: 'Mount precision compressors, route reinforced pneumatic hoses, and test intermittent safety opening and closing cycles.',
    assignedAgent: 'Ava Wilson',
    status: 'in_progress',
    date: '2026-10-15',
    location: 'West Distribution Canal, Station 4',
    priority: 'high'
  },
  {
    id: 'ord-009',
    code: 'NX-2026-1009',
    title: 'Review and update firmware on programmable logic controllers across the logistics terminal',
    description: 'Install operational stability patch v4.2, verify nonvolatile memory cycles, and reconfigure power interruption timers.',
    assignedAgent: 'Liam Parker',
    status: 'pending',
    date: '2026-10-17',
    location: 'Harbor Logistics Terminal, Pier 2',
    priority: 'medium'
  },
  {
    id: 'ord-010',
    code: 'NX-2026-1010',
    title: 'Perform a load test and preventive maintenance on backup diesel generators',
    description: 'Analyze lubricant quality, replace air and fuel filters, drain condensation, and run a 120-minute full-load transfer test.',
    assignedAgent: 'Mason Cooper',
    status: 'completed',
    date: '2026-10-18',
    location: 'Operations Data Center, Hall B',
    priority: 'high'
  },
  {
    id: 'ord-011',
    code: 'NX-2026-1011',
    title: 'Repair an underground power conduit section exposed by soil erosion',
    description: 'Excavate the affected area, install a high-density polyethylene protective cover, compact the backfill, and mark the safety zone.',
    assignedAgent: 'Chloe Richardson',
    status: 'pending',
    date: '2026-10-20',
    location: 'East Perimeter Road, Mile 18',
    priority: 'medium'
  },
  {
    id: 'ord-012',
    code: 'NX-2026-1012',
    title: 'Monitor vibration frequency and perform laser alignment on the turbocompressor assembly',
    description: 'Measure vibration with triaxial accelerometers, adjust alignment with precision shims, and calibrate overspeed shutdowns.',
    assignedAgent: 'Henry Foster',
    status: 'canceled',
    date: '2026-10-21',
    location: 'Auxiliary Thermal Plant, Unit 1',
    priority: 'low'
  }
];