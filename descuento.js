const inputPrice = document.getElementById("input-precio");
const inputDicount = document.getElementById("input-descuento");
const price = document.getElementById("result-price");

const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
   const porcentajePrecioConDescuento = 100 -descuento;
   const precionConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   return precionConDescuento;
}

function onClickButtonPriceDiscount() {
   const priceValue = inputPrice.value;
   const discountValue = inputDicount.value;

   const des = calcularPrecioConDescuento(priceValue, discountValue);
   // console.log(des);
   
   price.innerText = "El precio con descuento son $" + des;
   // price.innerHTML = "El precio con descuento son $" + des;

}


// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioOriginal
// })