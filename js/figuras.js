// ..........Código del Cuadrado..........//
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden; " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es; " + perimetroCuadrado) + "cm";

const areaCuadrada  = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es; " + areaCuadrada + "cm²");
console.groupEnd();


// ...........Código del Triángulo...........//
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(
  "Los lados del triángulo miden; "
  + ladoTriangulo1 + "cm, "
  + ladoTriangulo2 + "cm, "
  + baseTriangulo + "cm"
);

const alturaTriangulo = 5.5 ;
console.log("La altura del triángulo es de ; " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es; " + perimetroTriangulo) + "cm";

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es; " + areaTriangulo + "cm²");

console.groupEnd();


// ...........Código del Círculo...........//
console.group("Círculos");
// Radio
const radioCirculo = 4;
console.log("El radio del círculo es; " + radioCirculo + "cm");

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es; " + diametroCirculo + "cm");

// PI
// const PI = 3.1416;
const PI = Math.PI;
console.log("PI es; " + PI);

// Perímetro/Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del círculo es; " + perimetroCirculo + "cm");

// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es; " + areaCirculo + "cm²");

console.groupEnd();