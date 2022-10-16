import { API_SOCIAL_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/profiles";

const nameControl = document.getElementById("profile");
const container = document.querySelector(".targetContainer");
export async function searchProfiles() {
  const response = await authFetch(`${API_SOCIAL_URL}${action}`);
  const result = await response.json();
  nameControl.addEventListener("keyup", handleNameControlInput);
  function handleNameControlInput(event) {
    const inputValue = event.currentTarget.value.toLowerCase();
    const newArray = result.filter((user) => {
      if (user.name.toLowerCase().startsWith(inputValue)) {
        return true;
      }
    });
    container.innerHTML = "";
    for (let i = 0; i < newArray.length; i++) {
      console.log(newArray[i]);
      container.innerHTML += `<div class="container border border-secondary border-1 w-75 bg-light">
                                    <div class="col-3 p-3">
                                        <p class="h6">Name: ${newArray[i].name}
                                        </p>
                                    </div>
                                    <div class="col-sm-9 p-3">
                                        <p>Their email: ${newArray[i].email}
                                        </p>
                                    </div>
                                </div>`;
    }
  }
}
