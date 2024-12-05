document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const fechaIngresoInput = document.getElementById("fecha-ingreso");
    const fechaSalidaInput = document.getElementById("fecha-salida");
    const correoInput = document.getElementById("correo");
    const telefonoInput = document.getElementById("telefono");
    const direccionInput = document.getElementById("direccion");
    const ciudadInput = document.getElementById("ciudad");
    const paisInput = document.getElementById("pais");
    const codigoPostalInput = document.getElementById("codigo-postal");
    const submitButton = document.querySelector("button[type='submit']");
    const form = document.getElementById("reserva-form");

    function checkFormFields() {
        if (
            nombreInput.value.trim() !== "" &&
            apellidoInput.value.trim() !== "" &&
            fechaIngresoInput.value !== "" &&
            fechaSalidaInput.value !== "" &&
            correoInput.value.trim() !== "" &&
            telefonoInput.value.trim() !== "" &&
            direccionInput.value.trim() !== "" &&
            ciudadInput .value.trim() !== "" &&
            paisInput.value.trim() !== "" &&
            codigoPostalInput.value.trim() !== ""
        ) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Agregar eventos de entrada para validar el formulario
    nombreInput.addEventListener("input", checkFormFields);
    apellidoInput.addEventListener("input", checkFormFields);
    fechaIngresoInput.addEventListener("input", checkFormFields);
    fechaSalidaInput.addEventListener("input", checkFormFields);
    correoInput.addEventListener("input", checkFormFields);
    telefonoInput.addEventListener("input", checkFormFields);
    direccionInput.addEventListener("input", checkFormFields);
    ciudadInput.addEventListener("input", checkFormFields);
    paisInput.addEventListener("input", checkFormFields);
    codigoPostalInput.addEventListener("input", checkFormFields);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Reserva realizada con éxito");
        form.reset();
        submitButton.disabled = true;
    });
});