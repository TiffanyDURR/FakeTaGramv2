const displayPopUp = document.getElementById("display-popup");
const popUp = document.querySelector(".tools");
const closePopUp = document.getElementById("leave-popup");

displayPopUp.addEventListener("click", () => {
  popUp.style.display = "flex";
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
