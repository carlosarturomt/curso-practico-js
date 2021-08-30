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

  const resultIMC = document.getElementById("resultIMC");

  const imc = indice(weightValue, heightValue);

  switch(true){
    case imc > 0 && imc < 15:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');

      resultIMC1.innerText = "Bajo Peso Severo";
      resultIMC1.classList.add('show', 'danger');

      resultIMC2.innerText = "Riego Muy Severo";
      resultIMC2.classList.add('show', 'danger');
      break;
    case imc > 15 && imc < 16:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');

      resultIMC1.innerText = "Bajo Peso Severo";
      resultIMC1.classList.add('show', 'danger');
      break;
    case imc > 16.01 && imc < 18.5:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'careful');

      resultIMC1.innerText = "Bajo Peso";
      resultIMC1.classList.add('show', 'careful');
      break;
    case imc > 18.51 && imc < 24.9:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'normal');

      resultIMC1.innerText = "Saludable";
      resultIMC1.classList.add('show', 'normal');
      break;
    case imc > 25 && imc < 29.9:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'careful');

      resultIMC1.innerText = "Sobrepeso";
      resultIMC1.classList.add('show', 'careful');
      break;
    case imc > 30 && imc < 34.9:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');

      resultIMC1.innerText = "Obesidad Grado I";
      resultIMC1.classList.add('show', 'danger');
      break;
    case imc > 35 && imc < 39.9:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');

      resultIMC1.innerText = "Obesidad Grado II";
      resultIMC1.classList.add('show', 'danger');
      break;
    case imc > 40 && imc < 999:
      resultIMC.innerText = "IMC: " + imc.toFixed(2);
      resultIMC.classList.add('show', 'danger');

      resultIMC1.innerText = "Obesidad Grado III";
      resultIMC1.classList.add('show', 'danger');

      resultIMC2.innerText = "Riego Muy Severo";
      resultIMC2.classList.add('show', 'danger');
  }
}

console.groupEnd();
