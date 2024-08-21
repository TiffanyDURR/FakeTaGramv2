const storiesContainer = document.querySelector(".stories");
let storyID = "ID";

storiesContainer.addEventListener("change", function (event) {
  if (event.target.classList.contains("story-pic")) {
    storyID = event.target.id;
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);

      const imgPreview = document.querySelector(`.${storyID}`);
      imgPreview.src = imageURL;
      imgPreview.style.display = "flex";

      imgPreview.onload = () => URL.revokeObjectURL(imageURL);
    }
  }
});

const targets = document.querySelectorAll(".targetID");

targets.forEach((target) => {
  const targetId = target.classList[1].split("-").pop();

  const storyNameInput = document.getElementById(`story-id-${targetId}`);
  const storyCheck = target.querySelector(`.story-check-id-${targetId}`);
  const storyClose = target.querySelector(`.story-close-id-${targetId}`);

  storyClose.addEventListener("click", () => {
    target.style.display = "none";
  });

  storyCheck.addEventListener("click", () => {
    storyCheck.style.display = "none";
    storyClose.style.display = "none";
  });

  storyNameInput.addEventListener("click", () => {
    storyCheck.style.display = "flex";
    storyClose.style.display = "flex";
  });
});

const reelsButton = document.getElementById("reels");

reelsButton.addEventListener("click", () => {
  targets.forEach((target) => {
    target.style.display = "block";
  });
});
