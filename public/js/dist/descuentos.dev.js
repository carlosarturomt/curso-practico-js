"use strict";

// const precioOriginal = 120;
// const descuento = 18;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
// objeto = console.log({ variable1, variable2, variable3...})
// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento
// });
function calcularPrecioConDescuento(precio, descuento) {
  var porcentajePrecioConDescuento = 100 - descuento;
  var precioConDescuento = precio * porcentajePrecioConDescuento / 100;
  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  var inputPrice = document.getElementById("inputPrice");
  var priceValue = inputPrice.value;
  var inputDiscount = document.getElementById("inputDiscount");
  var discountValue = inputDiscount.value;
  var precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  var resultPrice = document.getElementById("resultPrice");
  resultPrice.innerText = "El precio con descuento es de $" + precioConDescuento;
}