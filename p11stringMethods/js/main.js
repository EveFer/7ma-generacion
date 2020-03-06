// String Methods

// Practice 1
// Obtener el nombre completo del usuario e 
// indicarle cuantos caracteres tiene su nombre

/*
    1.- mediante un promt que solicite al usuario ingresar su nombre, asignamos
        el nombre del usuario a la variable nameUser
    4.- Eliminar los espacios entre cada palabra con la funcion trim() y reasignarlo a la variable nameUser
    5.- Aplicar el metodo length a la variable nameUser y asignarlo a la variable lengthName
    6.- Mostrar el mensaje "Los caracteres totales de tu nombre son: ${lengthName}"
*/

// var nameUser;
// var lengthName;

// nameUser = prompt('Ingresa tu nombre completo')
// nameUser = nameUser.replace(/ /g, "")
// console.log(nameUser)

// lengthName = nameUser.length

// console.log(`Los caracteres totales de tu nombre son: ${lengthName}`)

// Practice 2
//obtener el nombre completo del usuario
//Contar cuántos caracteres tiene
//si su nombre tiene menos de 15 caracteres, indicarle mediante un mensaje que su nombre es mmuy corto
//si tiene más de 15 caracteres indicarle que su nombre es muy largo

/*
    1.- Teniendo lo anterior
    6.- Si lengthName > 15 
    7.- Entonces Imprimir el mensaje "Su nombre es muy largo"
    8.- De lo contrario imprimit "Su nombre es muy corto"
*/

// if (lengthName > 15) {
//     console.log('EL nombre es muy largo')
// } else if (lengthName < 15) {
//     console.log('El nombre es muy corto')
// } else {
//     console.log('Tu nombre Es igual a 15')
// }


// Practice 3
//obtener el nombre completo del usuario
//contar cuántas vocales tiene

//Algoritmo
/*
1.- Teniendo lo anterior
2.- Declarar las variables vowels y lengthVowels
3.- Asignar a la variable vowels las vocales que tiene la variable nameUser
4.- Asignar en la varible lengthVowels la longitud de las vocales
5.- Imprimir un mensaje con la longitud de las variables
*/

// var vowels;
// var lengthVowels;

// vowels = nameUser.match(/[aeiou]/gi);

// console.log('Vowels, ', vowels);

// lengthVowels = vowels.length;

// console.log(`Tu nombre tiene ${lengthVowels} vocales`);



/*
Recibir una palabra del usuario, y formar una nueva palabra usando las dos primeras y las dos últimas
letras de esa palabra. Si la palabra tiene menos de 5 caracteres, enviar un mensaje de error al usuario indicándoselo

*/

// var word;
// var towCharStart;
// var towCharEnd;
// var newWord;
// word = prompt('Ingrese una palabra');

// if (word.length > 5) {
//     towCharStart = word.substring(0, 2);
//     console.log('tow1: ', towCharStart)
//     towCharEnd = word.substring(word.length - 2, word.length);
//     console.log('tow2: ', towCharEnd)
//     newWord = `${towCharStart}${towCharEnd}`
//     console.log(`La nueva Palabra es: ${newWord}`)
// } else {
//     console.error('La palabra tiene menos de 5 caracteres por favor introduzca una con mayor a 5 caracteres')
// }


/*
pedir al usuario nombre y edad, y mostar un mensaje que diga "hola, soy {nombre} y tengo {edad} años"
*/

// var name;
// var age;

// name = prompt('¿Cual es tu nombre?');
// age = prompt('¿Cual es tu edad?');

// console.log(`hola, soy ${name} y tengo ${age} años`)

/*
Del texto "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias por la palabra "Koder", y mostrar el mensaje de nuevo al usuario

*/

var paragraph = 'Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado';
var newParagraph;
var countWord;

countWord = paragraph.match(/estudiante/g).length

newParagraph = paragraph.replace(/estudiante/g, 'Koder')

console.log('La longitud total del string: ', countWord);

console.log(newParagraph);