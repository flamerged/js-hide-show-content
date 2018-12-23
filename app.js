const hideListButton = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("button.addItemButton");
const addItemInput = document.querySelector("input.addItemInput");
const listedItems = document.querySelector(".listedItems");
const removeItemButton = document.querySelector("button.removeItemButton");
const listItem = document.getElementsByTagName("li");

for (let i = 0; i < listItem.length; i++) {
  
listItem[i].addEventListener("mouseover", () => {
                          listItem[i].textContent = listItem[i].textContent.toUpperCase();
                          });

listItem[i].addEventListener("mouseout", () => {
                          listItem[i].textContent = listItem[i].textContent.toLowerCase();
                          });
}

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
  addItemInput.value = "";
                               });
//removes last child of ul node.
removeItemButton.addEventListener("click", () =>{
                                  //Teacher used this:
                                //  let li = document.querySelector("li:last-child");
                                  //I use this as it protects other li elements on the page.
                                  listedItems.removeChild(listedItems.lastChild);
                                  });

























