var kodersArray = [];


const deleteKoder = (event) => {
    // $(event.targer).data("index-koder")
    let index = event.target.dataset.indexKoder;
    kodersArray.splice(index, 1)
    showInTable()
}

const showInTable = () => {
    $('#koders-table').find('tbody').empty();
    kodersArray.forEach((koder, index) => {
        let {name, phone, email} = koder;
        let newKoder = `
        <tr id="${index}">
            <th scope="row">${index + 1}</th>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td><div class="btn btn-danger delete-koder" data-index-koder=${index}>Eliminar</div></td>
        </tr>
        `
        $('#koders-table').find('tbody').append(newKoder);
    })
    $(`.delete-koder`).on('click', deleteKoder);
}

const cleanInputs = () => {
    $('#koder-name').val("");
    $('#koder-phone').val("");
    $('#koder-email').val("");
}
const getData = () => {
    let name = $('#koder-name').val();
    let phone = $('#koder-phone').val();
    let email = $('#koder-email').val();

    if(name !== '' && phone !== '' && email !== '') {
        let newKoder = {name, phone, email};
        kodersArray.push(newKoder);
        showInTable();
        // cleanInputs();
    }else {
        alert('Todos los campos son Obligatorios');
    }
}

$('#btn-send').on('click', getData);

/* AJAX */

const getKodersFromDB = () => {
    kodersArray = []
    $.ajax({
        url:"https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/.json",
        method: "GET",
        success: (response) => {
            // console.log(response)
            $.each(response, (key, value)=>{
                kodersArray.push({...value, key})
            })
            showInTable()
        }
    })
}

const deleteKoderDB = (event)=> {
    let koderKey = $(event.targer).data("index-koder")
    $.ajax({
        url:`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koders/${koderKey}.json`,
        method: 'DELETE',
        success: (response) => {
            console.log(response)
            getKodersFromDB()
        }
    })
}
