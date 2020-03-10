//pedir al usuario la cantidad de koders a registar
//pedir tantos nombres de koder como el usuario haya indicado
//guardar cada nombre de cada koder en una colección
//de cada Koder imprimir únicamente el primer nombre

/*
    1.- Solicitar al usuario por medio de un prompt la cantidad de koders
        desea ingresar y asignarlo a la variable countKoders
    2.- Convertir a entero el valor de countKoder y reasignarlo a countKoder
    3.- Para cada cantidad de koder hasta la countKoders
        3.1 solicitar al usuario por medio del prompt el nombre del koder
        3.2 agregarlo al array koders
        3.3 Obtener el primer nombre e imprimirlo con console
*/
var countKoders;
var koders = [];

countKoders = prompt('¿Cuantos koders desea agregar?');
countKoders = parseInt(countKoders);

var i;
for (i = 0; i < countKoders; i++) {
    var koder;
    koder = prompt(`¿Cual es el nombre del koder num ${i+1}`);
    koders.push(koder);
}

koders.forEach((koder, index) => {
    var firstName;
    firstName = koder.split(" ", 1);
    console.log(`El nombre del Koder ${index + 1} es: ${firstName[0]}`);
})