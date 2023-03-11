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



