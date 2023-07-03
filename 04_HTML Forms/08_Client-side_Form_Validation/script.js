'use strict';

const form = document.querySelector('#fruit');
const fruit = document.querySelector('#choose');
const quantity = document.querySelector('#qty');
const button = document.querySelector('#fruit button');

// console.log(fruit.willValidate);
// console.log(fruit.validity);
// console.log(fruit.checkValidity());
// console.log(fruit.validationMessage);

const email_1 = document.querySelector('#mail');

email_1.addEventListener('input', (e) => {
  console.log(email_1.validity);
  if (email_1.validity.typeMismatch) {
    email_1.setCustomValidity('Expecting an email address 📧');
  } else {
    email_1.setCustomValidity('');
  }
});

fruit.addEventListener('input', (e) => {
  if (fruit.validity.patternMismatch) {
    fruit.setCustomValidity(`You can enter only 'banana' or 'cherry'`);
  } else {
    // makes the input valid
    fruit.setCustomValidity('');
  }
});

const emailForm = document.querySelector('#validation2');
const email = document.querySelector('#email');
const errorBox = document.querySelector('.error');

function showError() {
  if (email.validity.valueMissing) {
    errorBox.textContent = 'You need to enter an email address';
  }

  if (email.validity.tooShort) {
    errorBox.textContent = `The email should be atleast 8 characters long.\nYou entered ${email.value.length} characters`;
  }

  if (email.validity.typeMismatch) {
    errorBox.textContent = 'Entered value needs to be an e-mail address.';
  }
}

emailForm.addEventListener('submit', (e) => {
  if (!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

email.addEventListener('input', (e) => {
  if (email.validity.valid) {
    errorBox.textContent = '';
    errorBox.className = 'error';
    email.classList.add('valid');
  } else {
    showError();
  }
});
