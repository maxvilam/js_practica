const documento = document.getElementById("formulario");
const pnombre = document.querySelector(".errorNombre");
const pasunto = document.querySelector(".errorAsunto");
const pmensaje = document.querySelector(".errorMensaje");
const presultado = document.querySelector(".resultado");
const caracterespermitidos = new RegExp("^[A-ZÁÉÍÓÚÑ ]+$", "i");

function vd(event) {
  event.preventDefault();
  let cumple = 0;
  if (!caracterespermitidos.test(nombre.value)) {
    pnombre.innerHTML = "El nombre es requerido.";
    cumple = 0;
  } else {
    pnombre.innerHTML = "";
    cumple = cumple + 1;
  }
  if (!caracterespermitidos.test(asunto.value)) {
    pasunto.innerHTML = "El nombre es requerido.";
    cumple = 0;
  } else {
    pasunto.innerHTML = "";
    cumple = cumple + 1;
  }
  if (!caracterespermitidos.test(mensaje.value)) {
    pmensaje.innerHTML = "El nombre es requerido.";
    cumple = 0;
  } else {
    pmensaje.innerHTML = "";
    cumple = cumple + 1;
  }
  if (cumple == 3) {
    presultado.innerHTML = "Mensaje enviado con éxito";
  } else {
    presultado.innerHTML = "";
  }
}
documento.addEventListener("submit", vd);
