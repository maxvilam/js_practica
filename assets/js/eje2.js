const rojo = document.getElementById("btn-1");
const naranja = document.getElementById("btn-2");
const amarillo = document.getElementById("btn-3");
const verde = document.getElementById("btn-4");
const celeste = document.getElementById("btn-5");
const fucsia = document.getElementById("btn-6");
const caja =document.getElementById("caja");
const crojo="#e53e3e";
const cnaranja="#dd6b20";
const camarillo="#faf089";
const cverde="#48bb78";
const cceleste="#81e6d9";
const cfucsia="#d53f8c";
const color="#ffff"
function bgrojo(event) {
    event.preventDefault(); 
    caja.style.background = crojo;
}
function bgnaranja(event) {
    event.preventDefault(); 
    caja.style.background = cnaranja;
}
function bgamarillo(event) {
    event.preventDefault(); 
    caja.style.background = camarillo;
}
function bgverde(event) {
    event.preventDefault(); 
    caja.style.background = cverde;
}
function bgceleste(event) {
    event.preventDefault(); 
    caja.style.background = cceleste;
}
function bgfucsia(event) {
    event.preventDefault(); 
    caja.style.background = cfucsia;
}
rojo.addEventListener("click", bgrojo);
naranja.addEventListener("click", bgnaranja);
amarillo.addEventListener("click", bgamarillo);
verde.addEventListener("click", bgverde);
celeste.addEventListener("click", bgceleste);
fucsia.addEventListener("click", bgfucsia);
