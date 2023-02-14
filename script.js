const form = document.querySelector('.form');
const emailInput = document.querySelector('.email');
const errorMsg = document.querySelector('.error-msg');
const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value === '' || !emailInput.value.match(validEmail)) {
    form.classList.add('email-error');
  } else form.classList.remove('email-error');
});
