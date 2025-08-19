
function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    if (mensaje) {
        mensaje.classList.add('mostrar');
        console.log('Mensaje mostrado correctamente');
    } else {
        console.error('Elemento mensaje no encontrado');
    }
}


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mostrarMensaje };
}
