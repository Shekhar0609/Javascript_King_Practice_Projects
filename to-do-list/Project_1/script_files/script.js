const toDocontainer = document.querySelector(".to-do-container");
const inputTask = document.querySelector(".input-task");
const ulEl = document.querySelector(".task-list");

let taskList = JSON.parse(localStorage.getItem("taskList"));

if (taskList) {
  taskList.forEach((task) => {
    toDoList(task);
  });
}

toDocontainer.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
  toDoList();
});

function toDoList(task) {
  let newTask = inputTask.value;

  if (task) {
    newTask = task.name;
  }

  let newTasklist = document.createElement("li");
  if (task && task.checked) {
    newTasklist.classList.add("checked");
  }

  newTasklist.innerText = newTask;
  newTasklist.classList.add("entered-task");

  ulEl.appendChild(newTasklist);

  let checkBtn = document.createElement("div");
  checkBtn.innerHTML = `
  <i class="fa-solid fa-square-check"></i>
  `;

  newTasklist.appendChild(checkBtn);

  let trashBtn = document.createElement("div");
  trashBtn.innerHTML = `
  <i class="fa-solid fa-trash"></i>
  `;

  newTasklist.appendChild(trashBtn);

  inputTask.value = "";

  checkBtn.addEventListener("click", () => {
    newTasklist.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtn.addEventListener("click", () => {
    newTasklist.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEles = document.querySelectorAll("li");
  taskList = [];
  liEles.forEach((listEl) => {
    taskList.push({
      task: listEl.innerText,
      checked: listEl.classList.contains("checked"),
    });
  });

  localStorage.setItem("taskLists", JSON.stringify(taskList));
}
