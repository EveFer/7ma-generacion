/*
crear un function que pida al usuario a traves de un prompt las propiedades nombre {name}
, apellido {lastName}, edad {age} y telefono {phone} de un koder y crear un objeto {koderObject}
con esos datos
*/

const createKoderObject = () => {
    let koderObject = {
        name: '',
        lastName: '',
        age: '',
        phone: ''
    };
    for (prop in koderObject) {
        let pro = prompt(`Ingrese el ${prop} del objeto`)
        koderObject[prop] = pro;
    }
    console.log(koderObject);
}

const createKoderObject2 = () => {
    let koderObject = {}
    let name = prompt(`Ingrese el Nombre`);
    let lastName = prompt(`Ingrese el Apellido`);
    let age = prompt(`Ingrese la edad`);
    let phone = prompt(`Ingrese el telefono`);
    koderObject = {
        name,
        lastName,
        age,
        phone
    }
    console.log(koderObject)
}