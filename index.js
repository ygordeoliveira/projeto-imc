var botao = document.querySelector("button");
var kg = document.getElementById("peso");
var alt = document.getElementById("altura");

function calcularIMC(kg, alt) {
    alt = alt/100;
    var imc = kg/(alt * alt);
    return imc.toFixed(2);
}

botao.addEventListener('click', function() {
    alert (" O seu IMC é: " + calcularIMC(Number(kg.value),Number(alt.value)));
    kg.value = "New value";
    alt.value = "New value";
})