const lista1 = [8,0,-5,2,1,7];
console.log(lista1, 'Lista Original');

function ordenarArray(lista) {
   // const listaOrdenada = [];
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
   return lista;
}

const listaOrdenada = ordenarArray(lista1);
// console.log(listaOrdenada);

const mitadLista = lista1.length / 2;
// console.log(mitadLista, 'mitad lista')
const mitadRedondeada = Math.round(mitadLista) ;
// console.log(mitadRedondeada, 'mitad redondeada');


console.log(listaOrdenada, 'Lista Ordenada');

let medina;
if ( lista1.length % 2 === 0 ) {
   // longitud del array par
   // console.log(listaOrdenada[mitadLista]);
   // console.log(listaOrdenada[mitadLista + 1]);
   const mediana = (listaOrdenada[mitadLista - 1] + listaOrdenada[mitadLista]) / 2;
   console.log(mediana, 'Mediana');
} else {
   // longitud del array impar
   const mediana = listaOrdenada[mitadRedondeada - 1];
   console.log(mediana);
}