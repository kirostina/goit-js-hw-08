import throttle from "lodash.throttle";
const feedback = document.querySelector('.feedback-form');
const key = "feedback-form-state";
const { email, message } = feedback.elements;
feedback.addEventListener('input', throttle(inputForm, 500));
feedback.addEventListener('submit', submitting)

function inputForm() {
    localStorage.setItem(key, JSON.stringify({
        email: email.value,
        message: message.value,
    }));
}

function submitting(evt) {
    evt.preventDefault();
    console.log({email: email.value,
        message: message.value
    });
    form.reset();
    localStorage.removeItem(key);
};
if (localStorage.getItem(key)) {
    updateForm(JSON.parse(localStorage.getItem(key)));
}

function updateForm({ email: lsEmail, message: lsMessage }) {
  email.value = lsEmail;
  message.value = lsMessage;
}