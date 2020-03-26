const addKoderToDB = (koderObject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText));
        }
    }

    xHttp.open('POST', `https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/.json`, true);
    xHttp.send(JSON.stringify(koderObject))
}

const getKoders = () => {
    let xHttp = new XMLHttpRequest();
    let koders;
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            koders = JSON.parse(this.responseText)
        }
    }
    xHttp.open('GET', `https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/.json`, false);
    xHttp.send();
    return koders;
}

const deleteKoder = (koderId) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(JSON.parse(this.responseText))
        }
    }
    xHttp.open('DELETE', `https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/${koderId}.json`, false)
    xHttp.send();
}

/*  */

const cleanInputs = () => {
    document.getElementById('koder-name').value = ''
    document.getElementById('koder-phone').value = ''
    document.getElementById('koder-email').value = ''
}

const getKoderData = () => {
    console.log('Click')
    let name = document.getElementById('koder-name').value
    let phone = document.getElementById('koder-phone').value
    let email = document.getElementById('koder-email').value
    if(name !== '' && phone !== '' && email !== ''){
        let newKoder = {name, phone, email};
        cleanInputs();
        addKoderToDB(newKoder);
        showInTable();
        
    }else {
        alert('Todos los campos son obligatorios');
    }
}

const addSaveKoderListener = () => {
    let btnSend = document.getElementById('btn-send');
    btnSend.addEventListener('click', getKoderData);
}


/* get listener for delete a koder */

const removeKoder = (event) => {
    let koderId = event.target.dataset.idKoder
    deleteKoder(koderId);
    showInTable();
}

const addRemoveListener = () => {
    let buttonsDelete = document.getElementsByClassName('delete-koder');
    for (let i = 0; i < buttonsDelete.length; i++) {
        buttonsDelete[i].addEventListener('click', removeKoder);
    }
}
/* Show on Table */

const getKodersArray = (koderObject) => {
    let kodersArray = [];
    for (const koder in koderObject) {
        koderObject[koder].id = koder;
        kodersArray.push(koderObject[koder])
    }
    return kodersArray;
}

const showInTable = () => {
    let koders = getKoders();
    console.log(koders)
    let kodersArray = getKodersArray(koders);
    document.getElementById('koder-wrapper').innerHTML = '';
    kodersArray.forEach((koder, index) => {
        let {id, name, phone, email} = koder;
        let currentKoders = document.getElementById('koder-wrapper').innerHTML
        let newKoder = `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td><div class="btn btn-danger delete-koder" data-id-koder=${id}>Eliminar</div></td>
        </tr>
        `
        document.getElementById('koder-wrapper').innerHTML = currentKoders + newKoder
    })
    addRemoveListener();
}


addSaveKoderListener();

showInTable()