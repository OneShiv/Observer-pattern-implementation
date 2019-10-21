import Observer from "../lib/Observer";
class TodoCounter extends Observer {
  createMarkup(state) {
    return `<div>Total todos:${state.todos.length}</div>`;
  }
  render(state, selector = "app") {
    let createMarkup = this.createMarkup(state);
    var parentEl = document.getElementById(selector);
    parentEl.innerHTML = createMarkup;
  }
  update(state) {
    this.render(state, "todo-counter");
  }
}
export default TodoCounter;
