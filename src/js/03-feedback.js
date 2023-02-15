import throttle from 'lodash.throttle';

let formData = {};
const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  button: document.querySelector('button'),
};

refs.form.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillinInputArea();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(STORAGE_KEY);
}

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillinInputArea() {
  const savedMassage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMassage) {
    const formKeys = Object.keys(savedMassage);
    formKeys.map(element => {
      document.querySelector(`[name='${element}']`).value =
        savedMassage[element];
    });
  }
}
