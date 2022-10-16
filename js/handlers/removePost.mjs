import { removePost } from "../api/posts/index.mjs";

export async function setRemovePostFormListener() {
  const form = document.querySelector("#removePostForm");
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (form) {
    const post = await removePost(id);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;
      removePost(post);
    });
  }
}
