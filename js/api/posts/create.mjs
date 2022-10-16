/**
 * This will create a post, grabbing the API and post it in the API.
 * @param {string} response is where the data will be returned to
 * @param {string} postData is where we stringify all the data
 * @param {method} "post"
 * ```js
 *  const response = await authFetch(`${API_SOCIAL_URL}${action}`, {
 *  method,
 *   body: JSON.stringify(postData),
 * });
 * return await response.json();
 * ```
 */

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
const action = "/posts";
const method = "post";
export async function createPost(postData) {
  const response = await authFetch(`${API_SOCIAL_URL}${action}`, {
    method,
    body: JSON.stringify(postData),
  });
  return await response.json();
}
