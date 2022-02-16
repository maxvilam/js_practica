const btnsumar = document.getElementById("btn-sumar");
const btnrestar = document.getElementById("btn-restar");
const resultado = document.querySelector(".resultado");

function sumar(event) {
  const valor1 = document.getElementById("valor1").value;
  const valor2 = document.getElementById("valor2").value;
  resultado.innerHTML = parseInt(valor1) + parseInt(valor2);
}

function restar(event) {
    const valor1 = document.getElementById("valor1").value;
    const valor2 = document.getElementById("valor2").value;
    if (parseInt(valor1) - parseInt(valor2)<0){
        resultado.innerHTML =0    
    } else {
        resultado.innerHTML = parseInt(valor1) - parseInt(valor2);
    }
  }

btnsumar.addEventListener("click", sumar);
btnrestar.addEventListener("click", restar);

