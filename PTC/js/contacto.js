
document.addEventListener('DOMContentLoaded', function () {
    var enviarMensajeBtn = document.getElementById('enviar-mensaje');
    enviarMensajeBtn.addEventListener('click', function () {
        var nombre = document.getElementById('nombre').value;
        
        Swal.fire({
            title: 'Mensaje enviado correctamente',
            text: `¡Gracias, ${nombre} ! Su mensaje ha sido enviado con éxito.`,
            icon: 'success',
            confirmButtonText: 'Aceptar'

        });
        
        
        document.getElementById('nombre').value = '';
        document.getElementById('email').value = '';
        document.getElementById('mensaje').value = '';
    });
});