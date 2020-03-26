var productsArray = [
    {
        name:"Sabritas 340gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.rappi.com.mx/products/975004512-1580921567558.png?d=200x200&e=webp"
    },
    {
        name:"Paketaxo verde",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:50,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_975660166&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAH"
    },
    {
        name:"Sabritas Moradas 170gr",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:45,
        imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.rappi.com.mx%2Fproducto%2F1306702047_14255&psig=AOvVaw3YBh8WdC-2_2BJspHGouUd&ust=1584932461382000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjg7Y-MregCFQAAAAAdAAAAABAN"
    },
    {
        name:"Coca Cola lata 335ml",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:14,
        imgUrl:"https://constantmotions.files.wordpress.com/2011/08/urban-hifi-coca-cola-8175.png"
    },
    {
        name:"Coca Cola sin azúcar",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:18,
        imgUrl:"https://images.rappi.com.mx/products/975607512-1579282803636.png?d=200x200&e=webp"
    },
    {
        name:"Six pack XX Lager",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:84,
        imgUrl:"https://images.rappi.com.mx/products/15324-1580920453948.png?d=200x200"
    },
    {
        name:"Six Pack Modelo Especial",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:112,
        imgUrl:"https://images.rappi.com.mx/products/7501064193156-1571349064824.png?d=200x200&e=webp"
    },
    {
        name:"Six Pack Negra Modelo",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:140,
        imgUrl:"https://images.rappi.com.mx/products/895653002095-1571349176987.png?d=200x200&e=webp"
    },
    {
        name:"Jägermeister",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:270,
        imgUrl:"https://images.freshop.com/00083089660402/d6b255063a4f51e45b72c732690dc109_medium.png"
    },
    {
        name:"Alka-seltzer",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, laudantium.",
        price:60,
        imgUrl:"https://images.freshop.com/00016500040118/1b1dc11809542e9a198633e7ee4e53a1_medium.png"
    }
]

var orderProduct = [];

const printProducts = () => {
    productsArray.forEach((product, index)=> {
        let {name, price} = product;
        let currentProducts = document.getElementById('cards-products').innerHTML;
        let newProduct = `
        <li class="list-group-item list-group-item-info mb-3">
            <div class="product-name font-weight-bold">${name}</div>
            <div class="product-price">Costo: $${price}.00</div>
            <div class="form-group row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Cantidad:</label>
                <div class="col-sm-8">
                    <input type="number" class="form-control" id="product-${index}">
                </div>
            </div>
            <div class="btn-wrapper d-flex justify-content-between">
                <div class="btn btn-primary w-50" data-id-product="${index}">Ver Detalle</div>
                <div class="btn btn-success w-50 ml-2" data-id-product="${index}">Agregar al carrito</div>
            </div>
        </li>
        `
        document.getElementById('cards-products').innerHTML = currentProducts + newProduct;
    });
}

printProducts();

/** */

const printDetailProduct = (idProduct) => {
    let product = productsArray[idProduct];
    let {name, description, imgUrl} = product;

    let detailProduct = `
    <div class="card">
        <img src="${imgUrl}"
            class="card-img-top" alt="product's image">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p>${description}</p>
        </div>
    </div>
    `;

    document.getElementById('detail-product').innerHTML = detailProduct;
}

var buttonsViewDetails = document.getElementsByClassName('btn-primary');
console.log(buttonsViewDetails);

for (let i = 0; i < buttonsViewDetails.length; i++) {
    buttonsViewDetails [i].addEventListener('click', (event) => {
        let idProduct = event.target.dataset.idProduct;
        console.log(idProduct);
        printDetailProduct(idProduct);
    });
}


/** */

const printCart = () => {
    document.getElementById('products-shopping-cart').innerHTML = "";
    orderProduct.forEach((product, index)=> {
        let {name, price, quantity} = product;
        let currentProducts = document.getElementById('products-shopping-cart').innerHTML;
        let newProduct = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            ${name}
            <span class="badge badge-primary badge-pill">$${price * quantity}.00</span>
            <div class="btn btn-danger" data-id-product="${index}">X</div>
        </li> 
        `
        document.getElementById('products-shopping-cart').innerHTML = currentProducts + newProduct;

    });
    addRemoveListener();
}



const addProduct = (event) => {
    let idProduct = event.target.dataset.idProduct;
    let quantity = document.getElementById(`product-${idProduct}`).value;
    if(quantity !== '') {
        let product = productsArray[idProduct];
        let {name, price} = product;
        quantity = parseInt(quantity)

        let subtotalProductPrice = price * quantity;

        newProductObject = {...product, quantity};
        orderProduct.push(newProductObject);
        printCart();
    }else {
        alert('Necesita ingresar la cantidad del producto'); 
    }
}



var buttonsAddCart = document.getElementsByClassName('btn-success');
console.log(buttonsAddCart);

for (let i = 0; i < buttonsAddCart.length; i++) {
    buttonsAddCart[i].addEventListener('click',addProduct)
}



/** */
const removeProductCart = (event) => {
    let idProduct = event.target.dataset.idProduct;
    orderProduct.splice(idProduct, 1);
    printCart();
}

const addRemoveListener = () => {
    var buttonsRemoveProduct = document.getElementsByClassName('btn-danger');
    for (let i = 0;i < buttonsRemoveProduct.length;i++) {
        buttonsRemoveProduct[i].addEventListener('click', removeProductCart); 
    }
    let total = orderProduct.reduce((total, orderedProduct)=>{
        return total += orderedProduct.price * orderedProduct.quantity;
    },0)
    document.getElementById('wrapper-total').innerHTML = `$${total}.00`;
}


