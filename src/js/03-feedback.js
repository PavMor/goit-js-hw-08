import throttle from 'lodash.throttle';

let formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button'),
};

refs.form.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillinInputArea();

function onFormSubmit(e) {
  e.preventDefault();
  console.log('Submitting form');
  e.target.reset();
}

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  //   console.log(formData);
  localStorage.setItem('formData', JSON.stringify(formData));
}

function fillinInputArea() {
  const savedMassage = localStorage.getItem('formData');
  if (savedMassage) {
    console.log(savedMassage);
    refs.form.value = savedMassage;
  }
}
