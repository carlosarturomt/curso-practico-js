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

  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;

  const perimetro = perimetroCuadrado(value, valor);
  alert("Perímetro: " + perimetro + valor);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;

  const area = areaCuadrado(value, valor);
  alert("Área: " + area + valor + "²");
}

// Rectángulo
function calcularPerimetroRectangulo(){
  const inputA = document.getElementById("inputRectanguloA");
  const valueA = Number(inputA.value);
  const inputB = document.getElementById("inputRectanguloB");
  const valueB = Number(inputB.value);

  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;

  const perimetro = perimetroRectangulo(valueA, valueB, valor);
  alert("Perímetro: " + perimetro + valor);
}

function calcularAreaRectangulo(){
  const inputA = document.getElementById("inputRectanguloA");
  const valueA = Number(inputA.value);
  const inputB = document.getElementById("inputRectanguloB");
  const valueB = Number(inputB.value);

  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;

  const area = areaRectangulo(valueA, valueB, valor);
  alert("Área: " + area + valor + "²");
}

// Triángulo
function calcularPerimetroTriangulo(){
  const inputA = document.getElementById("inputTrianguloA");
  const valueA = Number(inputA.value);
  const inputB = document.getElementById("inputTrianguloB");
  const valueB = Number(inputB.value);
  const inputC = document.getElementById("inputTrianguloC");
  const valueC = Number(inputC.value);
  
  var indice = document.formulTriangulo.unidadesTriangulo.selectedIndex;
  var valor = document.formulTriangulo.unidadesTriangulo.options[indice].value;

  const perimetro = perimetroTriangulo(valueA, valueB, valueC, valor);
  if (valueA==0, valueB==0, valueC==0) {
    alert("Parece que te faltan datos, es probable que el resultado no sea el esperado."); 
  }
  if(valueB==0, valueC==0){
    alert("Si tu triángulo es quilatero, el perímetro es: " + valueA*3 + valor + " si es isóseles, llena los demás datos.");
  } else {
    alert("Perímetro: " + perimetro + valor);
  }
}

function calcularAreaTriangulo(){
  const inputA = document.getElementById("inputTrianguloA");
  const valueA = Number(inputA.value);
  const inputC = document.getElementById("inputTrianguloC");
  const valueC = Number(inputC.value);
  const inputD = document.getElementById("inputTrianguloD");
  const valueD = Number(inputD.value);

  var indice = document.formulTriangulo.unidadesTriangulo.selectedIndex;
  var valor = document.formulTriangulo.unidadesTriangulo.options[indice].value;

  const altura1 = alturaTrianguloIsoseles(valueA, valueC);
  const altura2 = alturaTrianguloEquilatero(valueA);
  const area = areaTriangulo(valueC, valueD);
  if(valueD==0){
    alert("Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo isóseles es de: " + altura1 + valor + " y en un triángulo equilatero es de: " + altura2 + valor);
  } else {
    alert("Area: " + area + valor + "²");
  }
}

// Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;

  const perimetro = perimetroCirculo(value, valor);
  alert("Circunferencia: " + perimetro + valor);
}

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;

  const area = areaCirculo(value);
  alert("Área: " + area + valor + "²");
}