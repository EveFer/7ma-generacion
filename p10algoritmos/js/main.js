// Practice # 4
//recibir del usuario los datos de 3 lados de un triangulo
//con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje
//en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno

/*
Algorithm

1.- Declarar la variable side1
2.- Declarar la variable side2
3.- Declarar la variable side3
4.- Declarar la variable areaResult
5.- Declarar una variable semiPerimeter
6.- Lanzar el prompt para solicitar el lado 1 del triangulo y almacenar el valor en la variable side1
7.- Lanzar el prompt para solicitar el lado 2 del triangulo y almacenar el valor en la variable side2
8.- Lanzar el prompt para solicitar el lado 3 del triangulo y almacenar el valor en la variable side3
9.- Reasignar en la variable side1 la conversion de string a entero de la variable side1 que devuelve la funcion parseInt()
10.- Reasignar en la variable side2 la conversion de string a entero de la variable side1 que devuelve la funcion parseInt()
11.- Reasignar en la variable side3 la conversion de string a entero de la variable side1 que devuelve la funcion parseInt()
12.- Asignar el resultado de la operation (side1 + side2 + side3)/2 en la variable semiPerimeter
13.- Asignar el resultado de la operacion  sqrt(semiPerimeter(semiPerimeter - side1)(semiPerimeter - side2)(semiPerimeter - side3)) en la variable areaResult
14.- Imprimir el mensaje con el resultado del area "El area del triangulo cuyos lados son side1: ${side1} side2: ${side2} side3: ${side3} es igual a ${areaResult}
15.- Si side1 es igual a side2 y side3
16.- Entonces imprimir el mensaje "El triangulo es equilatero"
17.- De lo conrario si side1 es igual a side2 y diferente a side3
18.- Entonces imprimir el mensaje "El triangulo es isosceles"
19.- De lo contrario imprimir el mensaje "El triangulo es escaleno".

Practice #5

una vez lograda la practica 4, determinar si el triángulo es un triángulo rectángulo
 
.- Declarar la variable angle1
.- Declarar la variable angle2
.- Declarar la variable angle3
.- Calcular el angulo1 con la operacion arccos((angle2**2 + angle3**2 - angle1**2)/(2(angle2*angle3))) y asignarlo a la variable angle1
.- calculcar el angulo2 con la operacion arccos((angle1**2 + angle3**2 - angle2**2)/(2(angle1*angle3))) y asignarlo a la variable angle2
.- calculcar el angulo3 con la operacion 180 - (angle1 + angle2) y asignarlo a la variable angle3
.- Si angle1 o angle2 o angle3 es igual a 90
.- Entonces imprimir el mensaje "El triangulo es un triangulo rectangulo por que uno de sus angulo es igual a 90º"
.- De lo contrario imprimit "El triangulo no es un triangulo rectangulo."

 */

var side1;
var side2;
var side3;
var areaResult;
var semiPerimeter;

side1 = prompt('Ingrese el lado 1 del triangulo');
side2 = prompt('Ingrese el lado 2 del triangulo');
side3 = prompt('Ingrese el lado 3 del triangulo');

side1 = parseInt(side1);
side2 = parseInt(side2);
side3 = parseInt(side3);

semiPerimeter = (side1 + side2 + side3)/2;

areaResult = (semiPerimeter)*((semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3));
areaResult = Math.sqrt(areaResult);

console.log(`El area del triangulo cuyos lados son side1: ${side1} side2: ${side2} side3: ${side3} es igual a ${areaResult}`);

if(side1 === side2 && side1 === side3) {
    console.log('El triangulo es EQUILATERO por que todos sus lados son iguales');
}else if (side1 === side2 && side1 !== side3) {
    console.log('El triangulo es ISOSCELES por que dos de sus lados son iguales');
}else {
    console.log('El triangulo es ESCALENO por que sus tres lados son diferentes');
}


var angle1;
var angle2;
var angle3;

angle1 = Math.acos((angle2**2 + angle3**2 - angle1**2)/(2*(angle2*angle3)));
angle2 = Math.acos((angle1**2 + angle3**2 - angle2**2)/(2*(angle1*angle3)))
angle3 = 180 - (angle1 + angle2);

if (angle1 === 90 || angle2 === 90 || angle3 === 90) {
    console.log('El triangulo ES un triangulo rectangulo por que uno de sus angulo es igual a 90º');
} else {
    console.log('El triangulo No es un triangulo rectangulo.');
}



