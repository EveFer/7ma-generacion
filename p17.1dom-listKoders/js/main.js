var kodersDb = [{
    name: "Eddy Alexander",
    lastName: "Ruiz Álvarez",
    deliveredPractices: 9,
    totalAssistance: 22
}, {
    name: "Iván",
    lastName: "Pedraza Sanchéz",
    deliveredPractices: 12,
    totalAssistance: 25
}, {
    name: "Mauricio",
    lastName: "López Suarez",
    deliveredPractices: 13,
    totalAssistance: 18
}, {
    name: "Xabier Enrique",
    lastName: "Hernández Hernández",
    deliveredPractices: 8,
    totalAssistance: 22
}, {
    name: "Raquel Monserrat",
    lastName: "Cruz Torres",
    deliveredPractices: 15,
    totalAssistance: 19
}, {
    name: "Etnar Uriel",
    lastName: "Sánchez González",
    deliveredPractices: 3,
    totalAssistance: 15
}, {
    name: "Gabriela Elvira",
    lastName: "Camarillo Luna",
    deliveredPractices: 10,
    totalAssistance: 18
}, {
    name: "Ana Marcela",
    lastName: "Casasola López",
    deliveredPractices: 15,
    totalAssistance: 24
}, {
    name: "Evelyn Fernanda",
    lastName: "Palacios Vera",
    deliveredPractices: 8,
    totalAssistance: 18
}, {
    name: "Víctor Octavio",
    lastName: "Torres Jimenez",
    deliveredPractices: 11,
    totalAssistance: 16
}]

/*Teniendo el array kodersDb, realizar las siguientes operaciones:
1.- Obtener a todos los koders cuyas practicas entregadas (deliveredPractices) sea menor a 10
2.- Obtener a todos los koders cuya asistencia (totalAssistance) sea menor a 20
3.- Obtener el promedio general de prácticas entregadas
4.- Obtener el promedio general de asistencias
5.- En el elemento con el id "practices-container" insertar una fila por cada koder obtenido en el paso 1, debería tener la siguiente estructura:

<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{prácticas del koder}</td>
</tr>
6.- En el elemento con el id "assistances-container" insertar una fila por cada koder obtenido en el paso 2, debería tener la siguiente estructura:
<tr>
    <td>{número de koder}</td>
    <td>{nombre completo del koder}</td>
    <td>{asistencias del koder}</td>
</tr>
7.- En el elemento con el id "practices-average", mostrar el promedio general de prácticas entregadas obtenido en el paso 3
8.- En el elemento con el id "assistance-average", mostrar el promedio general de asistencias entregadas obtenido en el paso 4

***Notas***
Recordemos que podemos acceder a alguna propiedad de un objeto y asignar su valor a una variable con la sintaxis:

    var someVar = objeto.propiedad

Podemos crear contenido dinámico insertando variables mediante la sintaxis

    ${someVar}

así que podemos crear un elemento html con contenido dinámico de la siguiente forma:

var someObject = {
    songName = "Lago en el cielo",
    author = "Gustavo Cerati"
}

var mySong = someObject.songName;
var songAuthor = someObject.author;

var someElement = document.createElement("p");
-(con esto obtenemos un elemento <p></p>)

var someText = document.createTextNode(`Mi canción es ${mySong} y el autor es ${songAuthor}`)
-(con esto obtenemos un nodo de texto que dice "Mi canción es Lago en el cielo y el autor es Gustavo Cerati")

y después podemos crear un nodo completo:

someElement.appendChild(someText)
-(con esto obtenemos <p>Mi canción es Lago en el cielo y el autor es Gustavo Cerati</p>)


Happy Hacking!!!
*/

var kodersDeliveredPractices = [];
var kodersTotalAssistance = [];
var avgPractices;
var avgAssistance;

kodersDeliveredPractices = kodersDb.filter(koder=> koder.deliveredPractices < 10);

kodersTotalAssistance = kodersDb.filter(koder => koder.totalAssistance < 20);

console.log(kodersDeliveredPractices);
console.log(kodersTotalAssistance);

avgPractices = kodersDb.reduce((avgPractices, koder)=>{
    avgPractices += koder.deliveredPractices
    return avgPractices
}, 0)

avgPractices = avgPractices / kodersDb.length

console.log('avg_practices: ', avgPractices);

avgAssistance = kodersDb.reduce((avgAssistance, koder)=>{
    avgAssistance += koder.totalAssistance
    return avgAssistance
}, 0)

avgAssistance = avgAssistance / kodersDb.length

console.log('avg_assistence: ', avgAssistance);

/*DOM */



// kodersDeliveredPractices.forEach((koder, index) => {
//     const {name, lastName, deliveredPractices} = koder;
//     let numKoder = document.createTextNode(`${index + 1}`);
//     let fullName = document.createTextNode(`${lastName} ${name}`);
//     let practices = document.createTextNode(`${deliveredPractices}`);
//     let tagTdNum = document.createElement('td');
//     tagTdNum.appendChild(numKoder);
//     let tagTdName = document.createElement('td');
//     tagTdName.appendChild(fullName);
//     let tagTdPractices = document.createElement('td');
//     tagTdPractices.appendChild(practices);
//     let tagTr = document.createElement('tr');
//     tagTr.appendChild(tagTdNum);
//     tagTr.appendChild(tagTdName);
//     tagTr.appendChild(tagTdPractices);
//     let elementPracticesContainer = document.getElementById('practices-container');
//     elementPracticesContainer.appendChild(tagTr);
// });

const printKodersInTable = (arr, elementId, cause) => {
    arr.forEach((koder, index) => {
        let tagTr = document.createElement('tr');
        let tagTdNum = document.createElement('td');
        let tagTdName = document.createElement('td');
        let tagTdPracticesOAssistence = document.createElement('td');
        
        let choice;
        if(cause === 'practices'){
             let {deliveredPractices} = koder;
             choice = `${deliveredPractices}`;
        }else if(cause==="assistances"){
            let {totalAssistance} = koder;
            choice = `${totalAssistance}`;
        }

        let {name, lastName} = koder;
        let numKoder = document.createTextNode(index + 1);
        let fullName = document.createTextNode(`${lastName} ${name}`);
        let practicesOrAssistence = document.createTextNode(`${choice}`);
        
        tagTdNum.appendChild(numKoder);
        tagTdName.appendChild(fullName);
        tagTdPracticesOAssistence.appendChild(practicesOrAssistence);
        
        tagTr.appendChild(tagTdNum);
        tagTr.appendChild(tagTdName);
        tagTr.appendChild(tagTdPracticesOAssistence);
        let elementPracticesContainer = document.getElementById(elementId);
        elementPracticesContainer.appendChild(tagTr);
    });
}

printKodersInTable(kodersDeliveredPractices, "practices-container", "practices");


printKodersInTable(kodersTotalAssistance, "assistances-container", "assistances");



// var elementAvgPractices = document.getElementById('practices-average');
// var elementTextAvgPractices = document.createTextNode(`${avgPractices}`);
// elementAvgPractices.appendChild(elementTextAvgPractices);

const printAvg = (avg, elementId) => {
    let elementAvg = document.getElementById(elementId);
    let elementTextAvg = document.createTextNode(`${avg}`);
    elementAvg.appendChild(elementTextAvg);
}

printAvg(avgPractices, 'practices-average');

printAvg(avgAssistance, 'assistance-average');