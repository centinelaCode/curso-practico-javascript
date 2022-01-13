
const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
   const porcentajePrecioConDescuento = 100 -descuento;
   const precionConDescuento = (precio * porcentajePrecioConDescuento) / 100;
   return precionConDescuento;
}



// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioOriginal
// })