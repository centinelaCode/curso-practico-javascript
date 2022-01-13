/* ==================================
   Codigo Cuadrado
 ====================================*/
console.group('Cuadrado');

   // const ladoCuadrado = 5;
   // console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm");

   function perimetroCuadrado(lado) {
      return lado * 4;
   }
   // console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + "cm");

   function areaCuadrado(lado) {
      return lado * lado;
   }
   // console.log('El área del cuadrado es: ' + areaCuadrado + "cm^2");

console.groupEnd();


 /* ==================================
   Codigo Trangulo
 ====================================*/
console.group('Triangulo');

   // const ladoTriangulo1 = 6;
   // const ladoTriangulo2 = 6;
   // const BaseTriangulo = 4;
   // const AlturaTriangulo = 5.5;
   // console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + BaseTriangulo + "cm");
   // console.log('La altura del triángulo es: ' + AlturaTriangulo);
 
   function perimetroTriangulo(lado1, lado2, base) {
      return lado1 + lado2 + base;
   }
   // console.log('El perímetro del triángulo es: ' + perimetroTriangulo + "cm");

   function areaTriangulo(base, altura) {
      return (base * altura) / 2;
   }
   // console.log('El área del triángulo es: ' + areaTriangulo + "cm^2");

console.groupEnd();



/* ==================================
   Codigo Circulo
 ====================================*/
 console.group('Circulo');

   // const radioCirculo = 4;
   // const diametroCirculo = radioCirculo * 2;
   const PI = Math.PI;
   // console.log('El radio del circulo es: ' + radioCirculo);
   // console.log('El valor de PI es: ' + PI);
   
   function diametroCirculo(radio) {
      return radio * 2;
   }
   // console.log('El perímetro del circulo es: ' + perimetroCirculo + "cm");

   function perimetroCirculo(radio) {
      const diametro = diametroCirculo(radio);
      return diametro * PI;
   }
   // console.log('El área del circulo es: ' + areaCirculo+ "cm^2");


   function areaCirculo(radio) {      
      return (radio * radio) * PI;
   }

 console.groupEnd();




 // Interaccion ocn HTML

const inputLado = document.getElementById("inputCuadrado");

const inputLado1 = document.getElementById("inputTriangulolado1");
const inputLado2 = document.getElementById("inputTriangulolado2");
const inputBase = document.getElementById("inputTrianguloBase");
const inputAltura = document.getElementById("inputTrianguloAltura");

const inputRadio = document.getElementById("inputCirculoRadio");




 // Cuadrado
 function calcularPerimetroCuadrado() {
   
   const value = inputLado.value;
   const perimetro = perimetroCuadrado(value);
   alert(`El perímetro del Cuadrado es de ${perimetro}cm`);
 }

 function calcularAreaCuadrado() {
   
   const value = inputLado.value;
   const area = areaCuadrado(value);
   alert(`El área del Cuadrado es de ${area}cm`);
 }

 // Triangulo
 function calcularPerimetroTriangulo() {   
   const valueLado1 = Number(inputLado1.value);
   const valueLado2 = Number(inputLado2.value);
   const valueBase = Number(inputBase.value);
   
   // console.log(valueLado1, valueLado2, valueBase, valueAltura);
   const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
   alert(`El perímetro del Triangulo es de ${perimetro}cm`);
 }

 function calcularAreaTriangulo() {
   const valueBase = Number(inputBase.value);
   console.log(valueBase);
   const valueAltura = Number(inputAltura.value);   

   // console.log(valueLado1, valueLado2, valueBase, valueAltura);
   const area = areaTriangulo(valueBase, valueAltura);
   alert(`El área del Triangulo es de ${area}cm`);
 }


 // Circulo
 function calcularPerimetroCirculo() {
   
   const value = inputRadio.value;
   const perimetro = perimetroCirculo(value);
   alert(`El perímetro del Circulo es de ${perimetro}cm`);
 }

 function calcularAreaCirculo() {
   
   const value = inputRadio.value;
   const area = areaCirculo(value);
   alert(`El área del Circulo es de ${area}cm`);
 }