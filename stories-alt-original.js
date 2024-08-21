const createButton2 = document.getElementById("create-story");
let postCounter2 = 0;
const section2 = document.querySelector(".stories-alt");

createButton2.addEventListener("click", () => {
  postCounter2 += 1;
  console.log(postCounter2);

  const newPostHTML = `
        <div class="targetID target-id-${postCounter2}">
            <div class="img-container">
              <form
                action="/upload"
                method="post"
                enctype="multipart/form-data"
              >
                <label for="id-${postCounter2}" class="story-upload"> </label>
                <input
                  type="file"
                  id="id-${postCounter2}"
                  class="story-pic"
                  name="uploadedFile-id-${postCounter2}"
                />
              </form>

              <img class="id-${postCounter2} story-preview" src="#" alt="." />
                  <div class="delete-story delete-story-id-${postCounter2}"><i class="fas fa-times"></i></div>
            </div>

            <input
              type="text"
              maxlength="13"
              placeholder="Nouveau"
              class="storyname"
            />
          </div>


  `;

  section2.insertAdjacentHTML("afterbegin", newPostHTML);

  const postID2 = document.querySelector(`.target-id-${postCounter2}`);
  const deleteButtonID2 = document.querySelector(
    `.delete-story-id-${postCounter2}`
  );

  deleteButtonID2.addEventListener("click", () => {
    console.log("click");
    postID2.style.display = "none";
  });
});

const storiesContainer = document.querySelector(".stories-alt");
let storyID = "ID";

section2.addEventListener("change", function (event) {
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
