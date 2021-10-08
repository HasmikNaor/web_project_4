export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }, formSelector) {
    this._profileName = document.querySelector(profileNameSelector).textContent;
    this._profileJob = document.querySelector(profileJobSelector).textContent;
    this._form = document.querySelector(formSelector);
  }
  getUserInfo() {
    return { name: this._profileName, job: this._profileJob };
  }

  setUserInfo() {
    const inputName = this._form.querySelector(".popup__input_edit-profile_name");
    const inputJob = this._form.querySelector(".popup__input_edit-profile_about");
    const data = this.getUserInfo();

    inputName.value = data.name;
    inputJob.value = data.job;
  }
}
