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
  var resultIMC = document.getElementById("resultIMC");
  var imc = indice(weightValue, heightValue);

  switch (true) {
    case imc > 0 && imc < 15:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');
      resultIMC1.innerText = "Bajo Peso Severo";
      resultIMC1.classList.add('show', 'danger');
      resultIMC2.innerText = "Riego Muy Severo";
      resultIMC2.classList.add('show', 'danger');
      break;

    case imc > 15.01 && imc < 16:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');
      resultIMC1.innerText = "Bajo Peso Severo";
      resultIMC1.classList.add('show', 'danger');
      resultIMC2.innerText = "Riego Moderado";
      break;

    case imc > 16.01 && imc < 18.5:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'careful');
      resultIMC1.innerText = "Bajo Peso";
      resultIMC1.classList.add('show', 'careful');
      resultIMC2.innerText = "Riego Leve";
      break;

    case imc > 18.51 && imc < 24.99:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'normal');
      resultIMC1.innerText = "Saludable";
      resultIMC1.classList.add('show', 'normal');
      resultIMC2.innerText = "Buen IMC";
      break;

    case imc > 25.01 && imc < 29.99:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'careful');
      resultIMC1.innerText = "Sobrepeso";
      resultIMC1.classList.add('show', 'careful');
      resultIMC2.innerText = "Riego Leve";
      break;

    case imc > 30.01 && imc < 34.99:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');
      resultIMC1.innerText = "Obesidad Grado I";
      resultIMC1.classList.add('show', 'danger');
      resultIMC2.innerText = "Riego Moderado";
      break;

    case imc > 35.01 && imc < 39.99:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');
      resultIMC1.innerText = "Obesidad Grado II";
      resultIMC1.classList.add('show', 'danger');
      resultIMC2.innerText = "Riego Severo";
      break;

    case imc > 40.01 && imc < 999:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');
      resultIMC1.innerText = "Obesidad Grado III";
      resultIMC1.classList.add('show', 'danger');
      resultIMC2.innerText = "Riego Muy Severo";
      resultIMC2.classList.add('show', 'danger');
  }
}

console.groupEnd();