function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, complete todos los campos del formulario.");
      return false; // Evita el envío del formulario
    }

    // Aquí puedes agregar otras validaciones adicionales si es necesario

    // El formulario es válido, se puede enviar
    alert("Formulario enviado correctamente.");
    return true; // Permite el envío del formulario
  }
