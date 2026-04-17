# Moon Travel Co. 🌙✨ | Agencia de Viajes

¡Bienvenido a **Moon Travel Co.**! Una landing page moderna, profesional y altamente optimizada diseñada para una agencia de viajes de lujo. Este proyecto ofrece una experiencia de usuario fluida, visualmente atractiva y enfocada en la conversión.

![Preview del Proyecto](public/logo.png)

## 🚀 Características Principales

- **Diseño Ultra-Responsivo**: Optimizado para dispositivos móviles, tablets y computadoras de escritorio.
- **Catálogo Interactivo**: Secciones dedicadas a destinos nacionales, internacionales y paquetes turísticos con filtros dinámicos.
- **Gestión de Cruceros**: Sección especializada para cruceros categorizados por requisitos de visa (Sin Visa, Con Visa, Europa).
- **Animaciones Premium**: Transiciones suaves y efectos visuales desarrollados con **Framer Motion** y aceleración por hardware.
- **Conversión Directa**: Integración estratégica con **WhatsApp** en cada oferta para contacto inmediato.
- **Performance Optimizado**: Implementación de `lazy loading` para imágenes y memoización de componentes críticos.
- **Arquitectura Modular**: Código limpio, escalable y fácil de mantener.

## 🛠️ Stack Tecnológico

- **Core**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Componentes UI**: Basados en [Radix UI](https://www.radix-ui.com/) (Customizados)

## 📂 Estructura del Proyecto

```text
src/
├── components/
│   ├── cards/      # Componentes reutilizables de tarjetas (Destinos, Paquetes, Cruceros)
│   ├── layout/     # Componentes globales como Navbar y Footer
│   ├── sections/   # Secciones principales de la Landing Page
│   └── ui/         # Componentes base de interfaz (Botones, Carruseles)
├── config/         # Constantes globales y configuración de la App
├── data/           # Archivos centralizados de información (JSON-like)
├── hooks/          # Lógica personalizada (useCarousel, useWhatsApp)
├── types/          # Definiciones de interfaces de TypeScript
├── utils/          # Funciones de utilidad global
└── styles/         # Estilos globales y configuración de Tailwind
```

## ⚙️ Instalación y Configuración

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/BayrolM/Projectmoon.git
   cd Projectmoon
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 🌟 Mejores Prácticas Aplicadas

- **Clean Code**: Separación clara entre lógica de negocio, datos y presentación.
- **Accesibilidad (A11y)**: Uso de atributos ARIA, roles semánticos y optimización de idioma.
- **SEO**: Meta tags configuradas para una correcta indexación y visualización en redes sociales (Open Graph).
- **Escalabilidad**: Centralización de tipos y constantes para facilitar actualizaciones masivas en segundos.

## ✉️ Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos:

- **Email**: gerencia@moontravelco.net
<!-- - **Web**: [Project Moon](https://projectmoon-zeta.vercel.app/) -->

---

Desarrollado con ❤️ para **Moon Travel Co.**
