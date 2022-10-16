/**
 * This will update a post, grabbing the id in the API, update the post and return it to the API.
 * @param {string} response is where the data will be returned to
 * @param {string} postData is where we stringify all the data
 * @param {method} "put"
 * ```js
 *  const response = await authFetch(`${API_SOCIAL_URL}${action}/${postData.id}`, {
 *  method,
 *   body: JSON.stringify(postData),
 * });
 * return await response.json();
 * ```
 */
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
