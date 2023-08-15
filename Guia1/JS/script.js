document.addEventListener('DOMContentLoaded', function() {
    var saludarBtn = document.getElementById('saludoBtn');
    var mensaje = document.getElementById('mensaje');

    saludarBtn.addEventListener('click', function() {
        mensaje.textContent = 'HOLA MUNDO';
    });
});
