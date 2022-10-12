import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
const action = "/posts";
const method = "put";
export async function updatePost(postData) {
  if (!postData.id) {
    throw new Error("Update requires a postID");
  }
  const reUpdatePost = `${API_SOCIAL_URL}${action}/${postData.id}`;
  const response = await authFetch(reUpdatePost, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
