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