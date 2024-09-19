const name_input = document.querySelector("#name-input");
const contact_input = document.querySelector("#contact-input");
const add_btn = document.querySelector("#add-btn");

const table = document.querySelector(".name-container");
const table2 = document.querySelector(".contact-container");
const table3 = document.querySelector(".action-container");
const table4 = document.querySelector(".action-container2");
const table5 = document.querySelector(".action-container3");
const alltable = document.querySelector(".all-container");

const add_btn2 = document.querySelector("#add-btn2");
const dBtn = document.querySelector(".delet");
const eBtn = document.querySelector(".edit");

let buttonEl = document.createElement("button");
let edBtn = document.createElement("button");
let newEle = document.createElement("ul");
let newEli2 = document.createElement("ul");

add_btn.addEventListener("click", () => {
  if (name_input.value == "" || contact_input.value == "") {
    if (contact_input.value == "") alert("please enter your Contact");
    if (name_input.value == "") alert("please enter your Name");
  } else {
    let newEle = document.createElement("ul");

    newEle.className = "name-tr";
    newEle.innerHTML = `${name_input.value}  `;
    table.appendChild(newEle);
    name_input.value = "";
    newEle.style.color = "white";

    let buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Detet";
    buttonEl.className = "delet";

    table3.appendChild(buttonEl);

    let edBtn = document.createElement("button");
    edBtn.innerText = "EDIT";
    edBtn.className = "edit";
    table4.appendChild(edBtn);

    let upBtn = document.createElement("button");
    upBtn.innerHTML = "Update";
    table5.appendChild(upBtn);
    upBtn.className = "update";

    upBtn.addEventListener("click", (e) => {
      if (upBtn === e.target) {
        alert("Do you want to update info");

        newEle.textContent = name_input.value;
        newEli2.textContent = contact_input.value;
      }
    });

    edBtn.addEventListener("click", () => {
      console.log(newEle.value);

      name_input.value = `${newEle.innerText}`;
      contact_input.value = `${newEli2.innerText}`;
      // let inp1 = document.createElement("input");
      // inp1.placeholder = "Enter your number";
      // inp1.type = "name";
      // inp1.innerHTML = "abc";

      // table.appendChild(inp1);
      // console.log("sdafhas");
    });

    let newEli2 = document.createElement("ul");
    newEli2.innerHTML = `${contact_input.value}`;
    table2.appendChild(newEli2);
    contact_input.value = "";
    newEli2.style.color = "white";

    buttonEl.addEventListener("click", () => {
      newEle.remove(newEle);
      newEli2.remove(newEli2);
      buttonEl.remove(buttonEl);
      edBtn.remove(edBtn);
      upBtn.remove(upBtn);
      // input.style.display = "none
    });
  }
});

// eBtn.onclick = console.log("you are try");
// buttonEl.onclick = function () {
//   table.remove(newEle);
//   table2.remove(newEli2);
//   this.remove = false;
// };
