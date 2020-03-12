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

function Koder(name, lastName, birthDate, phone) {
    this.name = name;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.phone = phone
}
var koder1 = new Koder("Fernanda", "Palacios", "24-06-1996", "3245674246")