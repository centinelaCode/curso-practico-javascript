const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const lista1Count = {};

// convertimos un objeto con el conteo par acada numero
lista1.map(
   function (elemento) {
      if (lista1Count[elemento]){
         lista1Count[elemento] += 1;
      } else {
         lista1Count[elemento] = 1;
      }
   }
);

 console.log(Object.entries(lista1Count));

// ahora convertimos nuestro objeto a array
lista1Array = Object.entries(lista1Count).sort(
   function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
   }
)

console.log(lista1Array);
const moda = lista1Array[lista1Array.length - 1];
console.log(moda[0], 'Moda');


// console.log(lista1Array[0]);
// console.log(lista1Array[0][0], lista1Array[0][1]);