function calcularPrecio(precioUnitario, cantidad) {
    const total= precioUnitario*cantidad;
    return total;
}

function puedeReservar(Tazasdisponibles ) {
  return Tazasdisponibles > 0; 
}

const botonReservar = document.querySelector("#boton-reservar");
const contadorTazas = document.querySelector("#contador-tazas");

botonReservar.addEventListener("dblclick", function () {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
         console.log("Reserva registrada. Tazas restantes: " + (tazasActuales - 1));
      } else {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
        console.log("No hay más cupos.");
    }
});

botonReservar.addEventListener("dblclick", function () {
     console.log("El usuario haga clic");
});
const form = document.getElementById('cataForm');
const consoleOutput = document.getElementById('consoleOutput');
const mensajeExito = document.getElementById('mensajeExito');

function logToScreen(text, isError = false) {
    consoleOutput.style.color = isError ? '#f87171' : '#38bdf8';
    consoleOutput.textContent = text;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpiar errores previos
    document.querySelectorAll('.cafe-error').forEach(el => el.textContent = '');
    document.querySelectorAll('input').forEach(el => el.classList.remove('error-input'));
    mensajeExito.style.display = 'none';

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let hasError = false;

    // 1. Validar Nombre: Solo letras y espacios (if/else)
    const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (nombre === "") {
        document.getElementById('errorNombre').textContent = "El nombre es obligatorio.";
        document.getElementById('nombre').classList.add('error-input');
        hasError = true;
    } else if (!regexNombre.test(nombre)) {
        document.getElementById('errorNombre').textContent = "El nombre no debe contener números ni símbolos.";
        document.getElementById('nombre').classList.add('error-input');
        hasError = true;
    }

    // 2. Validar Email: Estrictamente @gmail.com (if/else)
    const regexGmail = /@gmail\.com$/i;
    if (email === "") {
        document.getElementById('errorEmail').textContent = "El correo es obligatorio.";
        document.getElementById('email').classList.add('error-input');
        hasError = true;
    } else if (!regexGmail.test(email)) {
        document.getElementById('errorEmail').textContent = "El correo debe ser estrictamente una cuenta de Gmail (@gmail.com).";
        document.getElementById('email').classList.add('error-input');
        hasError = true;
    }

    // 3. Validar Teléfono: Solo números enteros (if/else)
    const regexTelefono = /^\d+$/;
    if (telefono === "") {
        document.getElementById('errorTelefono').textContent = "El teléfono es obligatorio.";
        document.getElementById('telefono').classList.add('error-input');
        hasError = true;
    } else if (!regexTelefono.test(telefono)) {
        document.getElementById('errorTelefono').textContent = "El teléfono solo debe contener números (sin letras ni espacios).";
        document.getElementById('telefono').classList.add('error-input');
        hasError = true;
    }

    // Si ocurre algún error en las validaciones
    if (hasError) {
        console.warn("⚠️ Validación fallida: El formulario contiene errores.");
        logToScreen("[ERROR] Formulario rechazado por reglas de validación.", true);
        return; // Detiene el envío
    }

    // Si todo es correcto
    const datosCata = { nombre, email, telefono, mensaje };

    // Registro detallado en consola del navegador con estilos
    console.log("%c☕ ¡REGISTRO EXITOSO CAFÉ LA!", "color: #0284c7; font-weight: bold; font-size: 14px;");
    console.log("%cDatos del usuario:", "color: #334155; font-weight: bold;", datosCata);

    logToScreen(`[ÉXITO] Registro procesado correctamente:\n${JSON.stringify(datosCata, null, 2)}`);

    mensajeExito.style.display = 'block';
    mensajeExito.textContent = `¡Gracias ${nombre}! Tu inscripción a la cata ha sido registrada con éxito.`;
    
    
    form.reset();
});
