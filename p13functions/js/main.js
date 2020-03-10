var bmentorsNames = [
  "Brenda González",
  "Shalem Solis",
  "Jorge Ochoa",
  "Rurick Maqueo",
  "Alex Cruz",
  "Daniel Ortega"
];
var amentorsNames = [
  "Verónica Nemecio",
  "Carolina Gayoso",
  "David Moranchel",
  "Carlos Silva",
  "Michael Villalba",
  "Israel Salinas",
  "Carlos Ramos"
];

var otherVariable = "hola mundo";

/*
    iterar dentro del array,
    por cada item, obtener el nonbre de cada bmentor
    extraer la primer letra de cada palabra del nombre
    concatenar el contenido de cat item con las iniciales  separadas por un punto
    mostrar en consola el resultado

    output = 
*/
// var initials = ""; // ambito global ya que se utiliza en ambas funciones

// const getInitials = word => (initials += word.charAt(0) + ". ");

// bmentorsNames.forEach(name => {
//   let arrayName = name.split(" ");
//   arrayName.forEach(getInitials);
//   console.log(`${name} ${initials}`);
//   initials = "";
// });

// const printNamesInitials = arrayNames => {
//   arrayNames.forEach(name => {
//     let arrayName = name.split(" ");
//     arrayName.forEach(getInitials);
//     console.log(`${name} ${initials}`);
//     initials = "";
//   });
// };

// const printFullName = (name, lastName) =>
//   console.log(`Tu nombre completo es: ${name} ${lastName}`);

// ejercicios
/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado

    aotput: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"

    Algoritmo
    1.- Solicitar al usuario la operación por medio del promt y almacenarlo en la variable
        result
    2.- 
*/

var numbersArray = [];

const addition = (num1, num2) => num1 + num2;

const substration = (num1, num2) => num1 - num2;

const product = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;

const choiceOperation = () => {
  let operation = prompt(
    "Elige el número de la operacion deseada: 1) suma 2) resta 3) producto 4) division"
  );

  for (let i = 0; i < 2; i++) {
    let number = prompt(`¿Cual es el valor del numero ${i + 1}`);
    number = parseInt(number);
    numbersArray.push(number);
  }

  switch (operation) {
    case "1":
      addition(numbersArray[0], numbersArray[1]);
      numbersArray = [];
      break;
    case "2":
      subtration(numbersArray[0], numbersArray[1]);
      numbersArray = [];
      break;
    case "3":
      product(numbersArray[0], numbersArray[1]);
      numbersArray = [];
      break;
    case "4":
      division(numbersArray[0], numbersArray[1]);
      numbersArray = [];
      break;
    default:
      console.log("No has elegido una operacion");
  }
};

// Lo esperado

const operacionSelect = (operation, num1, num2) => {
  let result;
  switch (operation) {
    case "suma":
      result = addition(num1, num2);
      break;
    case "resta":
      result = substration(num1, num2);
      break;
    case "multiplicacion":
      result = product(num1, num2);
      break;
    case "division":
      result = division(num1, num2);
      break;
    default:
      alert("Esta operación no es valida por ahora :D");
      break;
  }
  console.log(
    `El resultado de la operacion ${operation} de los numeros es ${result}`
  );
};

/*función que me permita ingresar el nombre de un array, 
y contar cuántos items tiene, si el array no existe, 
debe enviar un prompt que diga "tu array no existe"*/

const lengthArray = array => {
  if (Array.isArray(array)) {
    let length = array.length;
    console.log(`La longitud del array es ${length}`);
  } else {
    alert("El array no existe, o no es de tipo array D:");
  }
};

/*función que reciba un array, e imprima los elementos de ese array 
en orden alfábetico y con la primer palabra en uppercase */

const sortArray = array => {
  let string = "";
  let sortedArray = array.sort();
  sortedArray.forEach(item => {
    let words = item.split(" ");
    string = `${words[0].toUpperCase()} ${words[1]}`;
    console.log(string);
  });
};

/* función que reciba un array, un número, y debe de imprimir 
cada uno de los items del array con los caracteres limitados al número ingresado */

const sliceArray = (array, number) => {
  array.forEach(item => {
    newString = item.slice(0, number);
    console.log(newString);
  });
};

/*función que reciba una cantidad (número), este número será la cantidad de veces 
que se solicite al usuario mediante un prompt algún nombre, todos los nombres se 
deben almacenar en una colección y al finalizar me debe mostrar la lista de nombres, 
con sus respectivas iniciales*/
