/*
    Pedir al usuario que nos indique la cantidad de koders a registrar
    pedir al usuario el nombre de cada koder a registrar
    crear una lista ordenada mediante javascript para insertar el nombre de cada koder
    crear un list item por cada koder que contenga el nombre del koder en cuestion
    agregar los list items a la lista ordenada
    agregar la lista ordenada al body de mi documento
*/
var koderNames = [];

var kodersQuantity = prompt('¿Cuantos koders quieres registrar');
kodersQuantity = parseInt(kodersQuantity);

for(i=0; i < kodersQuantity; i++){
    let koderName = prompt(`Ingresa el nombre del koder ${i + 1}`)
    koderNames.push(koderName);
    /* koderNames = ["nombre1","nombre2",...,"nombreN"]*/
}
const printKoderNames = () => {
    document.body.getElementsByTagName("ol")[0] ? document.body.getElementsByTagName("ol")[0].remove() : null;
    let myKoders = document.createElement("ol");
    koderNames.forEach( (name) => {
        let koderListItem = document.createElement("li");
        /*<li></li>*/
        let koderName = document.createTextNode(name)
        /*"nombre1"*/
        koderListItem.appendChild(koderName)
        /*koderListItem = <li>nombre1</li>*/
        myKoders.appendChild(koderListItem)
        /*myKoders = <ul><li>nombre1</li></ul>*/
    })
    document.body.appendChild(myKoders)
}
printKoderNames();
const askForKoder = () => {
    let newKoder = prompt("cual es el nombre del nuevo koder?")
    koderNames.push(newKoder)
    printKoderNames();
}