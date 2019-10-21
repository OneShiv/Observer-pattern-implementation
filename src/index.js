import "./styles.css";
import AddTodo from "./components/AddTodo";
import TodoCounter from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import State from "./lib/State";
import todos from "./data/todos";

const Appstate = new State();
const Todolist = new TodoList();
const Addtodo = new AddTodo(Appstate);
const Todocounter = new TodoCounter();

Appstate.update({ todos });
Appstate.addObserver(Todolist);
Appstate.addObserver(Todocounter);
Todolist.render(Appstate.get(), "todo-list-container");
Addtodo.render("add-todo");
Todocounter.render(Appstate.get(), "todo-counter");
