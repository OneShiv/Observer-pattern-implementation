class AddTodo {
  constructor(state = {}) {
    this.appState = state;
  }
  createMarkup(state) {
    return `<div class="form-container">
    <input id="todo-input" type="text" placeholder="Enter Todo"/>
    <button id="add">Add Todo</button>
    </div>`;
  }
  render(selector = "app") {
    const createMarkup = this.createMarkup(this.appState);
    document.getElementById(selector).innerHTML = createMarkup;
    this.bindEvents();
  }
  bindEvents() {
    var self = this;
    return document
      .getElementById("add")
      .addEventListener("click", function(e) {
        let inputElValue = document.getElementById("todo-input").value;
        if (inputElValue.trim()) {
          let state = self.appState.get();
          let todos = state.todos.concat({
            text: inputElValue,
            id: state.todos.length + 1,
            checked: false
          });
          document.getElementById("todo-input").value = "";
          self.appState.update({
            ...state,
            todos
          });
        }
      });
  }
}

export default AddTodo;
