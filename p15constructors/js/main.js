var kodersMatrix = [
    [
        "Israel",
        "Salinas Martínez",
        "5543788096",
        "27-09-1989"
    ],
    [
        "David",
        "Cermeño Moranchel",
        "5512312345",
        "14-11-1995"
    ]
]
// getShortenedData => DCM-ddmmaa
// output "DCM-141195"

const createObject = (name, lastName, phone, dateBirth) => {
    let obj = {
        name,
        lastName,
        phone,
        dateBirth
    }
    return obj;
}


const createObjects = (array) => {
    array.forEach(() => {

    });
}

/**Function construtora */

// function Koder(name, lastName, birthDate, phone) {
//     this.name = name;
//     this.lastName = lastName;
//     this.birthDate = birthDate;
//     this.phone = phone
// }
// var koder1 = new Koder("Fernanda", "Palacios", "24-06-1996", "3245674246")


// PRACTICE 
//pedir al usuario la cantidad de koders a registrar
//por cada koder, pedir nombre, apellidos, calificación en html, calificación en css, calificación en js,
//generar un objeto del tipo Koder por cada koder registrado
//guardarlo en una colección que se llame KodersList
//pt2:
//agregar a nuestro constructor un método que permita obtener el promedio del koder

const getAverage = function() {
    let avg = (this.scoreHtml + this.scoreCss + this.scoreJs)/3
    return avg
}

function Koder(name, lastName, scoreHtml, scoreCss, scoreJs) {
    this.name = name,
    this.lastName = lastName,
    this.scoreHtml = scoreHtml,
    this.scoreCss = scoreCss,
    this.scoreJs = scoreJs,
    this.getAverage = getAverage
} 


const createKoders = (numKoders) => {
    var arrayKoderRegisters = []
    for (let i=0; i < numKoders; i++) {
        let name = prompt(`Ingrese el nombre del ${i+1}º Koder`);
        let lastName = prompt(`Ingrese los apellidos del ${i+1}º Koder`);
        let scoreHtml = parseInt(prompt(`Ingrese la califiacion en HTML del ${i+1}º Koder`));
        let scoreCss = parseInt(prompt(`Ingrese la calificacion en CSS del ${i+1}º Koder`));
        let scoreJs = parseInt(prompt(`Ingrese la calificacion en JS del ${i+1}º Koder`));
        let koder = new Koder(name, lastName, scoreHtml, scoreCss, scoreJs);
        arrayKoderRegisters.push(koder);
    }
    return arrayKoderRegisters;
}
