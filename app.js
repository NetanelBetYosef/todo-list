const input = document.getElementById("input");
const list = document.getElementById("list");
const button = document.getElementById("button");
const alertParagraph = document.getElementById("alertParagraph");

let li;
let enter = input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});

function inputHandler() {
  if (input.value === "") {
    alertParagraph.innerText = "צריך לכתוב משהו";
  } else {
    li = document.createElement("li");
    li.innerHTML = input.value;
    li.classList.add("item");
    list.appendChild(li);
    alertParagraph.innerText = "";
  }
  input.value = "";
  saveData();
}

function deleteTask() {
  list.addEventListener("click", (e) => {
    e.target.remove();
    saveData();
  });
}

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function getData() {
  list.innerHTML = localStorage.getItem("data");
}

deleteTask();
getData();
