let nameValue = "Name";
let usernameValue = "username";
const threadName = document.getElementById("thread-name");

document.getElementById("avatar").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    console.log(imageURL);

    const imgPreview = document.getElementById("avatar-prev");
    imgPreview.src = imageURL;
    imgPreview.style.display = "flex";

    imgPreview.onload = () => URL.revokeObjectURL(imageURL);

    const imgPreviewMini = document.getElementById("avatar-prev-mini");
    imgPreviewMini.src = imageURL;
    imgPreviewMini.style.display = "flex";

    imgPreviewMini.onload = () => URL.revokeObjectURL(imageURL);

    const imgPreviewMobile = document.getElementById("avatar-prev-mobile");
    imgPreviewMobile.src = imageURL;
    imgPreviewMobile.style.display = "flex";

    imgPreviewMobile.onload = () => URL.revokeObjectURL(imageURL);
  }
});

document
  .getElementById("avatar-mobile")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);

      const imgPreview = document.getElementById("avatar-prev");
      imgPreview.src = imageURL;
      imgPreview.style.display = "flex";

      imgPreview.onload = () => URL.revokeObjectURL(imageURL);

      const imgPreviewMini = document.getElementById("avatar-prev-mini");
      imgPreviewMini.src = imageURL;
      imgPreviewMini.style.display = "flex";

      imgPreviewMini.onload = () => URL.revokeObjectURL(imageURL);

      const imgPreviewMobile = document.getElementById("avatar-prev-mobile");
      imgPreviewMobile.src = imageURL;
      imgPreviewMobile.style.display = "flex";

      imgPreviewMobile.onload = () => URL.revokeObjectURL(imageURL);
    }
  });

const usernameInput = document.getElementById("username");

const usernameCheck = document.querySelector(".check-username");
const usernameContainer = document.querySelector(".username");
const title = document.querySelector("title");

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.length > 16) {
    usernameInput.value = usernameInput.value.slice(0, 16);
  }
  usernameValue = usernameInput.value;
  console.log(usernameValue);
});

usernameCheck.addEventListener("click", () => {
  usernameContainer.style.display = "flex";
  if (usernameValue == "" || usernameInput.value == "") {
    usernameContainer.innerHTML = "username";
    threadName.innerHTML = "username";
    title.innerHTML = `${nameValue} (&#064;username) &#x2022; Photos et vid&#xe9;os Instagram`;
  } else {
    usernameContainer.innerHTML = `${usernameValue}`;
    threadName.innerHTML = `${usernameValue}`;
    title.innerHTML = `${nameValue} (&#064;${usernameValue}) &#x2022; Photos et vid&#xe9;os Instagram`;
  }
  usernameCheck.style.display = "none";
  usernameInput.style.display = "none";
});

usernameContainer.addEventListener("click", () => {
  usernameContainer.style.display = "none";
  usernameValue = "";
  usernameContainer.innerHTML = ``;
  title.innerHTML = `${nameValue} (&#064;) &#x2022; Photos et vid&#xe9;os Instagram`;
  usernameInput.value = "";
  usernameContainer.innerHTML = "";
  usernameCheck.style.display = "flex";
  usernameInput.style.display = "flex";
});

const followersInput = document.getElementById("followers");
let followersValue;
const followersCheck = document.getElementById("followers-check");
const followersContainer = document.getElementById("followers-container");

followersInput.addEventListener("input", () => {
  if (followersInput.value.length > 5) {
    followersInput.value = followersInput.value.slice(0, 5);
  }
  followersValue = followersInput.value;
  console.log(followersValue);
});

followersCheck.addEventListener("click", () => {
  console.log("check");
  followersContainer.style.display = "flex";
  if (followersValue == "" || followersInput.value == "") {
    followersContainer.innerHTML = "0";
  } else {
    followersContainer.innerHTML = `${followersValue}`;
  }
  followersCheck.style.display = "none";
  followersInput.style.display = "none";
});

