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

  const resultCuadrado = document.getElementById("resultCuadrado");
  resultCuadrado.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
  resultCuadrado.classList.add('show');
  // alert("Perímetro: " + perimetro + valor);
}

function calcularAreaCuadrado(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  var indice = document.formulCuadrado.unidadesCuadrado.selectedIndex;
  var valor = document.formulCuadrado.unidadesCuadrado.options[indice].value;

  const area = areaCuadrado(value, valor);
  
  const resultCuadrado = document.getElementById("resultCuadrado");
  resultCuadrado.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultCuadrado.classList.add('show');
  // alert("Área: " + area + valor + "²");
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

  const resultRectangulo = document.getElementById("resultRectangulo");
  resultRectangulo.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
  resultRectangulo.classList.add('show');
  // alert("Perímetro: " + perimetro + valor);
}

function calcularAreaRectangulo(){
  const inputA = document.getElementById("inputRectanguloA");
  const valueA = Number(inputA.value);
  const inputB = document.getElementById("inputRectanguloB");
  const valueB = Number(inputB.value);

  var indice = document.formulRectangulo.unidadesRectangulo.selectedIndex;
  var valor = document.formulRectangulo.unidadesRectangulo.options[indice].value;

  const area = areaRectangulo(valueA, valueB, valor);

  const resultRectangulo = document.getElementById("resultRectangulo");
  resultRectangulo.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultRectangulo.classList.add('show');
  // alert("Área: " + area + valor + "²");
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

  const resultTriangulo = document.getElementById("resultTriangulo");
  resultTriangulo.classList.add('show');
  // if (valueA==0, valueB==0, valueC==0) {
  //   alert("Parece que te faltan datos, es probable que el resultado no sea el esperado."); 
  // }
  if(valueB==0, valueC==0){
    resultTriangulo.innerText = "Si tu triángulo es equilatero, el perímetro es: " + valueA*3 + valor + " si es isóseles, llena los demás datos.";
  } else {
    resultTriangulo.innerText = "Perímetro: " + perimetro.toFixed(3) + valor;
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

  const resultTriangulo = document.getElementById("resultTriangulo");
  resultTriangulo.classList.add('show');

  if(valueD==0){
    resultTriangulo.innerText = "Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo isóseles es de: " + altura1.toFixed(3) + valor + " y en un triángulo equilatero es de: " + altura2.toFixed(3) + valor;
  } else {
    resultTriangulo.innerText = "Area: " + area.toFixed(3) + valor + "²";
  }
  if(valueC==0){
    resultTriangulo.innerText = "Para calcular el ÁREA, necesitas la ALTURA, ésta en un triángulo equilatero es de: " + altura2.toFixed(3) + valor + " y para un triángulo isóseles necesitas tener la BASE";
  } 
}

// Circulo
function calcularPerimetroCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;

  const perimetro = perimetroCirculo(value, valor);

  const resultCirculo = document.getElementById("resultCirculo");
  resultCirculo.innerText = "Circunferencia: " + perimetro.toFixed(3) + valor;
  resultCirculo.classList.add('show');
  // alert("Circunferencia: " + perimetro.toFixed(3) + valor);
}

function calcularAreaCirculo(){
  const input = document.getElementById("inputCirculo");
  const value = input.value;

  var indice = document.formulCirculo.unidadesCirculo.selectedIndex;
  var valor = document.formulCirculo.unidadesCirculo.options[indice].value;

  const area = areaCirculo(value);

  const resultCirculo = document.getElementById("resultCirculo");
  resultCirculo.innerText = "Área: " + area.toFixed(3) + valor + "²";
  resultCirculo.classList.add('show');
  // alert("Área: " + area.toFixed(3) + valor + "²");
}