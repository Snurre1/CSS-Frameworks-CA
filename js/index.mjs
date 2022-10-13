import * as templates from "./api/templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

import * as listeners from "./handlers/index.mjs";

listeners.setCreatePostFormListener();

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#postContent");
  templates.renderPostTemplates(posts, container);
}
testTemplate();
