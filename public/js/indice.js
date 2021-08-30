// Í N D I C E - D E - M A S A - C O R P O R A L
console.group("Índice de Masa Corporal");

function indice(peso, altura) {
  return peso / altura **2;
}

// ...........Interacción con HTML...........//
function indiceMasaC() {
  const inputWeight = document.getElementById("inputWeight");
  const weightValue = inputWeight.value;

  const inputHeight = document.getElementById("inputHeight");
  const heightValue = inputHeight.value;

  const imc = indice(weightValue, heightValue);

  const resultIMC = document.getElementById("resultIMC");

  resultIMC.innerText = "IMC: " + imc.toFixed(2);
  resultIMC.classList.add('show');
}

console.groupEnd();
