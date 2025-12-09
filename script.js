// Archivo: script.js
// Descripción: Funcionalidades JavaScript para la tienda de segunda mano

// Funcionalidad de búsqueda en el header
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar año en footer dinámicamente
    const yearElements = document.querySelectorAll('#year');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el) el.textContent = currentYear;
    });

    // Funcionalidad de búsqueda
    const searchInputs = document.querySelectorAll('.busqueda input');
    const searchButtons = document.querySelectorAll('.busqueda button');
    
    searchInputs.forEach((input, index) => {
        const button = searchButtons[index];
        
        // Buscar al presionar Enter
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarBusqueda(input.value);
            }
        });
        
        // Buscar al hacer clic en el botón
        if (button) {
            button.addEventListener('click', function() {
                realizarBusqueda(input.value);
            });
        }
    });

    // Animación suave al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar productos y categorías para animación
    document.querySelectorAll('.producto, .categoria-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Función para realizar búsqueda
function realizarBusqueda(termino) {
    if (!termino || termino.trim() === '') {
        alert('Por favor ingresa un término de búsqueda');
        return;
    }
    
    // En un proyecto real, esto redirigiría a una página de resultados
    // Por ahora, simulamos la búsqueda
    console.log('Buscando:', termino);
    alert(`Buscando: "${termino}"\n\n(En una implementación real, esto mostraría los resultados de búsqueda)`);
    
    // Redirigir a página de resultados (si existe)
    // window.location.href = `busqueda.html?q=${encodeURIComponent(termino)}`;
}

// Función para formatear precios
function formatearPrecio(precio) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'USD'
    }).format(precio);
}

// Función para validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para mostrar notificaciones (mejorable con un sistema de notificaciones)
function mostrarNotificacion(mensaje, tipo = 'info') {
    // En un proyecto real, usarías un sistema de notificaciones más sofisticado
    alert(mensaje);
}

// Utilidad para prevenir envío múltiple de formularios
function prevenirDobleEnvio(formulario) {
    const botonSubmit = formulario.querySelector('button[type="submit"]');
    if (botonSubmit) {
        botonSubmit.disabled = true;
        botonSubmit.textContent = 'Enviando...';
        
        setTimeout(() => {
            botonSubmit.disabled = false;
            botonSubmit.textContent = botonSubmit.getAttribute('data-original-text') || 'Enviar';
        }, 3000);
    }
}