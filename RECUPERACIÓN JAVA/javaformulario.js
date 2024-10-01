    <script>
    // Función para manejar el envío del formulario
    document.getElementById('formularioUsuario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        if (nombre && email) {
            document.getElementById('mensajeFormulario').textContent = 'Gracias por enviar tus datos, ' + nombre + '. Te contactaremos en ' + email;
        } else {
            document.getElementById('mensajeFormulario').textContent = 'Por favor, completa todos los campos.';
        }});
</script>