"use strict";
const addMessage = document.querySelector(".task__input");
const addButton = document.querySelector(".task__btn");
const todo = document.querySelector(".task__out-tasks");

let count = 2000;

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMassages();
}

function addTask() {
  const newTodo = {
    todo: addMessage.value,
    id: todoList.length,
  };

  if (!addMessage.value == "") {
    todoList.push(newTodo);
    displayMassages();
    localStorage.setItem("todo", JSON.stringify(todoList));

    addMessage.value = "";
  }
}

addButton.addEventListener("click", addTask);

function displayMassages() {
  let displayMassage = "";
  todoList.forEach(function (item, i) {
    displayMassage += `
    <div class="task__card" id="item__${i}">
      <p class="task__text">${item.todo}</p>
      <div class="task__remove" id="${i}"></div>
    </div>
    `;

    todo.innerHTML = displayMassage;
  });

  if (todoList.length >= 100) {
    addMessage.classList.add("error");
  } else {
    addMessage.classList.remove("error");
  }

  removeTask();
}

function removeTask() {
  const removeBtn = document.querySelectorAll(".task__remove");

  removeBtn.forEach(function (index, i) {
    index.addEventListener("click", function (e) {
      if (e.target.id == i) {
        localStorage.setItem("todo", JSON.stringify(todoList.splice([i], 1)));
        displayMassages();
      }
    });
  });
}

addMessage.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

