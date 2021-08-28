let editBtn = document.querySelector(".profile__edit-btn");
let editProfile = document.querySelector(".edit-profile");
let closeBtn = document.querySelector(".edit-profile__close-btn");
let editName = document.querySelector(".edit-profile__input_enter_name");
let editAbout = document.querySelector(".edit-profile__input_enter_about");
let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
let formContent = document.querySelector(".edit-profile__form-content");
// let places = document.querySelector(".places");

function editBtnHandler() {
  editProfile.classList.add("edit-profile_open");
  editName.value = profileName.textContent;
  editAbout.value = profileSubtitle.textContent;
}
function closeBtnHandler() {
  editProfile.classList.remove("edit-profile_open");
}
function saveBtnHandler(e) {
  profileName.textContent = editName.value;
  profileSubtitle.textContent = editAbout.value;
  editProfile.classList.remove("edit-profile_open");
  e.preventDefault();
}
editBtn.addEventListener('click', editBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);
formContent.addEventListener('submit', saveBtnHandler);
// places.addEventListener('click', placesHandler);


// function placesHandler(e) {
//   let childrenLength = e.target.parentElement.children.length;
//   let parent = e.target.parentElement;

//   if (e.target.classList.contains("hearts__white-heart")) {
//     e.target.style.display = "none";
//     for (let i = 0; i < childrenLength; i++) {
//       if (parent.children[i].classList.contains("hearts__black-heart")) {
//         parent.children[i].style.display = "block";

//       }
//     }
//   }
//   if (e.target.classList.contains("hearts__black-heart")) {
//     e.target.style.display = "none";
//     for (let i = 0; i < childrenLength; i++) {
//       if (parent.children[i].classList.contains("hearts__white-heart")) {
//         parent.children[i].style.display = "block";
//       }
//     }

//   }

//   e.preventDefault();
// }



