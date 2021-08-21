"use strict";

// H E L P E R S | U T I L S
function isPair(number) {
  return number % 2 === 0;
}

function calculateMedian(list) {
  var addList = list.reduce(function () {
    var accumulatedValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var newElement = arguments.length > 1 ? arguments[1] : undefined;
    return accumulatedValue + newElement;
  });
  var averageList = addList / list.length;
  return averageList;
} // C A L C U L A T O R  M E D I A N 


function medianSalary(list) {
  var middle = parseInt(list.length / 2);

  if (isPair(list.length)) {
    var personMiddle1 = list[middle - 1];
    var personMiddle2 = list[middle];
    var median = calculateMedian([personMiddle1, personMiddle2]);
    return median;
  } else {
    var personMiddle = list[middle];
    return personMiddle;
  }
} // G E N E R A L  M E D I A N 


var salaryMex = mexico.map(function (person) {
  return person.salary;
});
var salaryMexSorted = salaryMex.sort(function (salaryA, salaryB) {
  return salaryA - salaryB;
});
var generalMedianMex = medianSalary(salaryMexSorted); // M E D I A N  T O P 10 %

var spliceStart = salaryMexSorted.length * 90 / 100;
var spliceCount = salaryMexSorted.length - spliceStart;
var salaryMexTop10 = salaryMexSorted.splice(spliceStart, spliceCount);
var medianMexTop10 = medianSalary(salaryMexTop10);
console.log({
  generalMedianMex: generalMedianMex,
  medianMexTop10: medianMexTop10
});