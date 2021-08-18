"use strict";

// ...........Interacción con HTML...........//
var list = document.querySelector("#inputStatistics");
var resultAverage = document.querySelector("#resultAverage");
var resultMedian = document.querySelector("#resultMedian");
var resultModa = document.querySelector("#resultModa"); // P R O M E D I O | M E D I A - A R I T M E T I C A 

console.group("Promedio");

var calculateAverage = function calculateAverage(iterable) {
  var array = iterable.split(", ");
  console.log(array);
  var suma_elementos = array.reduce(function (elemento1, elemento2) {
    return Number(elemento1) + Number(elemento2);
  });
  return promedio = suma_elementos / array.length;
};

function getAverage() {
  var average_value = list.value;
  var result = calculateAverage(average_value);
  resultAverage.innerHTML = "Promedio: ".concat(result.toFixed(3));
  resultAverage.classList.add('show');
}

console.groupEnd(); // M E D I A N A  

console.group("Mediana");

function calculateMedian(iterable) {
  var array = iterable.split(", ");
  console.log(array);
  var orderList = array.sort(function (a, b) {
    return a - b;
  });
  console.log(orderList);
  var middleList = parseInt(orderList.length / 2);
  var mediana;

  if (orderList.length % 2 == 0) {
    var elemento = orderList[middleList];
    var elemento2 = orderList[middleList - 1];
    mediana = (Number(elemento) + Number(elemento2)) / 2;
  } else {
    mediana = orderList[middleList];
  }

  return mediana;
}

function getMedian() {
  var median_value = list.value;
  var result = calculateMedian(median_value);
  resultMedian.innerHTML = "Mediana: ".concat(result);
  resultMedian.classList.add('show');
}

console.groupEnd(); // M O D A 

console.group("Moda");
var repeticion_numeros = {};

var calculateModa = function calculateModa(iterable) {
  var array = iterable.split(", ");
  var count_elements = array.map(function (elemento) {
    if (repeticion_numeros[elemento]) {
      repeticion_numeros[elemento] += 1;
    } else {
      repeticion_numeros[elemento] = 1;
    }
  });
  count_elements = Object.entries(repeticion_numeros);
  console.log(count_elements);
  var menorAmayor = count_elements.sort(function (a, b) {
    return a[1] - b[1];
  });
  var modas = [];

  for (var i = 0; i < menorAmayor.length; i++) {
    if (menorAmayor[i][1] == menorAmayor[menorAmayor.length - 1][1]) {
      modas.push(menorAmayor[i]);
    }
  }

  return modas;
};

function getModa() {
  var moda_value = list.value;
  var result = calculateModa(moda_value);

  if (result.length > 1) {
    for (var i = 0; i < result.length; i++) {
      resultModa.innerHTML = "La Moda es ".concat(result[i][0], " y se repite ").concat(result[i][1], " veces.");
      resultModa.classList.add('show');
    }
  } else {
    resultModa.innerHTML = "La Moda es ".concat(result[0][0], " se repite ").concat(result[0][1], " veces.");
    resultModa.classList.add('show');
  } // if(result === 1){
  //   resultModa.innerHTML = `Ningún dato se repite, no hay "Moda" aquí.`
  //   resultModa.classList.add('show');
  // }

}

console.groupEnd();