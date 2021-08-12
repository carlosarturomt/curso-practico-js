// ..........Código del Cuadrado..........//
console.group("Cuadrados");
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();


// ..........Código del Rectángulo..........//
console.group("Rectángulos");
function perimetroRectangulo(altura, base) {
  return (altura * 2)+(base * 2);
}
function areaRectangulo(altura, base) {
  return altura * base;
}
console.groupEnd();


// ...........Código del Triángulo...........//
console.group("Triángulos");
function alturaTrianguloEquilatero(ladoTriangulo1) {
  return Math.sqrt(ladoTriangulo1**2 -(ladoTriangulo1/2**2));
}
function alturaTrianguloIsoseles(ladoTriangulo1, baseTriangulo) {
  return Math.sqrt(ladoTriangulo1**2  - baseTriangulo**2 / 4);
}
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
  alert("Perímetro: " + perimetro);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert("Área: " + area);
}

// Rectángulo
function calcularPerimetroRectangulo(){
  const inputA = document.getElementById("inputRectanguloA");
  const valueA = Number(inputA.value);

  const inputB = document.getElementById("inputRectanguloB");
  const valueB = Number(inputB.value);

  const perimetro = perimetroRectangulo(valueA, valueB);
  alert("Perímetro: " + perimetro);
}

function calcularAreaRectangulo(){
  const inputA = document.getElementById("inputRectanguloA");
  const valueA = Number(inputA.value);

  const inputB = document.getElementById("inputRectanguloB");
  const valueB = Number(inputB.value);

  const area = areaRectangulo(valueA, valueB);
  alert("Área: " + area);
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
  if (valueA==0, valueB==0, valueC==0) {
    alert("Parece que te faltan datos, es probable que el resultado no sea el esperado."); 
  }
  if(valueB==0, valueC==0){
    alert("Si tu tiángulo es quilatero, el perímetro es: " + valueA*3 + " si es isóseles, llena los demás datos.");
  } else {
    alert("Perímetro: " + perimetro);
  }
}

function calcularAreaTriangulo(){
  const inputA = document.getElementById("inputTrianguloA");
  const valueA = Number(inputA.value);

  const inputC = document.getElementById("inputTrianguloC");
  const valueC = Number(inputC.value);

  const inputD = document.getElementById("inputTrianguloD");
  const valueD = Number(inputD.value);

  const altura1 = alturaTrianguloIsoseles(valueA, valueC);
  const altura2 = alturaTrianguloEquilatero(valueA);
  const area = areaTriangulo(valueC, valueD);
  if(valueD==0){
    alert("Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo isóseles es de: " + altura1 + " y en un triángulo equilatero es de: " + altura2);
  } else {
    alert("Area: " + area);
  }
}

// Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert("Circunferencia: " + perimetro);
}

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert("Área: " + area);
}