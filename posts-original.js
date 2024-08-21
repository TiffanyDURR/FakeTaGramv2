const createButton = document.getElementById("creer");
let postCounter = 0;
let counterAlt = 0;
const section = document.querySelector("section");
const publicationsCount = document.getElementById("publications");

createButton.addEventListener("click", () => {
  postCounter += 1;
  counterAlt += 1;
  console.log(postCounter);

  publicationsCount.innerHTML = `${counterAlt}`;

  const newPostHTML = `
    <div class="post post-id-${postCounter}">
      <div class="img-container">
        <form action="/upload" method="post" enctype="multipart/form-data">
          <label for="post-id-${postCounter}" class="post-upload"></label>
          <input type="file" id="post-id-${postCounter}" class="post-pic" name="post-pic-${postCounter}" />
        </form>
       
        <img class="pic-post-id-${postCounter} post-preview" src="#" alt="" style="display:none;" />
        <div class="delete-post delete-post-id-${postCounter}"><i class="fas fa-times"></i></div>
      </div>
    </div>
  `;

  section.insertAdjacentHTML("afterbegin", newPostHTML);

  const postID = document.querySelector(`.post-id-${postCounter}`);
  const inputID = document.getElementById(`post-id-${postCounter}`);
  const imageID = document.querySelector(`.pic-post-id-${postCounter}`);
  const deleteButtonID = document.querySelector(
    `.delete-post-id-${postCounter}`
  );

  deleteButtonID.addEventListener("click", () => {
    console.log("click");
    postID.style.display = "none";
    counterAlt -= 1;
    publicationsCount.innerHTML = `${counterAlt}`;
  });
});

section.addEventListener("change", function (event) {
  if (event.target.classList.contains("post-pic")) {
    const storyID = event.target.id;
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log(imageURL);

      const imgPreview = document.querySelector(`.pic-${storyID}`);
      imgPreview.src = imageURL;
      imgPreview.style.display = "flex";

      imgPreview.onload = () => URL.revokeObjectURL(imageURL);
    }
  }
});
