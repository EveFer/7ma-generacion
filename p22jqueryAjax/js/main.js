var kodersArray = [];
const getKoderData = () => {
    let name = $("#koder-name").val();
    let email = $("#koder-email").val();
    let phone = $("#koder-phone").val();
    let koderObject = {name, email, phone}
    addKoderToDB(koderObject)
    // printKoders();
}
$("#save-koder").on("click",getKoderData)
const assignDeleteKoderListener = () => {
    $(".delete-koder").on("click",deleteKoderInDb)
}
const printKoders = () => {
    $("#koders-table").find("tbody").empty();
    kodersArray.forEach((koder,index) => {
        $("#koders-table").find("tbody").append(`
            <tr>
                <td>${index + 1}</td>
                <td class="editable-${koder.key} name">${koder.name}</td>
                <td class="editable-${koder.key} email">${koder.email}</td>
                <td class="editable-${koder.key} phone">${koder.phone}</td>
                <td><div class="btn btn-danger delete-koder" data-koder-index=${koder.key}>X</div></td>
            </tr>
        `)
        addEventCells(koder.key)
    })
    assignDeleteKoderListener();
}
const deleteKoder = (event) => {
    let koderIndex = $(event.target).data("koder-index")
    kodersArray.splice(koderIndex,1)
    printKoders();
}

const getKodersFromDb = () => {
    kodersArray = [];
    $.ajax({
        url:"https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koder/.json",
        method:"GET",
        success:(response)=>{
            $.each(response,(key,value)=>{
                kodersArray.push({...value,key})
                console.log(kodersArray)
            })
            console.log('hs',kodersArray)
            printKoders();
        }
    })
}
const deleteKoderInDb = () => {
    let koderKey = $(event.target).data("koder-index")
    $.ajax({
        url:`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koder/${koderKey}.json`,
        method:"DELETE",
        success:(response)=>{
            console.log(response);
            getKodersFromDb();
        }
    })
}

const addKoderToDB = (koderObject) => {
    $.ajax({
        url:`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koder/.json`,
        method:"POST",
        data: JSON.stringify(koderObject),
        success:(response)=>{
            console.log(response);
            getKodersFromDb();
        }
    })
}

getKodersFromDb();


const patchKoder = (koderKey, newDataObject) => {
    $.ajax({
        url:`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/koder/${koderKey}.json`,
        method: "PATCH",
        data: JSON.stringify(newDataObject),
        success: (response)=> {
            console.log(response);
            getKodersFromDb();
        }
    })
}

const addEventCells = (koderKey) => {
    $("#koders-table").find(`tbody td.editable-${koderKey}`).one('click', (event) => {
        let valueCurrent = event.target.innerHTML;
        console.log(valueCurrent);
        let td = event.target;
        console.log(td)
        $(td).removeClass(`editable-${koderKey}`);
        let property = $(td).attr('class')
        console.log(property);
        $(td).empty()
        $(td).append(`<input type="text" data-koder-key="${koderKey}"  class="cell-edit" value="${valueCurrent}" >`)
    
        $(`.cell-edit`).on('blur',(event)=> {
            let koderKey = $(event.target).data("koder-key");
            let data = {}
            if(property === 'name') {
                name = $(event.target).val()
                data = { name};
                patchKoder(koderKey, data);
            }else if(property === 'email') {
                email = $(event.target).val()
                data = { email};
                patchKoder(koderKey, data);
            }else if(property === 'phone'){
                phone = $(event.target).val()
                data = { phone};
                patchKoder(koderKey, data);
            }
        })
    })
}

