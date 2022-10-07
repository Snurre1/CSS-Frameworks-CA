const action = "https://nf-api.onrender.com/api/v1/social/auth/register";
const method = "post";

export async function register(profile) {
  const body = JSON.stringify(profile);
  const response = await fetch(action, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });
  const result = await response.json();
  console.log(result);
}
