// ...........Interacción con HTML...........//
const list = document.querySelector("#inputStatistics");
const resultAverage = document.querySelector("#resultAverage");
const resultMedian = document.querySelector("#resultMedian");
const resultModa = document.querySelector("#resultModa");

// P R O M E D I O | M E D I A - A R I T M E T I C A 
console.group("Promedio");
const calculateAverage = (iterable) => {
  let array = iterable.split(", ");
  console.log(array)
  let suma_elementos = array.reduce((elemento1, elemento2) => Number(elemento1) + Number(elemento2))
  return promedio = suma_elementos / array.length;

}

function getAverage(){
  let average_value = list.value;
  let result = calculateAverage(average_value);
  resultAverage.innerHTML = `Promedio: ${result.toFixed(3)}`;
  resultAverage.classList.add('show');
}
console.groupEnd();


// M E D I A N A  
console.group("Mediana");
  function calculateMedian(iterable){
    let array = iterable.split(", ");
    console.log(array)
    let orderList = array.sort((a, b) => a - b);
    console.log(orderList)
    let middleList = parseInt(orderList.length / 2);
    let mediana; 

    if(orderList.length % 2 == 0){
        let elemento = orderList[middleList];
        let elemento2 = orderList[middleList - 1];
        mediana = (Number(elemento) + Number(elemento2)) / 2;
    }
    else {
        mediana = orderList[middleList];
    }
    return mediana;
  }

  function getMedian(){
    let median_value = list.value;
    let result = calculateMedian(median_value);
    resultMedian.innerHTML = `Mediana: ${result}`;
    resultMedian.classList.add('show');
}
console.groupEnd();


// M O D A 
console.group("Moda");
const repeticion_numeros = {};

const calculateModa = (iterable) => {
  let array = iterable.split(", ")
  let count_elements = array.map(elemento => {
      if(repeticion_numeros[elemento]){
          repeticion_numeros[elemento] += 1;
      } 
      else {
          repeticion_numeros[elemento] = 1
      }
  }) 
  count_elements = Object.entries(repeticion_numeros);
  console.log(count_elements)
  let menorAmayor = count_elements.sort((a, b) => a[1] - b[1])
  const modas = [];
  for(let i = 0; i < menorAmayor.length; i++){
      if(menorAmayor[i][1] == menorAmayor[menorAmayor.length - 1][1]){
          modas.push(menorAmayor[i])
      }
  }
  return modas
} 

function getModa(){
  let moda_value = list.value;
  let result = calculateModa(moda_value);
  if(result.length > 1) {
      for(let i = 0; i < result.length; i++){
        resultModa.innerHTML =`La Moda es ${result[i][0]} y se repite ${result[i][1]} veces.`;
        resultModa.classList.add('show');
      }
  } else {
    resultModa.innerHTML = `La Moda es ${result[0][0]} se repite ${result[0][1]} veces.`
    resultModa.classList.add('show');
  }
  // if(result === 1){
  //   resultModa.innerHTML = `Ningún dato se repite, no hay "Moda" aquí.`
  //   resultModa.classList.add('show');
  // }
}
console.groupEnd();