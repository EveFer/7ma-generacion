// Tener los valores de x y x, y compararlos
// Si x es mayor que y, mostrar un mensaje que lo indique
// si x es menor que y, mostar un mensaje que lo indique

// Algoritmo
// Declarar los valores de x y y (Var)
// preguntar si x es mayor que y (comparation operators)
// obtener la respuesta de la comparacion (conditional operators)
// si x es mayor que y, mostrar el mensaje "x es mayor de y" (console methods)
// si x no es mayor que y, mostrar el mensaje "x es menor que y" (console methods)

/*
    if (condition){
        si algo se cumple
    }else if (condition){
        si lo anterior no se cumple, pero esto si
    }else {
        si nada de lo anterior se cumple
    }

    OPERADOR TERNARIO

    condition ? case:true : case:false
     PALABRA RESERVADA - PARA ACTIVAR EL DEBUGGER DE JAVASCRIPT
    debugger;

   --- `` --- acento agudo
*/
// debugger;

// var x = 9;
// var y = 12;

// if (x > y) {
//     // string interpolation
//     console.log(`${x} es mayor que ${y}`);
// } else if (x < y) {
//     console.log(`${x} es menor que ${y}`);
// } else {
//     console.log(`${x} es igual que ${y}`);
// }

// ejercio 2
// multiplicar 2 valores y verificar si el resultado de la multiplicacion es par o non
// si es par, indicarlo con un mensaje
// se es non, indicarlo con un mensaje

/*
1.- Declarar y asignar valores las variables num1 y num2
2.- Declarar la varriable productResult
3.- Realizar la multiplicacion de las variables num1 y num2 y asignarlo a la variable productResult
4.- Preguntar si el residuo de la division del resultado / 2 es igual a cero
5.- Si es igual a cero
6.- imprimir el mensaje "El resultado es un numero par"
7.- Si el residuo del resultado no es cero
8.- Imprimir "El resultado es non"
*/

// var num1 = 11;
// var num2 = 22;
// var productResult;

// productResult = num1 * num2;

// var productModulus;
// productModulus = productResult % 2;

// console.log(`El producto de ${num1} y ${num2} = ${productResult}`);

// if (productModulus === 0) {
//   console.log(`${productResult} es PAR`);
// } else {
//   console.log(`${productResult} es NON`);
// }

// Ejercicio 3
// Recibir un numero del parte de un usuario y calcular
// el area de un circulo cuyo radio sea igualal numero proporcionado


/*
ALGORITMO

1.- Declarar una viriable valueUser 
2.- Declarar la variable radio
3.- Asignar el valor que ingresa el usuario por medio de metodo prompt() en la varible valueUser
4.- Convertir valueUser a un valor entero con el metodo parseInt() y asignarlo en la variable radio
5.- Declaramos la variable resultArea
6.- Declarar una constante PI con el valor 3.1416
7.- Asignamos el resultado de la operacion PI * radio^2 a la variable resultArea
8.- Imprimos la variable resultArea.
*/

var valueUser;
var radio;

valueUser = prompt('Ingrese un numero');

radio = parseInt(valueUser)

var resultArea;
const PI = 3.1416

resultArea = PI * (radio * radio);

console.log(`El resultado del area del circulo con radio ${radio} es igual a ${resultArea}`)