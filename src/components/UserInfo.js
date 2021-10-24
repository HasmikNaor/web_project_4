export default class UserInfo {
  constructor({ profileNameSelector, profileJobSelector }, ProfileImgTemplate) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileJob = document.querySelector(profileJobSelector);
    this._ProfileImgTemplate = ProfileImgTemplate;
  }
  getUserInfo() {
    return { name: this._profileName.textContent, job: this._profileJob.textContent };
  }

  setUserInfo(inputNameValue, inputJobValue) {
    this._profileName.textContent = inputNameValue;
    this._profileJob.textContent = inputJobValue;
  }
  setUserAvatar(data) {
    this._ProfileImgTemplate.src = data.avatar;
  }
}
