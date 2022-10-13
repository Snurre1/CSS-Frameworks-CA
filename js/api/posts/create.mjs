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
