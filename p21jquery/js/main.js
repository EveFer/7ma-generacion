var kodersArray = [];


const deleteKoder = (event) => {
    let index = event.target.dataset.indexKoder;
    // console.log(index)
    // console.log(kodersArray)
    // $(`tr#${index}`).remove()
    // deleteInArray(index);
    kodersArray.splice(index, 1)
    showInTable()
}

const showInTable = () => {
    $('#koder-wrapper').empty();
    kodersArray.forEach((koder, index) => {
        let {name, phone, email} = koder;
        let newKoder = `
        <tr id="${index}">
            <th scope="row">${index + 1}</th>
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td><div class="btn btn-danger delete-koder" id=koder-${index} data-index-koder=${index}>Eliminar</div></td>
        </tr>
        `
        $('#koder-wrapper').append(newKoder);
        $(`#koder-${index}`).on('click', deleteKoder);
        // $(`.delete-koder`).on('click', deleteKoder);

    })
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