followersContainer.addEventListener("click", () => {
  followersContainer.style.display = "none";
  followersValue = "0";
  followersContainer.innerHTML = `0`;
  followersInput.value = "0";
  followersCheck.style.display = "flex";
  followersInput.style.display = "flex";
});

const suivisInput = document.getElementById("suivis");
let suivisValue;
const suivisCheck = document.getElementById("suivis-check");
const suivisContainer = document.getElementById("suivis-container");

suivisInput.addEventListener("input", () => {
  if (suivisInput.value.length > 5) {
    suivisInput.value = suivisInput.value.slice(0, 5);
  }
  suivisValue = suivisInput.value;
  console.log(suivisValue);
});

suivisCheck.addEventListener("click", () => {
  suivisContainer.style.display = "flex";
  if (suivisValue == "" || suivisInput.value == "") {
    suivisContainer.innerHTML = "0";
  } else {
    suivisContainer.innerHTML = `${suivisValue}`;
  }
  suivisCheck.style.display = "none";
  suivisInput.style.display = "none";
});

suivisContainer.addEventListener("click", () => {
  suivisContainer.style.display = "none";
  suivisValue = "0";
  suivisContainer.innerHTML = `0`;
  suivisInput.value = "0";
  suivisCheck.style.display = "flex";
  suivisInput.style.display = "flex";
});

const nameInput = document.getElementById("name");

const nameCheck = document.getElementById("name-check");
const nameContainer = document.getElementById("name-container");

nameInput.addEventListener("input", () => {
  if (nameInput.value.length > 18) {
    nameInput.value = nameInput.value.slice(0, 18);
  }
  nameValue = nameInput.value;
  console.log(nameValue);
});

nameCheck.addEventListener("click", () => {
  nameContainer.style.display = "flex";
  if (nameValue == "" || nameInput.value == "") {
    nameContainer.innerHTML = "Nom";
    title.innerHTML = `Name (&#064;${usernameValue}) &#x2022; Photos et vid&#xe9;os Instagram`;
  } else {
    nameContainer.innerHTML = `${nameValue}`;
    title.innerHTML = `${nameValue} (&#064;${usernameValue}) &#x2022; Photos et vid&#xe9;os Instagram`;
  }
  nameCheck.style.display = "none";
  nameInput.style.display = "none";
});

nameContainer.addEventListener("click", () => {
  nameContainer.style.display = "none";
  nameValue = "Nom";
  nameContainer.innerHTML = `Nom`;
  nameInput.value = "Nom";
  title.innerHTML = ` (&#064;${usernameValue}) &#x2022; Photos et vid&#xe9;os Instagram`;
  nameCheck.style.display = "flex";
  nameInput.style.display = "flex";
});

const pronom = document.querySelector(".pronom");
const pronomInput = document.getElementById("pronom");
let pronomValue;
const pronomCheck = document.getElementById("pronom-check");
const pronomClose = document.getElementById("pronom-close");
const pronomContainer = document.getElementById("pronom-container");

pronomInput.addEventListener("input", () => {
  if (pronomInput.value.length > 10) {
    pronomInput.value = pronomInput.value.slice(0, 10);
  }
  pronomValue = pronomInput.value;
  console.log(pronomValue);
});

pronomCheck.addEventListener("click", () => {
  pronomContainer.style.display = "flex";
  if (pronomValue == "" || pronomInput.value == "") {
    pronomContainer.innerHTML = "";
  } else {
    pronomContainer.innerHTML = `${pronomValue}`;
  }
  pronomCheck.style.display = "none";
  pronomClose.style.display = "none";
  pronomInput.style.display = "none";
});

pronomContainer.addEventListener("click", () => {
  pronomContainer.style.display = "none";
  pronomValue = "";
  pronomContainer.innerHTML = ``;
  pronomInput.value = "";
  pronomCheck.style.display = "flex";
  pronomClose.style.display = "flex";
  pronomInput.style.display = "flex";
});

