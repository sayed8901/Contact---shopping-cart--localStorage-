// shopping carts part ....


// function to display product input data onto the UI inline li
const displayProductData = (product, qty) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `* ${qty} pcs ${product} `
    li.classList.add('d-inline');
    ul.appendChild(li);
}


// function to add product on click 'add product' btn
const addProduct = () => {
    // get the product input data
    const productNameField = document.getElementById('product-name');
    const productQtyField = document.getElementById('product-quantity');
    const productName = productNameField.value;
    const productQty = productQtyField.value;

    // to display inputted data onto the UI
    if(productName.length == 0 || productQty.length == 0){
        alert('Please input a product name & its quantity first!');
    }
    else{
        displayProductData(productName, productQty);
        // to clear after btn click
        productNameField.value = '';
        productQtyField.value = '';

        saveDataToLocalStorage(productName, productQty);
    }
}


// to save to local storage, firstly check if there any previous data is save or not, if yes then grab the existing local storage product data by using below function

const getStoredShoppingCart = () => {

    /*  assume that, initial cart is an empty object, 
        later it will hold the inputted data accordingly */
    let cart = {};

    const storedCart = localStorage.getItem('cart');

    // if there is found any data in local storage kew-named 'cart', then it will be parsed into object
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// function to save product data to local storage
const saveDataToLocalStorage = (product, quantity) => {
    // firstly get the existing cart data stored in local storage
    const cart = getStoredShoppingCart();


    /* to set a new product info (from the input field) to the locally stored cart, use cart[product] ..
    and set & update the value of product quantity data, use cart[product] = qty; */

    cart[product] = quantity;
    // console.log(cart);


    // to stringify the user inputted (stored as object) cart data
    const stringifiedNewCart = JSON.stringify(cart);

    // to save the newly stringified product data to the local storage cart and add & update it accordingly..
    localStorage.setItem('cart', stringifiedNewCart);
}


// to display product info in the UI from the local storage data
const displayProductFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();

    for(const product in savedCart){
        const quantity = savedCart[product];
        // console.log(product, quantity);

        // to show the output to the UI from the loop
        displayProductData(product, quantity);
    }
}


// to update the product info in the UI from the last saved local storage cart dat by default 
displayProductFromLocalStorage();