"use strict";

// ..........Código del Cuadrado..........//
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd(); // ...........Código del Triángulo...........//

console.group("Triángulos");

function alturaTrianguloEquilatero(ladoTriangulo1, baseTriangulo) {
  return Math.sqrt(Math.pow(ladoTriangulo1, 2) - ladoTriangulo1 / Math.pow(2, 2));
}

function alturaTrianguloIsoseles(ladoTriangulo1, baseTriangulo) {
  return Math.sqrt(Math.pow(ladoTriangulo1, 2) - Math.pow(baseTriangulo, 2) / 4);
}

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return baseTriangulo * alturaTriangulo / 2;
}

console.groupEnd(); // ...........Código del Círculo...........//

console.group("Círculos"); // Diámetro

function diametroCirculo(radio) {
  return radio * 2;
} // PI


var PI = Math.PI;
console.log("PI es; " + PI); // Perímetro/Circunferencia

function perimetroCirculo(radio) {
  var diametro = diametroCirculo(radio);
  return diametro * PI;
} // Área


function areaCirculo(radio) {
  return radio * radio * PI;
}

console.groupEnd(); // ...........Interacción con HTML...........//
// Cuadrado

function calcularPerimetroCuadrado() {
  var input = document.getElementById("inputCuadrado");
  var value = input.value;
  var perimetro = perimetroCuadrado(value);
  alert("Perímetro: " + perimetro);
}

function calcularAreaCuadrado() {
  var input = document.getElementById("inputCuadrado");
  var value = input.value;
  var area = areaCuadrado(value);
  alert("Área: " + area);
} // Triángulo


function calcularPerimetroTriangulo() {
  var inputA = document.getElementById("inputTrianguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputTrianguloB");
  var valueB = Number(inputB.value);
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var perimetro = perimetroTriangulo(valueA, valueB, valueC);

  if (valueA == 0, valueB == 0, valueC == 0) {
    alert("Parece que no colocaste ningún dato, el resultado sería '0'.");
  }

  if (valueB == 0, valueC == 0) {
    alert("Si tu tiángulo es quilatero, el perímetro es: " + valueA * 3 + " si es isóseles, llena los demás datos.");
  } else {
    alert("Perímetro: " + perimetro);
  }
}

function calcularAreaTriangulo() {
  var inputA = document.getElementById("inputTrianguloA");
  var valueA = Number(inputA.value);
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var inputD = document.getElementById("inputTrianguloD");
  var valueD = Number(inputD.value);
  var altura1 = alturaTrianguloIsoseles(valueA, valueC);
  var altura2 = alturaTrianguloEquilatero(valueA);
  var area = areaTriangulo(valueC, valueD);

  if (valueD == 0) {
    alert("Para calcular el ÁREA, necesitas la ALTURA, esta en un triángulo isóseles es de: " + altura1 + " y en un triángulo equilatero es de: " + altura2);
  } else {
    alert("Area: " + area);
  }
} // Circulo


function calcularPerimetroCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var perimetro = perimetroCirculo(value);
  alert("Circunferencia: " + perimetro);
}

function calcularAreaCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var area = areaCirculo(value);
  alert("Área: " + area);
}