pronomClose.addEventListener("click", () => {
  pronom.style.display = "none";
});

const categorie = document.querySelector(".categorie");
const categorieInput = document.getElementById("categorie");
let categorieValue;
const categorieCheck = document.getElementById("categorie-check");
const categorieClose = document.getElementById("categorie-close");
const categorieContainer = document.getElementById("categorie-container");

categorieInput.addEventListener("input", () => {
  if (categorieInput.value.length > 10) {
    categorieInput.value = categorieInput.value.slice(0, 10);
  }
  categorieValue = categorieInput.value;
  console.log(categorieValue);
});

categorieCheck.addEventListener("click", () => {
  categorieContainer.style.display = "flex";
  if (categorieValue == "" || categorieInput.value == "") {
    categorieContainer.innerHTML = "";
  } else {
    categorieContainer.innerHTML = `${categorieValue}`;
  }
  categorieCheck.style.display = "none";
  categorieClose.style.display = "none";
  categorieInput.style.display = "none";
});

categorieContainer.addEventListener("click", () => {
  categorieContainer.style.display = "none";
  categorieValue = "";
  categorieContainer.innerHTML = ``;
  categorieInput.value = "";
  categorieCheck.style.display = "flex";
  categorieClose.style.display = "flex";
  categorieInput.style.display = "flex";
});

categorieClose.addEventListener("click", () => {
  categorie.style.display = "none";
});

const lien = document.querySelector(".lien");
const lienInput = document.getElementById("lien");
let lienValue;
const lienCheck = document.getElementById("lien-check");
const lienClose = document.getElementById("lien-close");
const lienContainer = document.getElementById("lien-container");

lienInput.addEventListener("input", () => {
  if (lienInput.value.length > 60) {
    lienInput.value = lienInput.value.slice(0, 60);
  }
  lienValue = lienInput.value;
  console.log(lienValue);
});

lienCheck.addEventListener("click", () => {
  lienContainer.style.display = "flex";
  if (lienValue == "" || lienInput.value == "") {
    lienContainer.innerHTML = "";
  } else {
    lienContainer.innerHTML = `${lienValue}`;
  }
  lienCheck.style.display = "none";
  lienClose.style.display = "none";
  lienInput.style.display = "none";
});

lienContainer.addEventListener("click", () => {
  lienContainer.style.display = "none";
  lienValue = "";
  lienContainer.innerHTML = ``;
  lienInput.value = "";
  lienCheck.style.display = "flex";
  lienClose.style.display = "flex";
  lienInput.style.display = "flex";
});

lienClose.addEventListener("click", () => {
  lien.style.display = "none";
});

const bioInput = document.getElementById("bio");
let bioValue = "";
const bioCheck = document.getElementById("bio-check");
const bioContainer = document.getElementById("bio-container");
const textAreaInfos = document.querySelector(".textarea");
let textAreaLength = 0;
const popCara = document.querySelector(".pop-cara");

bioInput.addEventListener("input", () => {
  if (bioInput.value.length > 150) {
    bioInput.value = bioInput.value.slice(0, 150);
  }
  bioValue = bioInput.value;
  console.log(bioValue);

  textAreaLength = bioInput.value.length;
  popCara.innerHTML = `${textAreaLength}`;
  console.log(textAreaLength);
});

bioCheck.addEventListener("click", () => {
  bioContainer.style.display = "flex";
  if (bioValue == "" || bioInput.value == "") {
    bioContainer.innerHTML = `${bioValue}`;
  } else {
    bioContainer.innerHTML = `${bioValue.replace(/\n/g, "<br>")}`;
  }
  bioInput.style.display = "none";
  textAreaInfos.style.display = "none";
});

bioContainer.addEventListener("click", () => {
  bioContainer.style.display = "none";
  bioInput.style.display = "flex";
  textAreaInfos.style.display = "flex";
});
