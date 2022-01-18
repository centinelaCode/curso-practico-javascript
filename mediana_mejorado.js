
function calculaMediana(lista) {
   console.log(lista, 'Sin Ordenar');

   // ordenamos la lista
   let temp;
   for (let i = 0; i < lista.length; i++) {      
      for (let j = 0; j < lista.length - 1; j++) {
         if( lista[j] > lista[j+1] ){
            temp = lista[j];
            lista[j] = lista[j+1];
            lista[j+1] = temp
         } // fin if
      } // fin for j
   } // fin for i
   console.log(lista, 'Ordenada');

   // calcular la mitad
   let mitad = parseInt(lista.length / 2);

   // verificamos si la longitud del array es par o impar
   let mediana;
   if ( lista.length % 2 === 0 ) {
      // Es PAR
      let el1 = lista[mitad - 1]; 
      let el2 = lista[mitad]; 
      mediana = (el1 + el2) / 2;
      return mediana;

   } else {
      // Es IMPAR
      console.log(parseInt(mitad), 'mitad')
      let mediana = lista[mitad];
      return mediana;
   }
}


const lista1 = [100,200,150,300,500,400000000];
medianaLista1 = calculaMediana(lista1);
console.log(medianaLista1);
// console.log(lista1, 'Lista Original');

// function ordenarArray(lista) {
//    // const listaOrdenada = [];
//    let temp;
//    for (let i = 0; i < lista.length; i++) {      
//       for (let j = 0; j < lista.length - 1; j++) {
//          if( lista[j] > lista[j+1] ){
//             temp = lista[j];
//             lista[j] = lista[j+1];
//             lista[j+1] = temp
//          } // fin if
//       } // fin for j
//    } // fin for i
//    return lista;
// }

// function esPar(numero) {
//    if( numero % 2 === 0 ){ 
//       return true;
//    } else {
//       return false;
//    }
// }

// function promedio(num1, num2) {
//    return (num1 + num2) / 2;
// }

// const listaOrdenada = ordenarArray(lista1);
// console.log(listaOrdenada);

// const mitad = parseInt(lista1.length / 2);


// console.log(listaOrdenada, 'Lista Ordenada');

// let mediana;
// if ( esPar(lista1.length) ) {
//    // longitud del array par
//    let el1 = listaOrdenada[mitad - 1]; 
//    let el2 = listaOrdenada[mitad]; 
//    console.log(el1,el2);
//    mediana = promedio(el1, el2);
//    console.log(mediana, 'mediana');     
// } else {
//    // longitud del array impar
//    console.log(parseInt(mitad), 'mitad')
//    let mediana = listaOrdenada[mitad];
//    console.log(mediana, 'mediana')
// }