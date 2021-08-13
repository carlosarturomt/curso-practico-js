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
  var resultCuadrado = document.getElementById("resultCuadrado");
  resultCuadrado.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
  resultCuadrado.classList.add('show'); // alert("Perímetro: " + perimetro + valor);
}

function calcularAreaCuadrado() {
  var input = document.getElementById("inputCuadrado");
  var value = input.value;
  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;
  var area = areaCuadrado(value, valor);
  var resultCuadrado = document.getElementById("resultCuadrado");
  resultCuadrado.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultCuadrado.classList.add('show'); // alert("Área: " + area + valor + "²");
} // Rectángulo


function calcularPerimetroRectangulo() {
  var inputA = document.getElementById("inputRectanguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputRectanguloB");
  var valueB = Number(inputB.value);
  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;
  var perimetro = perimetroRectangulo(valueA, valueB, valor);
  var resultRectangulo = document.getElementById("resultRectangulo");
  resultRectangulo.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
  resultRectangulo.classList.add('show'); // alert("Perímetro: " + perimetro + valor);
}

function calcularAreaRectangulo() {
  var inputA = document.getElementById("inputRectanguloA");
  var valueA = Number(inputA.value);
  var inputB = document.getElementById("inputRectanguloB");
  var valueB = Number(inputB.value);
  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;
  var area = areaRectangulo(valueA, valueB, valor);
  var resultRectangulo = document.getElementById("resultRectangulo");
  resultRectangulo.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultRectangulo.classList.add('show'); // alert("Área: " + area + valor + "²");
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
  var resultTriangulo = document.getElementById("resultTriangulo");
  resultTriangulo.classList.add('show'); // if (valueA==0, valueB==0, valueC==0) {
  //   alert("Parece que te faltan datos, es probable que el resultado no sea el esperado."); 
  // }

  if (valueB == 0, valueC == 0) {
    resultTriangulo.innerText = "Si tu triángulo es equilatero, el perímetro es: " + valueA * 3 + valor + " si es isóseles, llena los demás datos.";
  } else {
    resultTriangulo.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
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
  var resultTriangulo = document.getElementById("resultTriangulo");
  resultTriangulo.classList.add('show');

  if (valueD == 0) {
    resultTriangulo.innerText = "Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo isóseles es de: " + altura1.toFixed(3) + valor + " y en un triángulo equilatero es de: " + altura2.toFixed(3) + valor;
  } else {
    resultTriangulo.innerText = "Area: " + area.toFixed(3) + valor + "²";
  }

  if (valueC == 0) {
    resultTriangulo.innerText = "Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo equilatero es de: " + altura2.toFixed(3) + valor + " y para un triángulo isóseles necesitas tener la BASE";
  }
} // Circulo


function calcularPerimetroCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;
  var perimetro = perimetroCirculo(value, valor);
  var resultCirculo = document.getElementById("resultCirculo");
  resultCirculo.innerText = "Circunferencia: " + perimetro.toFixed(3) + valor;
  resultCirculo.classList.add('show'); // alert("Circunferencia: " + perimetro.toFixed(3) + valor);
}

function calcularAreaCirculo() {
  var input = document.getElementById("inputCirculo");
  var value = input.value;
  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;
  var area = areaCirculo(value);
  var resultCirculo = document.getElementById("resultCirculo");
  resultCirculo.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultCirculo.classList.add('show'); // alert("Área: " + area.toFixed(3) + valor + "²");
}