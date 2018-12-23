const hideListButton = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("button.addItemButton");
const addItemInput = document.querySelector("input.addItemInput");
const listedItems = document.querySelector(".listedItems");



button.addEventListener("click", () => {
                          p.textContent = input.value + ":";
                        }
                       );


hideListButton.addEventListener("click", () => {
                                if (listDiv.style.display !== "none") {
                                  listDiv.style.display = "none";
                                  hideListButton.textContent = "View List";
                                }
                               else {listDiv.style.display = "block";
                                     hideListButton.textContent = "Hide List";
                               }
                                }
                               );


addItemButton.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = addItemInput.value;
  listedItems.appendChild(li);
                               });



























