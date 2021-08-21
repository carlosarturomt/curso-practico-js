console.group("Prima Vacacional");
const salario = 5000;
console.log("Tu salario es de $" + salario + " pesitos.");

const antiguedad1 = 6;
console.log("Tu antiguedad es equivalente a " + antiguedad1 + " días.");

const valorLey = 0.25;
console.log("De acuerdo a la Ley una de nuestras variables a considerar es de " + valorLey);

function primaV(salario, antiguedad1, valorLey) {
  return (salario / 30) * antiguedad1 * valorLey;
}
console.groupEnd();


// ...........Interacción con HTML...........//
function calcularPrimaVacacional(){
  const input = document.getElementById("inputPrimaV");
  const value = input.value;

  var indice = document.formulPrima.añosTrabajando.selectedIndex;
  var valor = document.formulPrima.añosTrabajando.options[indice].value;

  const primaVacacional = primaV(value, valor, valorLey);

  const resultPrimaV = document.getElementById("resultPrimaV");
  resultPrimaV.innerText = "Prima Vacacional: $" + primaVacacional.toFixed(2);
  resultPrimaV.classList.add('show');
}
