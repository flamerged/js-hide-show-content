const hideListButton = document.getElementById("toggleList");
const listDiv = document.querySelector(".list");
const input = document.querySelector("input.description");
const p = document.querySelector("p.description");
const button = document.querySelector("button.description");
const addItemButton = document.querySelector("button.addItemButton");
const addItemInput = document.querySelector("input.addItemInput");
const listedItems = document.querySelector(".listedItems");
const removeItemButton = document.querySelector("button.removeItemButton");
const liElements = listedItems.querySelectorAll("li");

function attackListItemButtons(li) {
  let up = document.createElement("button");
  up.textContent = "Up";
  up.className = "upButton";
  li.appendChild(up);
  
  let down = document.createElement("button");
  down.textContent = "Down";
  down.className = "downButton";
  li.appendChild(down);
  
  let remove = document.createElement("button");
  remove.textContent = "Remove";
  remove.className = "removeButton";
  li.appendChild(remove);
  
  return li;
}

for (let i = 0; i < liElements.length; i++){
  attackListItemButtons(liElements[i]);
}

listDiv.addEventListener("click", (event) => {
                          if ( event.target.className === "removeButton" ) {
                            let li = event.target.parentNode;
                            let ul = li.parentNode;
                            ul.removeChild(li);
                          }
  if ( event.target.className === "upButton" ) {
                            let li = event.target.parentNode;
                            let previousSibling = li.previousElementSibling;
                            let ul = li.parentNode;
                            if(previousSibling){
                            ul.insertBefore(li,previousSibling);}
                          }
  if ( event.target.className === "downButton" ) {
                            let li = event.target.parentNode;
                            let nextSibling = li.nextElementSibling;
                            let ul = li.parentNode;
                            if(nextSibling){
                            ul.insertBefore(li,nextSibling.nextElementSibling);}
                          }
                          });

//code from previous videos:

//listDiv.addEventListener("mouseover", (event) => {
//                          if ( event.target.tagName === "LI" ) {
//                          event.target.textContent = event.target.textContent.toUpperCase();
//                          }
//                          });
//
//
//listDiv.addEventListener("mouseout", (event) => {
//                          if ( event.target.tagName === "LI" ) {
//                          event.target.textContent = event.target.textContent.toLowerCase();
//                          }
//                          });


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
  li.textContent = addItemInput.value
  attackListItemButtons(li);
  listedItems.appendChild(li);
  addItemInput.value = "";
                               });
//removes last child of ul node. Commented out due to not being used any more as every list element has it's own remove button.
//removeItemButton.addEventListener("click", () =>{
//                                  //Teacher used this:
//                                //  let li = document.querySelector("li:last-child");
//                                  //I use this as it protects other li elements on the page.
//                                  listedItems.removeChild(listedItems.lastChild);
//                                  });

























