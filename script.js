const name_input = document.querySelector("#name-input");
const contact_input = document.querySelector("#contact-input");
const add_btn = document.querySelector("#add-btn");

const edit = document.querySelector("#edit");
const delet = document.querySelector("#delet");
const table = document.querySelector(".name-container");
const table2 = document.querySelector(".contact-container");
const table3 = document.querySelector(".action-container");
const table4 = document.querySelector(".action-container2");

const add_btn2 = document.querySelector("#add-btn2");
const dBtn = document.querySelector(".delet");

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
    let buttonEl = document.createElement("button");
    buttonEl.innerHTML = "Detet";
    buttonEl.className = "delet";

    table3.appendChild(buttonEl);

    let edBtn = document.createElement("button");
    edBtn.innerHTML = "EDIT";
    edBtn.className = "edit";
    table4.appendChild(edBtn);

    let newEli2 = document.createElement("ul");
    newEli2.innerHTML = `${contact_input.value}`;
    table2.appendChild(newEli2);
    contact_input.value = "";
  }
});
