import * as storage from "../api/storage/index.mjs";
const action = "https://nf-api.onrender.com/api/v1/social/auth/login";
const method = "post";

export async function login(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(action, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);
}
