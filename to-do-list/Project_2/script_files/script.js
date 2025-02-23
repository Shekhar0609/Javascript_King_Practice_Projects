const toDoContainerEl = document.querySelector(".to-do-container");
const inputTaskEl = document.querySelector(".input-task");
const listContainerEl = document.querySelector(".list-container");

// debugger
// Initialize taskListArrays from localStorage, or set an empty array if no data exists
taskListArrays = JSON.parse(localStorage.getItem("taskListLocal")) || [];

// Loop through each task and add it to the DOM (if task data exists)
taskListArrays.forEach((taskLocal) => {
  toDoList(taskLocal);
});

// Add event listener to form for adding new tasks
toDoContainerEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList(task) {
  let inputTask = inputTaskEl.value;

  // If taskLocal is provided (i.e., it's from localStorage), use its name
  if (task) {
    inputTask = task.name;
  }

  // Create the task list element
  let taskListEls = document.createElement("li");
  taskListEls.classList.add("task-list");

  // Apply completed class if task is marked as completed (from localStorage)
  if (task && task.isChecked) {
    taskListEls.classList.add("completed");
  }

  // Append the task list to the list container
  listContainerEl.appendChild(taskListEls);

  // Create task content element
  let taskContent = document.createElement("p");
  taskContent.classList.add("task-content");
  taskContent.innerText = inputTask;

  // Append task content to task list
  taskListEls.appendChild(taskContent);

  // Create check buttons
  let checkBtn = document.createElement("div");
  checkBtn.innerHTML = `<i class="fa-regular fa-square-check unchecked"></i>
                <i class="fa-solid fa-square-check checked"></i>`;
  taskListEls.appendChild(checkBtn);

  // Create trash button
  let trashBtn = document.createElement("div");
  trashBtn.innerHTML = `<i class="fa-solid fa-trash trash"></i>`;
  taskListEls.appendChild(trashBtn);

  // Clear the input after adding the task
  inputTaskEl.value = "";

  // Add event listeners for check/uncheck and delete
  checkBtn.addEventListener("click", () => {
    taskListEls.classList.toggle("completed");
    updateLocalStorage();
  });

  trashBtn.addEventListener("click", () => {
    const taskContent = taskListEls.querySelector(".task-content").innerText;
    taskListArrays = taskListArrays.filter((task) => task.name !== taskContent);
    taskListEls.remove(); // Remove task from DOM
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const tasklistsElmts = document.querySelectorAll(".task-list");

  // Reset the array for localStorage
  taskListArrays = [];

  tasklistsElmts.forEach((taskListlocal) => {
    const taskContent = taskListlocal.querySelector(".task-content");
    taskListArrays.push({
      name: taskContent.innerText,
      isChecked: taskListlocal.classList.contains("completed"), // Check if task is marked as completed
    });
  });

  // Save the task list to localStorage
  localStorage.setItem("taskListLocal", JSON.stringify(taskListArrays));
}
