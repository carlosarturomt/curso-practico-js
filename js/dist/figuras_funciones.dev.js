"use strict";

// ..........Código del Cuadrado..........//
console.group("Cuadrados");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

console.groupEnd(); // ..........Código del Rectángulo..........//

console.group("Rectángulos");

function perimetroRectangulo(altura, base) {
  return altura * 2 + base * 2;
}

function areaRectangulo(altura, base) {
  return altura * base;
}

console.groupEnd(); // ...........Código del Triángulo...........//

console.group("Triángulos");

function alturaTrianguloEquilatero(ladoTriangulo1) {
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
  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;
  var perimetro = perimetroCuadrado(value, valor);
  alert("Perímetro: " + perimetro + valor);
}

function calcularAreaCuadrado() {
  var input = document.getElementById("inputCuadrado");
  var value = input.value;
  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;
  var area = areaCuadrado(value, valor);
  alert("Área: " + area + valor + "²");
} // Rectángulo


function calcularPerimetroRectangulo() {
  var inputA = document.getElementById("inputRectanguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputRectanguloB");
  var valueB = Number(inputB.value);
  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;
  var perimetro = perimetroRectangulo(valueA, valueB, valor);
  alert("Perímetro: " + perimetro + valor);
}

function calcularAreaRectangulo() {
  var inputA = document.getElementById("inputRectanguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputRectanguloB");
  var valueB = Number(inputB.value);
  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;
  var area = areaRectangulo(valueA, valueB, valor);
  alert("Área: " + area + valor + "²");
} // Triángulo


function calcularPerimetroTriangulo() {
  var inputA = document.getElementById("inputTrianguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputTrianguloB");
  var valueB = Number(inputB.value);
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var indice = document.formulTriangulo.unidadesTriangulo.selectedIndex;
  var valor = document.formulTriangulo.unidadesTriangulo.options[indice].value;
  var perimetro = perimetroTriangulo(valueA, valueB, valueC, valor);

  if (valueA == 0, valueB == 0, valueC == 0) {
    alert("Parece que te faltan datos, es probable que el resultado no sea el esperado.");
  }

  if (valueB == 0, valueC == 0) {
    alert("Si tu triángulo es quilatero, el perímetro es: " + valueA * 3 + valor + " si es isóseles, llena los demás datos.");
  } else {
    alert("Perímetro: " + perimetro + valor);
  }
}

function calcularAreaTriangulo() {
  var inputA = document.getElementById("inputTrianguloA");
  var valueA = Number(inputA.value);
  var inputC = document.getElementById("inputTrianguloC");
  var valueC = Number(inputC.value);
  var inputD = document.getElementById("inputTrianguloD");
  var valueD = Number(inputD.value);
  var indice = document.formulTriangulo.unidadesTriangulo.selectedIndex;
  var valor = document.formulTriangulo.unidadesTriangulo.options[indice].value;
  var altura1 = alturaTrianguloIsoseles(valueA, valueC);
  var altura2 = alturaTrianguloEquilatero(valueA);
  var area = areaTriangulo(valueC, valueD);

  if (valueD == 0) {
    alert("Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo isóseles es de: " + altura1 + valor + " y en un triángulo equilatero es de: " + altura2 + valor);
  } else {
    alert("Area: " + area + valor + "²");
  }
} // Circulo


function calcularPerimetroCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;
  var perimetro = perimetroCirculo(value, valor);
  alert("Circunferencia: " + perimetro + valor);
}

function calcularAreaCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;
  var area = areaCirculo(value);
  alert("Área: " + area + valor + "²");
}