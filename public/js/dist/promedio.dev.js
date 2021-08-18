"use strict";

var lista1 = [100, 200, 300, 500]; // let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++){
//   sumaLista1 = sumaLista1 + lista1[i];
// }
// const promedioLista1= sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++){
  //   sumaLista = sumaLista + lista[i];
  // }
  // .....TAMBIÉN SE PUEDE HACER CON EL MÉTODO .reduce() DE LOS ARRAYS
  var sumaLista = lista.reduce(function () {
    var valorAcumulado = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var nuevoElemento = arguments.length > 1 ? arguments[1] : undefined;
    return valorAcumulado + nuevoElemento;
  });
  var promedioLista = sumaLista / lista.length;
  return promedioLista;
}