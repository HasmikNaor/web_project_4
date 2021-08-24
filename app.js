let editBtn = document.querySelector(".profile__edit-btn");
let editProfile = document.querySelector(".edit-profile");
let closeBtn = document.querySelector(".edit-profile__close-btn");
let editName = document.querySelector(".edit-profile__name");
let editAbout = document.querySelector(".edit-profile__about");
let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
let saveBtn = document.querySelector(".edit-profile__btn");
let places = document.querySelector(".places");


editBtn.addEventListener('click', editBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);
saveBtn.addEventListener('click', saveBtnHandler);
places.addEventListener('click', placesHandler);

function editBtnHandler(e) {
  editProfile.classList.add("edit-profile_open");
  e.preventDefault();
}
function closeBtnHandler(e) {
  editProfile.classList.remove("edit-profile_open");
  e.preventDefault();
}

function saveBtnHandler(e) {
  profileName.textContent = editName.value;
  profileSubtitle.textContent = editAbout.value;
  editProfile.classList.remove("edit-profile_open");
  e.preventDefault();
}
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



