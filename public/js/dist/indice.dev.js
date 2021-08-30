"use strict";

// Í N D I C E - D E - M A S A - C O R P O R A L
console.group("Índice de Masa Corporal");

function indice(peso, altura) {
  return peso / Math.pow(altura, 2);
} // ...........Interacción con HTML...........//


function indiceMasaC() {
  var inputWeight = document.getElementById("inputWeight");
  var weightValue = inputWeight.value;
  var inputHeight = document.getElementById("inputHeight");
  var heightValue = inputHeight.value;
  var imc = indice(weightValue, heightValue);
  var resultIMC = document.getElementById("resultIMC");
  resultIMC.innerText = "IMC: " + imc.toFixed(2);
  resultIMC.classList.add('show');
}

console.groupEnd();