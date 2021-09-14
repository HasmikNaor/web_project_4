function showError(input, settings) {
  const error = input.validationMessage;
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = error;

  errorElement.classList.add(settings.errorClass);
  input.classList.add(settings.inputErrorClass);
}
function hideError(input, settings) {
  const errorElement = document.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';

  errorElement.classList.remove(settings.errorClass);
  input.classList.remove(settings.inputErrorClass);
}
function checkValidity(input, settings) {
  if (input.validity.valid) {
    hideError(input, settings);
  } else {
    showError(input, settings);
  }
}
function toggleButtonState(inputs, button, settings) {
  const isFormValid = inputs.every(input => input.validity.valid);
  if (isFormValid) {
    button.disabled = false;
    button.classList.remove(settings.inactiveButtonClass);
  } else {
    button.disabled = 'disabled';
    button.classList.add(settings.inactiveButtonClass);
  }
}

function setEventListeners(form, settings) {
  const inputs = [...form.querySelectorAll(settings.inputSelector)];
  const button = form.querySelector(settings.submitButtonSelector);
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      checkValidity(input, settings)
      toggleButtonState(inputs, button, settings);
    })
  })
}

function enableValidation(settings) {
  const forms = [...document.querySelectorAll(settings.formSelector)];
  forms.forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault());
    setEventListeners(form, settings);
  })
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__input_theme_error",
  errorClass: "popup__error_visible"
}
enableValidation(config);