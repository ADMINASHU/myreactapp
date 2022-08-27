import React, { useState } from "react";
import "./App.css";
import "./components/Todo";
import Todo from "./components/Todo";

function App() {
  const [ToDos, setTodo] = useState(() => []);
  const [Name, setName] = useState("");

  function creteTodo() {
    setTodo((oldTodo) => [...oldTodo, addNewTodo()]);
    setName("");
  }

  function addNewTodo() {
    return {
      id: Date.now(),
      todoName: Name,
      status: "pending",
    };
  }

  return (
    <div className="App">
      <div id="add-new">
        <input
          id="inp-create"
          type="text"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter ToDo"
        ></input>
        <button id="btn-create" onClick={creteTodo}>
          Create
        </button>
      </div>
      <div className="todo-list">
        <h1>My ToDo List</h1>
        {ToDos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            index={index}
            setTodo={setTodo}
            ToDos={ToDos}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
