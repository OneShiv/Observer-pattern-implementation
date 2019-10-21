import Observer from "../lib/Observer";
class TodoList extends Observer {
  createMarkup(state) {
    return `<ul>
    ${state.todos
      .map(list => {
        return `<li index=${list.index}>${list.text}</li>`;
      })
      .join("\n")}
    </ul>`;
  }
  render(state, selector = "app") {
    debugger;
    let createMarkup = this.createMarkup(state);
    var parentEl = document.getElementById(selector);
    parentEl.innerHTML = createMarkup;
  }
  update(state) {
    this.render(state, "todo-list-container");
  }
}

export default TodoList;
