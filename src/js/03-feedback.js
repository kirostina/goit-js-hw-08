import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
form.addEventListener('input', throttle(inPut, 500));
form.addEventListener('submit', onSubmit);
const localData = localStorage.getItem('feedback-form-state');
reloadPage();

function inPut () {
    const data = { email: email.value, message: message.value }
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onSubmit(evt) {
    evt.preventDefault();
    if (email.value.length && message.value.length < 0) {
        alert('All fields must be filled!');
    } else {
        const data = {
            email: email.value, message: message.value
        }
        console.log(data);
        evt.currentTarget.reset();
        localStorage.removeItem('feedback-form-state');
    }
}

function reloadPage() {
    if (localData) {
        email.value = JSON.parse(localData).email;
        message.value = JSON.parse(localData).message;
    } else {
        email.value = "";
        message.value = "";
    }
}


