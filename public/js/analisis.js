// H E L P E R S | U T I L S
function isPair(number) {
  return (number % 2 === 0);
}

function calculateMedian(list){
  const addList =  list.reduce(
    function (accumulatedValue = 0, newElement) {
      return accumulatedValue + newElement;
    }
  );

  const averageList = addList / list.length;
  return averageList;
}

// C A L C U L A T O R  M E D I A N 
function medianSalary(list) {
  const middle = parseInt(list.length / 2);

  if (isPair(list.length)) {
    const personMiddle1 = list[middle - 1];
    const personMiddle2 = list[middle];

    const median = calculateMedian([personMiddle1, personMiddle2]);
    return median;
  } else {
    const personMiddle = list[middle];
    return personMiddle;
  }
}

// G E N E R A L  M E D I A N 
const salaryMex = mexico.map(
  function (person) {
    return person.salary;
  }
);

const salaryMexSorted = salaryMex.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const generalMedianMex = medianSalary(salaryMexSorted);

// M E D I A N  T O P 10 %
const spliceStart = (salaryMexSorted.length * 90) / 100; 
const spliceCount = salaryMexSorted.length - spliceStart;

const salaryMexTop10 = salaryMexSorted.splice(
  spliceStart,
  spliceCount,
);

const medianMexTop10 = medianSalary(salaryMexTop10);

console.log({
  generalMedianMex,
  medianMexTop10,
});