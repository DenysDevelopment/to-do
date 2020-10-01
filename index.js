const taskInput = document.querySelector(".task__input");
const taskCard = document.querySelector(".task__card");
const taskBtn = document.querySelector(".task__btn");
const taskOutTasks = document.querySelector(".task__out-tasks");
const taskColor = document.querySelector(".task__color");

const addTask = () => {
  if (taskInput.value === "") {
    console.log("foo");
  } else {
    const colorCard = taskColor.value;

    localStorage.setItem(
      "addTask",
      (taskOutTasks.innerHTML += `
        <div class="task__card" style="border-left: 2px solid ${colorCard}">
          <div class="task__done"></div>
          <p class="task__text">
            ${taskInput.value}
          </p>
          <div class="task__remove"></div>
        </div>
      `)
    );

    taskInput.value = "";
  }
};

const getItemLocal = localStorage.getItem("addTask");

taskOutTasks.innerHTML = getItemLocal;

taskBtn.addEventListener("click", addTask);
