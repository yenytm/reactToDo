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

  const updateTask = (id, task) => {
    const newToDos = toDos.map((todo)=>{
      if (todo.id === id) {
        return {...todo, task}
      } else {
        return item
      }
    })

    setToDos(newToDos)
  }

  return (
    <div className="first">
      <h1>Weekly To Do</h1>
      <form id="toDoInput" className="new-todo-cont" onSubmit={e => e.preventDefault()}>
        <input
          id="inputTodo"
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

              <input className="todo-item-text" type="text" value={item.task} onChange={(e)=> updateTask(item.id, e.target.value)}/>

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
