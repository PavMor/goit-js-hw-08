import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
let formData = {};
const ls = localStorage;

// to receive data from input

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  //   e.preventDefault();
  formData[e.target.name] = e.target.value;
  ls.setItem('formData', JSON.stringify(formData));
  if (ls.getItem('formData')) {
    formData = JSON.parse(ls.getItem('formData'));
    for (let key in formData) {
      form.elements[key].value = formData[key];
    }
  }
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log('Submitting Form');
  e.currentTarget.reset();
  ls.removeItem('formData');
}
