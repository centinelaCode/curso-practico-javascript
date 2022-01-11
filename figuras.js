/* ==================================
   Codigo Cuadrado
 ====================================*/
console.group('Cuadrado');

   const ladoCuadrado = 5;
   console.log('Los lados del cuadrado miden: ' + ladoCuadrado + "cm");

   const perimetroCuadrado = ladoCuadrado * 4;
   console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + "cm");

   const areaCuadrado = ladoCuadrado * ladoCuadrado;
   console.log('El área del cuadrado es: ' + areaCuadrado + "cm^2");

console.groupEnd();


 /* ==================================
   Codigo Trangulo
 ====================================*/
console.group('Triangulo');

   const ladoTriangulo1 = 6;
   const ladoTriangulo2 = 6;
   const BaseTriangulo = 4;
   const AlturaTriangulo = 5.5;
   console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + BaseTriangulo + "cm");
   console.log('La altura del triángulo es: ' + AlturaTriangulo);
 
   const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + BaseTriangulo;
   console.log('El perímetro del triángulo es: ' + perimetroTriangulo + "cm");

   const areaTriangulo = (BaseTriangulo * AlturaTriangulo) / 2;
   console.log('El área del triángulo es: ' + areaTriangulo + "cm^2");

console.groupEnd();



/* ==================================
   Codigo Circulo
 ====================================*/
 console.group('Circulo');

   const radioCirculo = 4;
   const diametroCirculo = radioCirculo * 2;
   const PI = Math.PI;
   console.log('El radio del circulo es: ' + radioCirculo);
   console.log('El valor de PI es: ' + PI);
   
   const perimetroCirculo = diametroCirculo * PI;
   console.log('El perímetro del circulo es: ' + perimetroCirculo + "cm");

   const areaCirculo = radioCirculo * radioCirculo * PI;
   console.log('El área del circulo es: ' + areaCirculo+ "cm^2");

 console.groupEnd();