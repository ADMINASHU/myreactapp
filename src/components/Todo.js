import React from "react";
import "./todo.css";

function Todo({ todo, index, setTodo, ToDos }) {

  function deleteTodo() {
    return ToDos.filter((doList) => doList.id !== todo.id);
  }

  function updateTodo() {
    return ToDos.map((doList2) => {
      if (doList2.id === todo.id) {
        return { ...doList2, status: "Completed" }
      }
      return doList2
    })
  }

  return (
    <div className="todo">
      <p>{index + 1}</p>
      <p>{todo.todoName}</p>
      <button onClick={() => setTodo(() => updateTodo())}>{todo.status}</button>
      <button onClick={() => setTodo(() => deleteTodo())}>Delete</button>
    </div>
  );
}

export default Todo;
