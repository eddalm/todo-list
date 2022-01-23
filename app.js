const newTodoInput = document.getElementById("new-todo");
const todoList = document.getElementById("todo-list");

class Todo {
  constructor(text) {
    this.id = Date.now();
    this.text = text;
  }
}

const TODOS = [];

const showTodosUI = () => {
  let todosLi = "";
  TODOS.forEach((todo) => {
    todosLi += `
    <li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label>${todo.text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Rule the web">
    </li>
    `;
  });

  todoList.innerHTML = todosLi;
};

newTodoInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    TODOS.push(new Todo(event.target.value));
    
    let todosLi = "";
    TODOS.forEach((todo) => {
      todosLi += `
      <li>
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>${todo.text}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="Rule the web">
      </li>
      `;
    });
  
    todoList.innerHTML = todosLi;
  }
});

// Nuevo cambio Edward
