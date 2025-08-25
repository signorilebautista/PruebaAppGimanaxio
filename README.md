# GoodLife Center - PWA

Una aplicación web progresiva (PWA) para gestionar reservas de clases en el gimnasio GoodLife Center.

## 🚀 Características

- **Página de Login**: Interfaz moderna para ingresar con DNI
- **Menú Principal**: Navegación intuitiva con opciones principales
- **Sistema de Reservas**: Selección de clases y horarios
- **Diseño Responsivo**: Optimizado para móviles y tablets
- **PWA**: Instalable como aplicación nativa
- **Animaciones**: Transiciones suaves y efectos visuales

## 🛠️ Tecnologías Utilizadas

- React 19
- Vite
- React Router DOM
- CSS3 con animaciones
- PWA con Vite Plugin PWA

## 📱 Páginas de la Aplicación

### 1. Página de Login (`/`)
- Logo de GoodLife Center con icono de mancuerna
- Formulario de ingreso con DNI
- Diseño moderno con gradientes azules

### 2. Menú Principal (`/menu`)
- Grid de opciones principales
- Navegación a diferentes secciones
- Botón de cerrar sesión

### 3. Reserva de Clases (`/reserva`)
- Selección de clases disponibles
- Elección de horarios
- Resumen de reserva
- Confirmación de reserva

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd goodlife-pwa
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

5. **Vista previa de producción**
   ```bash
   npm run preview
   ```

## 📱 Configuración PWA

### Iconos
Para generar los iconos de la PWA:

1. Abre `public/icon-generator.html` en tu navegador
2. Usa las herramientas de desarrollador para hacer capturas de pantalla
3. Guarda las imágenes como:
   - `public/icon-192.png` (192x192 píxeles)
   - `public/icon-512.png` (512x512 píxeles)

### Manifest
El archivo `vite.config.js` contiene la configuración del manifest de la PWA con:
- Nombre: "GoodLife Center - Entrenamiento"
- Colores: Azul (#0066cc)
- Modo: Standalone
- Orientación: Portrait

## 🎨 Estructura del Proyecto

```
src/
├── pages/
│   ├── DniPage.jsx          # Página de login
│   ├── MenuPage.jsx         # Menú principal
│   └── ReservaPage.jsx      # Reserva de clases
├── styles/
│   ├── DniPage.css          # Estilos del login
│   ├── MenuPage.css         # Estilos del menú
│   └── ReservaPage.css      # Estilos de reserva
├── App.jsx                  # Componente principal
├── main.jsx                 # Punto de entrada
└── index.css               # Estilos globales
```

## 🔧 Personalización

### Colores
Los colores principales se pueden modificar en:
- `src/index.css` - Variables globales
- Archivos CSS individuales de cada página

### Clases Disponibles
Modifica el array `classes` en `src/pages/ReservaPage.jsx` para agregar o cambiar las clases disponibles.

### Horarios
Modifica el array `timeSlots` en `src/pages/ReservaPage.jsx` para cambiar los horarios disponibles.

## 📱 Funcionalidades PWA

- **Instalación**: Los usuarios pueden instalar la app en su dispositivo
- **Modo Offline**: Funciona sin conexión a internet
- **Actualizaciones Automáticas**: Se actualiza automáticamente
- **Experiencia Nativa**: Se comporta como una aplicación nativa

## 🚀 Despliegue

### Netlify
1. Conecta tu repositorio a Netlify
2. Configura el comando de build: `npm run build`
3. Directorio de publicación: `dist`

### Vercel
1. Conecta tu repositorio a Vercel
2. El framework se detectará automáticamente
3. Despliegue automático en cada push

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para soporte o preguntas, contacta al equipo de desarrollo de GoodLife Center.

---

**¡Disfruta entrenando con GoodLife Center! 💪**
