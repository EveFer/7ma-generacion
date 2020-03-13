var kodersMatrix = [
  ["Israel", "Salinas Martínez", "5543788096", "27-09-1989"],
  ["David", "Cermeño Moranchel", "5512312345", "14-11-1995"]
];
// getShortenedData => DCM-ddmmaa
// output "DCM-141195"

function KoderK(name, lastName, phone, dateBirth) {
  this.name = name,
  this.lastName = lastName,
  this.phone = phone,
  this.dateBirth = dateBirth;
}

const createObjects = array => {
  let kodersCollection = [];
  array.forEach(koder => {
    let dataKoder = new KoderK(...koder);
    kodersCollection.push(dataKoder);
  });
  return kodersCollection;
};

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
  let avg = (this.scoreHtml + this.scoreCss + this.scoreJs) / 3;
  return avg;
};

function Koder(name, lastName, scoreHtml, scoreCss, scoreJs) {
  this.name = name,
  this.lastName = lastName,
  this.scoreHtml = scoreHtml,
  this.scoreCss = scoreCss,
  this.scoreJs = scoreJs,
  this.getAverage = getAverage;
}

const createKoders = numKoders => {
  var arrayKoderRegisters = [];
  for (let i = 0; i < numKoders; i++) {
    let name = prompt(`Ingrese el nombre del ${i + 1}º Koder`);
    let lastName = prompt(`Ingrese los apellidos del ${i + 1}º Koder`);
    let scoreHtml = parseInt(
      prompt(`Ingrese la califiacion en HTML del ${i + 1}º Koder`)
    );
    let scoreCss = parseInt(
      prompt(`Ingrese la calificacion en CSS del ${i + 1}º Koder`)
    );
    let scoreJs = parseInt(
      prompt(`Ingrese la calificacion en JS del ${i + 1}º Koder`)
    );
    let koder = new Koder(name, lastName, scoreHtml, scoreCss, scoreJs);
    arrayKoderRegisters.push(koder);
  }
  return arrayKoderRegisters;
};


/*
instrucciones
crear un libro de recetas de botanas, y después crear una botana por cada receta en nuestro libro
*/



// var libroSnack = [
//     [
//         "botana1",
//         "sabor 1",
//         "25gr"
//     ],
//     [
//         "botana2",
//         "sabor 2",
//         "35gr"
//     ]
// ]

var listSnacks = []

function Snack(name, tasty, content) {
    this.name = name,
    this.tasty = tasty,
    this.content = content,
    this.slogan = function () {
        alert(`Nuestra botana ${this.name} es la más sabrosa!!!`)
    }
}

const createSnacks = (bookSnacks) => {
    bookSnacks.forEach((receta) => {
        let snack = new Snack(...receta);
        listSnacks.push(snack)
    })
    console.log(listSnacks)
}

// createSnacks(libroSnack);


var bookSnack = []

const newSnacks = () => {
    let cantidad = parseInt(prompt('¿Cuantas botanas quieres crear?'));
    let i;
    for(i=0; i < cantidad; i++){
        let nombre = prompt(`Cual es el nombre de la ${i+1}° botana`)
        let sabor = prompt(`Cual es el sabor de la ${i+1}° botana`)
        let contenido = prompt(`Cuanto contiene la botana ${i+1}°`)
        let botana = [nombre, sabor, contenido];
        bookSnack.push(botana)
    }
    createSnacks(bookSnack)
}