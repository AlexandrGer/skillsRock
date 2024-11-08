const buttonAdd = document.querySelector(".button-add");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

function addTask() {
  const task = input.value;
  if (task !== "") {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const text = document.createElement("p");
    const buttonDel = document.createElement("button");

    checkbox.addEventListener("change", function () {
      text.classList.toggle("completed", checkbox.checked);
    });

    buttonDel.textContent = "Удалить";
    buttonDel.classList.add("delete");
    buttonDel.addEventListener("click", (e) => {
      e.stopPropagation();
      list.removeChild(li);
    });

    text.textContent = task;
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(buttonDel);
    list.appendChild(li);
    input.value = "";
  }
}

buttonAdd.addEventListener("click", addTask);
