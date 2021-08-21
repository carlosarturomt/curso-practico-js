"use strict";

console.group("Prima Vacacional");
var salario = 5000;
console.log("Tu salario es de $" + salario + " pesitos.");
var antiguedad1 = 6;
console.log("Tu antiguedad es equivalente a " + antiguedad1 + " días.");
var valorLey = 0.25;
console.log("De acuerdo a la Ley una de nuestras variables a considerar es de " + valorLey);

function primaV(salario, antiguedad1, valorLey) {
  return salario / 30 * antiguedad1 * valorLey;
}

console.groupEnd(); // ...........Interacción con HTML...........//

function calcularPrimaVacacional() {
  var input = document.getElementById("inputPrimaV");
  var value = input.value;
  var indice = document.formulPrima.añosTrabajando.selectedIndex;
  var valor = document.formulPrima.añosTrabajando.options[indice].value;
  var primaVacacional = primaV(value, valor, valorLey);
  var resultPrimaV = document.getElementById("resultPrimaV");
  resultPrimaV.innerText = "Prima Vacacional: $" + primaVacacional.toFixed(2);
  resultPrimaV.classList.add('show');
}