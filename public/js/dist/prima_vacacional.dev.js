"use strict";

// P R I M A  V A C A C I O N A L 
console.group("Prima Vacacional");
var valorLey = 0.25;
console.log("De acuerdo a la Ley Federal del Trabajo una de nuestras variables a considerar es de " + valorLey);

function primaV(salario, antiguedad1, valorLey) {
  return salario * antiguedad1 * valorLey;
}

function primaV1(salario, antiguedad1, valorLey) {
  return salario / 30 * antiguedad1 * valorLey;
} // ...........Interacción con HTML...........//


function calcularPrimaVacacional() {
  var input = document.getElementById("inputPrimaV");
  var value = input.value;
  var indice = document.formulPrima.añosTrabajando.selectedIndex;
  var valor = document.formulPrima.añosTrabajando.options[indice].value;
  var indice1 = document.formulPrima.salarioDiario.selectedIndex;
  var valorSD = document.formulPrima.salarioDiario.options[indice1].value;
  var primaVacacional = primaV(value, valor, valorLey);
  var primaVacacional1 = primaV1(value, valor, valorLey);
  var resultPrimaV = document.getElementById("resultPrimaV");

  if (valorSD == 0) {
    resultSalarioD.innerText = "Sueldo Diario: $" + (value / 1).toFixed(2);
    resultSalarioD.classList.add('show');
    resultPrimaV.innerText = "Prima Vacacional: $" + primaVacacional.toFixed(2);
    resultPrimaV.classList.add('show');
    console.log("Esto es Salario Diario de formulario Prima Vacacional.");
  } else {
    resultSalarioD.innerText = "Sueldo Diario: $" + (value / 30).toFixed(2);
    resultSalarioD.classList.add('show');
    resultPrimaV.innerText = "Prima Vacacional: $" + primaVacacional1.toFixed(2);
    resultPrimaV.classList.add('show');
    console.log("Esto es Salario Mensual de formulario Prima Vacacional.");
  }

  switch (valor) {
    case valor:
      resultPrimaV1.innerText = "Te corresponden " + valor + " días de vacaciones.";
      resultPrimaV1.classList.add('show');
  }
}

console.groupEnd(); // P R I M A  D O M I N I C A L 

console.group("Prima Dominical");
var variableLey = 0.25;
console.log("De acuerdo a la Ley Federal del Trabajo una de nuestras variables a considerar es de " + variableLey);

function primaDominicalSD(salarioPD, domingosTrabajados, variableLey) {
  return salarioPD * variableLey * domingosTrabajados;
}

function primaDominicalMensual(salarioPD, domingosTrabajados, variableLey) {
  return salarioPD / 30 * variableLey * domingosTrabajados;
} // ...........Interacción con HTML...........//


function calcularPrimaDominical() {
  var input = document.getElementById("inputPrimaD");
  var value = input.value;
  var input1 = document.getElementById("inputDomingosT");
  var domingosTrabajados = input1.value;
  var indice1 = document.formulPrimaD.salarioDiarioPD.selectedIndex;
  var valorSD = document.formulPrimaD.salarioDiarioPD.options[indice1].value;
  var primaDominical = primaDominicalSD(value, variableLey, domingosTrabajados);
  var primaDominical1 = primaDominicalMensual(value, variableLey, domingosTrabajados);
  var resultPrimaD = document.getElementById("resultPrimaD");

  if (valorSD == 0) {
    resultSalarioD1.innerText = "Sueldo Diario: $" + (value / 1).toFixed(2);
    resultSalarioD1.classList.add('show');
    resultPrimaD.innerText = "Prima Dominical: $" + primaDominical.toFixed(2);
    resultPrimaD.classList.add('show');
    console.log("Esto es Salario Diario de formulario Prima Dominical.");
  } else {
    resultSalarioD1.innerText = "Sueldo Diario: $" + (value / 30).toFixed(2);
    resultSalarioD1.classList.add('show');
    resultPrimaD.innerText = "Prima Dominical: $" + primaDominical1.toFixed(2);
    resultPrimaD.classList.add('show');
    console.log("Esto es Salario Mensual de formulario Prima Dominical.");
  }
}

console.groupEnd();