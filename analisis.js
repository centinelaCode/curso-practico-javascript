// ======= FUNICONES HELPER ========

// obtenemos un array con solo los salarios
const salariosCol = colombia.map(
   function(persona) {
      return persona.salary;
   }
);

console.log(salariosCol);

// calcular la mediana
function esPar(numero) {
   return (numero % 2 === 0);
}

// Ordenamos el array
// Calculo de la Mediana General
const salariosColSort = salariosCol.sort(
   function(salaryA, salaryB) {
      return salaryA - salaryB;
   }
);

console.log(salariosColSort);



function calcularMediaAritmetica(lista) {
   const sumaLista = lista.reduce(
      function(valorAcumulado = 0, nuevoElemento) {
         return valorAcumulado + nuevoElemento;
      }
   );

   const promedioLista = sumaLista / lista.length; 
   return promedioLista;
}

// calcular la mediana general
function medianaSalarios(lista) {
   const mitad = parseInt(lista.length / 2);

   if(esPar(lista.length)) {
      // es PAR
      const personaMitad1 = lista[mitad - 1];
      const personaMitad2 = lista[mitad];

      const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
      return mediana;

   } else {
      //es IMPAR
      const personaMitad = lista[mitad];
      return personaMitad;
   }
}

const medianaGenalCol = medianaSalarios(salariosColSort);

// Mediana del Top 10%  salariosColSort
const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10];
const ejemplo = arrayEjemplo.splice(5,2);
console.log(ejemplo);

// (P * (100 - %)) / 100
const spliceStart = (salariosColSort.length * (100 - 10)) / 100;
// console.log(spliceStart);
const spliceCount = salariosColSort.length - spliceStart;
// console.log(spliceCount);
const salariosColTop10 = salariosColSort.splice(spliceStart, spliceCount);
console.log(salariosColTop10);

const medianaTop10Col = medianaSalarios(salariosColTop10);



console.log(
   medianaGenalCol,
   medianaTop10Col
);
