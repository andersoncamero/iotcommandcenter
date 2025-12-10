# 🌐 IoT Command Center

> Centro de comando y control para dispositivos IoT basados en LoRaWAN

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

## 📋 Descripción

**IoT Command Center** es una plataforma web diseñada para gestionar y monitorear dispositivos IoT basados en LoRaWAN, integrada con **ChirpStack** como servidor de red LoRaWAN. Ofrece una solución completa para control remoto, supervisión en tiempo real y administración centralizada de tu infraestructura IoT, permitiendo gestionar fácilmente los dispositivos y la comunicación a través de ChirpStack.

### ✨ Características principales

- 🎯 **Control Remoto**: Gestiona tus dispositivos desde cualquier lugar
- 📊 **Monitoreo en Tiempo Real**: Visualiza el estado de tus dispositivos al instante
- 🔔 **Sistema de Alertas**: Recibe notificaciones sobre eventos importantes
- 📈 **Métricas Clave**: Analiza el rendimiento y estado de tu red
- 🏢 **Administración Centralizada**: Gestiona múltiples dispositivos desde un solo lugar
- ⚡ **Interfaz Reactiva**: Experiencia de usuario fluida y moderna

## 🚀 Tecnologías

Este proyecto está construido con:

- **React 18** – Biblioteca de UI para interfaces reactivas
- **TypeScript** – Tipado estático en todo el proyecto
- **Vite** – Herramienta de build y desarrollo ultrarrápida
- **pnpm** – Gestor de paquetes eficiente y rápido
- **ESLint** – Linter para calidad y mantenimiento del código
- **Lucide React** – Conjunto de iconos SVG modernos usados en la interfaz
- **React Router DOM** – Enrutamiento declarativo para aplicaciones SPA
- **Fetch API** – Comunicación asincrónica con APIs REST
- **Tailwind CSS** – Utilidades CSS para el diseño y estilos
- **React Hooks** – Manejo de estado y ciclo de vida funcional
- **LocalStorage** – Persistencia local de datos de sesión y controladores

> Además, la arquitectura se organiza en componentes átomos, moléculas y organismos siguiendo principios de diseño atómico para escalabilidad y claridad.
## Arquitectura 
La arquitectura de este proyecto está basada en el _Diseño Atómico de Componentes_ y separación de responsabilidades:

### 🏛️ Estructura por capas y atomic design

- **Átomos**: Elementos UI básicos, independientes y reutilizables (ejemplo: `Button`, `Input`, `Card`, `Label`).
- **Moléculas**: Combinaciones de átomos que representan conjuntos funcionales sencillos (`InputWithLabel`, `SyncModal`).
- **Organismos**: Componentes complejos que agrupan moléculas y átomos para formar secciones completas de la UI (`Header`, `ControllerForm`).
- **Templates**: Definen el layout general de una página ensamblando organismos y zonas de contenido dinámico (`ControllerTemplate`, `AddControllerTemplate`).
- **Pages**: Vistas completas listas para ser integradas al router, emplean templates con lógica y datos específicos (`Controller.tsx`, `AddController.tsx`).

### 🚦 Gestor de estado y Side Effects

- Se usa **React Hooks** (`useState`, `useEffect`) para el manejo de estado y efectos secundarios.
- Se emplea **LocalStorage** para persistencia local y autenticación.
- La comunicación con el backend se realiza mediante **Fetch API** siguiendo buenas prácticas de asincronía y manejo de errores.

### ➡️ Enrutamiento

- **React Router DOM** se utiliza para gestionar la navegación SPA entre páginas (como `/dashboard`, `/controllers`, `/add-controller`).

### 🎨 Estilizado

- **Tailwind CSS** y clases utilitarias para estilos rápidos, responsivos y consistentes.
- El sistema de diseño visual replica una _tech grid_ e indicadores visuales mediante CSS.

---

**Resumen Visual:**

```
src/
  components/
    atoms/           # Elementos básicos UI
    molecules/       # Combinaciones simples de átomos
    organisms/       # Secciones funcionales grandes
  templates/         # Layouts de página
  pages/             # Vistas y páginas principales
  entities/          # Definición de entidades/tipos
  assets/            # Imágenes, estilos, íconos
```

Esta organización facilita la escalabilidad, la reutilización y el mantenimiento del código a medida que crece el proyecto.

## 📦 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- pnpm (recomendado) o npm

### Pasos de instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/andersoncamero/iotcommandcenter.git
   cd iotcommandcenter
   ```

2. **Instala las dependencias**
   ```bash
   pnpm install
   ```
   
   O si prefieres npm:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   pnpm dev
   ```
   
   La aplicación estará disponible en `http://localhost:5173`

## 🛠️ Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Inicia el servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm preview` | Previsualiza la build de producción |
| `pnpm lint` | Ejecuta el linter de código |

## 📁 Estructura del proyecto

```
iotcommandcenter/
├── public/           # Archivos estáticos
├── src/              # Código fuente
│   ├── assets/       # Imágenes, iconos, etc.
│   ├── components/   # Componentes React
│   ├── pages/        # Páginas de la aplicación
│   ├── services/     # Servicios y API calls
│   ├── types/        # Tipos TypeScript
│   └── utils/        # Utilidades y helpers
├── index.html        # Punto de entrada HTML
├── package.json      # Dependencias y scripts
├── tsconfig.json     # Configuración TypeScript
└── vite.config.ts    # Configuración Vite
```

## 🔧 Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_API_URL=tu_url_de_api
VITE_LORAWAN_SERVER=tu_servidor_lorawan
```

### ESLint

El proyecto incluye configuración de ESLint. Para personalizar las reglas, edita el archivo `eslint.config.js`.

## 🌐 Integración con LoRaWAN

Esta aplicación se integra con redes LoRaWAN para gestionar dispositivos IoT. Asegúrate de:

- Configurar correctamente los endpoints de tu servidor LoRaWAN
- Tener las credenciales necesarias para la comunicación
- Verificar que los dispositivos estén registrados en la red

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Convenciones de commits

- `Add:` para nuevas características
- `Fix:` para correcciones de bugs
- `Update:` para actualizaciones
- `Refactor:` para refactorización
- `Docs:` para documentación

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.


