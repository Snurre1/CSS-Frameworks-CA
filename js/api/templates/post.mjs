export function postTemplate(postData) {
  const post = document.createElement("div");
  post.classList.add(
    "container",
    "border",
    "border-secondary",
    "border-1",
    "w-75",
    "bg-light"
  );
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("col-3", "p-3");
  post.append(imageContainer);

  const image = document.createElement("img");
  image.src = `${postData.media}`;
  image.alt = `image from ${postData.title}`;
  image.classList.add("img-thumbnail", "border", "border-secondary");
  imageContainer.append(image);

  const titlePost = document.createElement("p");
  titlePost.classList.add("h6");
  titlePost.innerText = `${postData.title}`;
  imageContainer.append(titlePost);

  const postContainer = document.createElement("div");
  postContainer.classList.add("col-sm-9", "p-3");
  post.append(postContainer);

  const bodyPost = document.createElement("p");
  bodyPost.innerText = `Your post: ${postData.body}`;
  postContainer.append(bodyPost);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("container");
  postContainer.append(buttonContainer);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("btn", "btn-dark");
  submitButton.innerText = "Edit";
  buttonContainer.append(submitButton);

  return post;
}

export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));
}
