/**
 * This will delete a post, grabbing the API and delete it finding the id in the API.
 * @param {string} response is where the data will be returned to
 * @param {string} postData is where we stringify all the data
 * @param {method} "delete"
 * ```js
 *  const response = await authFetch(`${API_SOCIAL_URL}${action}/${id}`, {
 *  method,
 *   body: JSON.stringify(postData),
 * });
 * return await response.json();
 * ```
 */

import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
const action = "/posts";
const method = "delete";
export async function removePost(id) {
  if (!id) {
    throw new Error("delete requires a ID");
  }
  const removePostURL = `${API_SOCIAL_URL}${action}/${id}`;
  const response = await authFetch(removePostURL, {
    method,
  });
  return await response.json();
}
