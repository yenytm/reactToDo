import { useState } from "react";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = (task) => {
    const newTodoList = [
      ...toDos,
      { id: toDos.length + 1, task: task, done: false },
    ];
    setToDos(newTodoList);
  };
  const deleteTodo = (id) => {
    const newTodoList = toDos.filter((item) => item.id != id);
    setToDos(newTodoList);
  };
  const onSubmit = e => {
    e.preventDefault();
  }
  return (
    <div className="first">
      <h1>Weekly To Do</h1>
      <form className="new-todo-cont"
      					onSubmit={onSubmit}
                >
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Add New ToDo"
        />
        <button
          onClick={() => {
            addTodo(newTodo);
            setNewTodo("");
          }}
        >
          ➕
        </button>
      </form>
      <ul className="todo-list">
        {toDos.map((item) => {
          return (
            <li key={item.id} className="todo-item">
              <input type="checkbox" value={item.done} />
              {/* <input type="text" value={item.task} onChange={() => addTodo(item.id)} /> */}
              <span className="todo-item-text">{item.task} </span>
              <button onClick={() => deleteTodo(item.id)} className="delete">
                ❌
              </button>

            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
