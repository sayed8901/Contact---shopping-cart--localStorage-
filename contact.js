// contact part ....

// function to get input field's value text
const getInputValueByID = (id) => {
    const inputField = document.getElementById(id);
    const valueText = inputField.value;
    return valueText
}

// function to set input field's value text
const setInputValueByID = (id, value) => {
    const inputField = document.getElementById(id);
    inputField.value = value;
}


// function to send input value to the local storage on clicking the send btn
const sendName = () => {
    const inputName = getInputValueByID('name-field');
    localStorage.setItem('name', inputName);
}
const sendEmail = () => {
    const inputEmail = getInputValueByID('email-field');
    localStorage.setItem('email', inputEmail);
}
const sendMessage = () => {
    const inputMessage = getInputValueByID('message-field');
    localStorage.setItem('message', inputMessage);
}

// function to delete input value to the local storage on clicking the delete btn
const deleteName = () => {
    localStorage.removeItem('name');
}
const deleteEmail = () => {
    localStorage.removeItem('email');
}
const deleteMessage = () => {
    localStorage.removeItem('message');
}

// clear all data from the local storage on clicking reset btn
const clearAll = () => {
    localStorage.clear();
}


// to send all the data at a time on clicking send btn
const sendAll = () => {
    const inputName = getInputValueByID('name-field');
    const inputEmail = getInputValueByID('email-field');
    const inputMessage = getInputValueByID('message-field');

    let userInfo = {name: inputName, email: inputEmail, message: inputMessage}
    // console.log(userInfo);

    let stringifiedUserInfo = JSON.stringify(userInfo);

    localStorage.setItem('userInfo', stringifiedUserInfo);
}

// get data from local storage
const userInfoFromLocalStorage = localStorage.getItem('userInfo');
const parsedUserInfoFromLocalStorage = JSON.parse(userInfoFromLocalStorage);

const nameFromLocalStorage = parsedUserInfoFromLocalStorage['name'];
const emailFromLocalStorage = parsedUserInfoFromLocalStorage['email'];
const messageFromLocalStorage = parsedUserInfoFromLocalStorage['message'];

// console.log(nameFromLocalStorage, emailFromLocalStorage, messageFromLocalStorage);


// set the local storage data as default to the input field
setInputValueByID('name-field', nameFromLocalStorage);
setInputValueByID('email-field', emailFromLocalStorage);
setInputValueByID('message-field', messageFromLocalStorage);








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
