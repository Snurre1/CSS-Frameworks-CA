import * as templates from "./api/templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

import * as listeners from "./handlers/index.mjs";
import * as posts from "./api/posts/index.mjs";
const path = location.pathname;
if (path === "/index.html") {
  listeners.setCreatePostFormListener();
} else if (path === "/update.html") {
  listeners.setUpdateFormListener();
} else if (path === "/profile.html") {
  listeners.setUpdateProfileListener();
} else if (path === "/delete.html") {
  listeners.setRemovePostFormListener();
}

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#postContent");
  templates.renderPostTemplates(posts, container);
}
testTemplate();
