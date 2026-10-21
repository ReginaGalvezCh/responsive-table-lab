# NexoOps - Consola de Operaciones de Campo

NexoOps es una consola ficticia desarrollada con **React**, **TypeScript** y **Vite** para la gestión y monitoreo de operaciones de campo.

## Arquitectura del Proyecto

El proyecto sigue una estructura modular y limpia:

- `src/types/`: Definiciones de interfaces y tipos TypeScript.
- `src/data/`: Datos sintéticos e inicializadores.
- `src/components/`: Componentes de interfaz de usuario (tabla, tarjetas, filtros y panel de detalle).

## Vista Principal

La vista inicial incluye:
- **12 órdenes de trabajo sintéticas** precargadas.
- **Buscador en tiempo real** por término o código.
- **Filtro por estado** de la orden (Pendiente, En Proceso, Completado, Cancelado).
- **Panel lateral de detalle** al seleccionar una fila de la tabla.

## Requisitos del Sistema

- **Node.js** v22 o superior
- **npm** v10 o superior

## Instalación y Uso

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo local:
   ```bash
   npm run dev
   ```

3. Compilar para producción:
   ```bash
   npm run build
   ```

## Estado del Proyecto (Baseline)

Esta versión constituye un *baseline* inicial diseñado para reproducir un problema de desbordamiento horizontal en la tabla de datos cuando se visualiza en un viewport estrecho (el cual aún no ha sido corregido intencionalmente).

*Nota: Todos los datos presentados son sintéticos. Los módulos y escenarios futuros se integrarán mediante arquitecturas independientes.*