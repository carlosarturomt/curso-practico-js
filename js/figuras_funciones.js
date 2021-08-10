// ..........Código del Cuadrado..........//
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();


// ...........Código del Triángulo...........//
console.group("Triángulos");
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();


// ...........Código del Círculo...........//
console.group("Círculos");
// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es; " + PI);

// Perímetro/Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}
console.groupEnd();


// ...........Interacción con HTML...........//
// Cuadrado
function calcularPerimetroCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triángulo
function calcularPerimetroTriangulo(){
  const inputA = document.getElementById("inputTrianguloA");
  const valueA = Number(inputA.value);

  const inputB = document.getElementById("inputTrianguloB");
  const valueB = Number(inputB.value);

  const inputC = document.getElementById("inputTrianguloC");
  const valueC = Number(inputC.value);

  const perimetro = perimetroTriangulo(valueA, valueB, valueC);
  alert(perimetro);
}

function calcularAreaTriangulo(){
  const inputC = document.getElementById("inputTrianguloC");
  const valueC = Number(inputC.value);

  const inputD = document.getElementById("inputTrianguloD");
  const valueD = Number(inputD.value);

  const area = areaTriangulo(valueC, valueD);
  alert(area);
}

// Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}