/*GET*/
const getProducts = () => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            productsArray = JSON.parse(this.responseText)
            console.log(productsArray)
        }
    }
    xHttp.open("GET","https://javascript-ajax-d0ce6.firebaseio.com/fernanda/products.json",true)
    xHttp.send();
}
/*POST*/
const addProductToDB = (productObject) => {
    console.log(productObject)
    let xHttp = new XMLHttpRequest();
    //objeto a guardar en la base//

    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }
    
    xHttp.open("POST","https://javascript-ajax-d0ce6.firebaseio.com/fernanda/products.json",true)
    xHttp.send(JSON.stringify(productObject))
}

/**PUT */
const putProduct = (productId, productObject) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            productsArray = JSON.parse(this.responseText)
            console.log(productsArray)
        }
    }
    xHttp.open("PUT",`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/products/${productId}.json`,true)
    xHttp.send(JSON.stringify(productObject));
}

/**Delete */
const deleteProduct = (productId) => {
    let xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            productsArray = JSON.parse(this.responseText)
            console.log(productsArray)
        }
    }
    xHttp.open("DELETE",`https://javascript-ajax-d0ce6.firebaseio.com/fernanda/products/${productId}.json`,true)
    xHttp.send();
}


const getValuesFromForm = () => {
    let name = document.getElementById('product-name').value
    let price = document.getElementById('product-price').value
    let description = document.getElementById('product-description').value

    if(name !== '' && price !== '' && description !== '') {
        price = parseInt(price)
        let newProduct = {name, price, description}
        addProductToDB(newProduct);
    }else {
        alert('Agregue los datos del producto')
    }
}

const addRegisterListener = () => {
    let btn = document.getElementById('btn-submit');
    btn.addEventListener('click', getValuesFromForm);
}

addRegisterListener()

let btnShow = document.getElementById('get-products')

btnShow.addEventListener('click', getProducts)