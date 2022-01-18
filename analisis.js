// obtenemos un array con solo los salarios
const salariosCol = colombia.map(
   function(persona) {
      return persona.salary;
   }
);

console.log(salariosCol);

// Ordenamos el array
const salariosColSort = salariosCol.sort(
   function(salaryA, salaryB) {
      return salaryA - salaryB;
   }
);

console.log(salariosColSort);

// calcular la mediana
function esPar(numero) {
   return (numero % 2 === 0);
}

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
      console.log(mediana);

   } else {
      //es IMPAR
      const personaMitad = lista[mitad];
      return personaMitad;
   }
}