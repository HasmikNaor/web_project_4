class FormValidator {
  constructor(_settings, _formElement) {
    this._settings = _settings;
    this._formElement = _formElement;
  }

  _showError = (input) => {
    const { errorClass, inputErrorClass } = this._settings;
    const error = input.validationMessage;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = error;

    errorElement.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }

  hideError = (input) => {
    const { errorClass, inputErrorClass } = this._settings;
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';

    errorElement.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  }

  _checkValidity = (input) => {
    if (input.validity.valid) {
      this.hideError(input);
    } else {
      this._showError(input);
    }
  }

  toggleButtonState() {
    const { inactiveButtonClass, submitButtonSelector } = this._settings;
    const isFormValid = this.inputs.every(input => input.validity.valid);
    const button = this._formElement.querySelector(submitButtonSelector);
    if (isFormValid) {
      button.disabled = false;
      button.classList.remove(inactiveButtonClass);
    } else {
      button.disabled = 'disabled';
      button.classList.add(inactiveButtonClass);
    }
  }

  _setEventListeners = () => {
    const { inputSelector } = this._settings;

    this.inputs = [...this._formElement.querySelectorAll(inputSelector)];
    this.inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkValidity(input)
        this.toggleButtonState();
      })
    })
  }

  enableValidation() {
    this._formElement.addEventListener('submit', (e) => e.preventDefault());
    this._setEventListeners();

  }
}
export default FormValidator;
