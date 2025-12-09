# Tienda de Segunda Mano

## 📋 Descripción del Proyecto

Este proyecto es un sitio web completo de una tienda en línea de segunda mano, desarrollado como parte del curso de desarrollo web. La plataforma permite a los usuarios explorar categorías de productos, publicar artículos para la venta, gestionar su perfil y contactar con soporte.

**Autor:** Eian D. Pérez Vázquez  
**Tipo de Proyecto:** Tienda en línea (simulación de proceso de compra/venta)

## 🎯 Propósito

El objetivo de este proyecto es diseñar, desarrollar e implementar un sitio web completo que demuestre habilidades en HTML, CSS y JavaScript. El sitio simula una plataforma de compra y venta de productos de segunda mano, ofreciendo una experiencia de usuario completa con múltiples páginas interconectadas y funcionalidades interactivas.

## 🏗️ Estructura del Sitio

El sitio web consta de **5 páginas principales**:

1. **Index.html** - Página de inicio con productos destacados y bienvenida
2. **categorias.html** - Catálogo de categorías disponibles con búsqueda y filtros
3. **publicar.html** - Formulario para publicar nuevos artículos a la venta
4. **perfil.html** - Perfil de usuario con estadísticas y gestión de artículos
5. **ayuda.html** - Centro de ayuda con FAQ interactivo y formulario de contacto

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5** - Estructura semántica y accesible
- **CSS3** - Diseño responsivo, animaciones y efectos visuales
- **JavaScript (Vanilla)** - Interactividad sin dependencias externas

### Características Técnicas
- Diseño responsivo (mobile-first approach)
- Validación de formularios en cliente
- Animaciones CSS y efectos de transición
- Búsqueda y filtrado en tiempo real
- FAQ interactivo con acordeón
- Preview de imágenes en formularios

## 📁 Estructura de Archivos

```
Proyecto_Tienda_Segunda_Mano_Fixed/
│
├── Index.html              # Página principal
├── categorias.html         # Página de categorías
├── publicar.html           # Formulario de publicación
├── perfil.html             # Perfil de usuario
├── ayuda.html              # Centro de ayuda
│
├── estilos.css             # Estilos principales
├── script.js               # Funcionalidades JavaScript
│
├── imagenes/               # Recursos de imágenes
│   ├── favicon.png
│   ├── logo.png
│   ├── producto1.jpg
│   ├── producto2.jpg
│   ├── producto3.jpg
│   └── producto4.jpg
│
└── README.md               # Este archivo
```

## 🚀 Cómo Instalar y Ejecutar

### Opción 1: Abrir directamente en el navegador
1. Descarga o clona este repositorio
2. Navega hasta la carpeta del proyecto
3. Abre `Index.html` en tu navegador web preferido

### Opción 2: Usar un servidor local (Recomendado)

#### Con Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Luego abre `http://localhost:8000` en tu navegador.

#### Con Node.js (live-server):
```bash
# Instalar live-server globalmente
npm install -g live-server

# Ejecutar en la carpeta del proyecto
live-server
```

#### Con PHP:
```bash
php -S localhost:8000
```

### Opción 3: Usar VS Code Live Server
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `Index.html`
3. Selecciona "Open with Live Server"

## ✨ Funcionalidades Implementadas

### Interactividad JavaScript
- ✅ **Validación de formularios** - Validación en tiempo real con mensajes de error
- ✅ **Búsqueda interactiva** - Búsqueda de productos y categorías
- ✅ **FAQ Acordeón** - Preguntas frecuentes con animación de expansión/colapso
- ✅ **Preview de imágenes** - Vista previa de imágenes antes de subir
- ✅ **Filtrado de categorías** - Búsqueda en tiempo real de categorías
- ✅ **Animaciones al desplazar** - Efectos de aparición al hacer scroll
- ✅ **Prevención de doble envío** - Protección contra envíos múltiples de formularios

### Características de Diseño
- ✅ **Diseño responsivo** - Adaptable a móviles, tablets y escritorio
- ✅ **Navegación intuitiva** - Menú de navegación claro con estado activo
- ✅ **Paleta de colores armónica** - Esquema de colores consistente
- ✅ **Tipografía adecuada** - Fuentes legibles y jerarquía visual clara
- ✅ **Efectos hover** - Feedback visual en elementos interactivos

### SEO y Accesibilidad
- ✅ **Meta tags** - Descripciones y títulos únicos por página
- ✅ **Estructura semántica** - Uso correcto de `<header>`, `<main>`, `<footer>`, `<section>`, `<article>`
- ✅ **Etiquetas alt** - Descripciones alternativas para imágenes
- ✅ **Navegación por teclado** - Formularios accesibles con labels apropiados

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario:** #2c3e50 (Azul oscuro)
- **Secundario:** #e67e22 (Naranja)
- **Éxito:** #27ae60 (Verde)
- **Info:** #3498db (Azul claro)
- **Fondo:** #f9f9f9 (Gris claro)

### Tipografía
- **Fuente principal:** 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif

## 📱 Compatibilidad de Navegadores

El sitio ha sido probado y funciona correctamente en:
- ✅ Google Chrome (últimas versiones)
- ✅ Mozilla Firefox (últimas versiones)
- ✅ Microsoft Edge (últimas versiones)
- ✅ Safari (últimas versiones)

## ✅ Validación

### HTML
Todas las páginas HTML deben ser validadas usando el [Validador HTML de W3C](https://validator.w3.org/):
- Index.html
- categorias.html
- publicar.html
- perfil.html
- ayuda.html

### CSS
El archivo CSS debe ser validado usando el [Validador CSS de W3C](https://jigsaw.w3.org/css-validator/):
- estilos.css

## 📝 Notas Importantes

### Limitaciones del Proyecto
- Este es un proyecto **frontend solamente** - no hay backend ni base de datos
- Los formularios muestran alertas de simulación - no envían datos reales
- Las imágenes de productos son de ejemplo
- La funcionalidad de búsqueda está simulada

### Para Producción
En un proyecto real, se necesitaría:
- Backend (Node.js, PHP, Python, etc.)
- Base de datos para almacenar productos y usuarios
- Sistema de autenticación de usuarios
- Procesamiento de pagos
- Sistema de mensajería entre usuarios
- Panel de administración
- API REST para comunicación frontend-backend

## 🔄 Mejoras Futuras

- [ ] Implementar backend con base de datos
- [ ] Sistema de autenticación de usuarios
- [ ] Búsqueda avanzada con filtros múltiples
- [ ] Sistema de mensajería entre compradores y vendedores
- [ ] Galería de imágenes múltiples por producto
- [ ] Sistema de calificaciones y reseñas
- [ ] Integración con pasarelas de pago
- [ ] Panel de administración
- [ ] Optimización de imágenes
- [ ] Implementar PWA (Progressive Web App)

## 📄 Licencia

Este proyecto fue desarrollado como parte de un curso académico. Todos los derechos reservados.

## 👤 Autor

**Eian D. Pérez Vázquez**

---

## 📞 Contacto

Para preguntas o comentarios sobre este proyecto, puedes usar el formulario de contacto en la página de Ayuda del sitio web.

---

**Última actualización:** 2025
