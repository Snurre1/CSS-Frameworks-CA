import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/posts";
const container = document.querySelector(".targetMe");
export async function filterPosts() {
  const response = await authFetch(`${API_SOCIAL_URL}${action}`);
  const result = await response.json();
  let num = document.querySelector("#num");
  // Handle number changes
  num.addEventListener("input", function () {
    // As a number
    let val = num.valueAsNumber;
    for (let i = 0; i < result.length; i++) {
      if (result[i].id === val) {
        container.innerHTML += `<div class="container border border-secondary border-1 w-75 bg-light">
                                    <div class="col-3 p-3">
                                        <img class="img-thumbnail border border-secondary" src="${result[i].media} alt="image from ${result[i].title}">
                                        </img>
                                        <p class="h6">${result[i].title}
                                        </p>
                                    </div>
                                    <div class="col-sm-9 p-3">
                                        <p>Your post: ${result[i].body}
                                        </p>
                                    </div>

                                    
                                </div>`;
      }
    }
  });
}
