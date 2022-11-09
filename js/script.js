let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addToDo);

function addToDo() {
  let toDoList = document.querySelector("#todolistContainer");
  let toDoListInp = document.querySelector("#toDoInp");

  let todoContainer = document.createElement("div");
  todoContainer.classList = "todolistContent";

  let newToDoTitle = document.createElement("h3");
  newToDoTitle.textContent = toDoListInp.value;

  let btnsContainer = document.createElement("div");
  btnsContainer.classList = "contentBtnsContainer";

  let editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.addEventListener("click", editValue);

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", delContent);

  let doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", doneToDo);

  // checks if the input value is not empty
  if (toDoListInp.value !== "") {
    // checks the child element and disables the input and button if equals to 5
    if (toDoList.childElementCount == 5) {
      addBtn.setAttribute("disabled", "");
      toDoListInp.setAttribute("disabled", "");
    }

    toDoList.appendChild(todoContainer);
    todoContainer.appendChild(newToDoTitle);
    todoContainer.appendChild(btnsContainer);
    btnsContainer.appendChild(editBtn);
    btnsContainer.appendChild(delBtn);
    btnsContainer.appendChild(doneBtn);
  } else {
    // Do nothing if empty
  }

  function editValue() {
    let formEdit = document.createElement("form");
    formEdit.classList = "editForm";

    let editInp = document.createElement("input");
    editInp.type = "text";
    editInp.placeholder = newToDoTitle.textContent;
    editInp.setAttribute("required", "");

    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", saveEdit);

    let cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", cancelEdit);

    todoContainer.insertBefore(formEdit, todoContainer.children[1]);
    formEdit.appendChild(editInp);
    formEdit.appendChild(saveBtn);
    formEdit.appendChild(cancelBtn);

    editBtn.style.display = "none";
    delBtn.style.display = "none";
    doneBtn.style.display = "none";

    function saveEdit() {
      if (editInp.value !== "") {
        newToDoTitle.textContent = editInp.value;
        formEdit.remove();
        editBtn.style.display = "block";
        delBtn.style.display = "block";
        doneBtn.style.display = "block";
      } else {
        // Do Nothing
      }
    }

    function cancelEdit() {
      formEdit.remove();
      editBtn.style.display = "block";
      delBtn.style.display = "block";
      doneBtn.style.display = "block";
    }
  }

  function delContent() {
    todoContainer.remove();
    if (toDoList.childElementCount < 6) {
      addBtn.removeAttribute("disabled", "");
      toDoListInp.removeAttribute("disabled", "");
    }
  }

  function doneToDo() {
    let checkIcon = document.createElement("i");
    checkIcon.classList = "fa-solid fa-check";

    newToDoTitle.appendChild(checkIcon);
    btnsContainer.firstChild.remove();
    btnsContainer.lastChild.remove();
    todoContainer.style.opacity = "0.6";
  }
}
