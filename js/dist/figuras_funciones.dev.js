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
  alert(perimetro);
}

function calcularAreaCuadrado() {
  var input = document.getElementById("inputCuadrado");
  var value = input.value;
  var area = areaCuadrado(value);
  alert(area);
} // Triángulo


function calcularPerimetroTriangulo() {
  var inputA = document.getElementById("inputTrianguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputTrianguloB");
  var valueB = Number(inputB.value);
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var perimetro = perimetroTriangulo(valueA, valueB, valueC);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var inputD = document.getElementById("inputTrianguloD");
  var valueD = Number(inputD.value);
  var area = areaTriangulo(valueC, valueD);
  alert(area);
} // Circulo


function calcularPerimetroCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var area = areaCirculo(value);
  alert(area);
}