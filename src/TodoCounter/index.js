import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(AppContext);
  return (
    <header className="container">
      <span className="yellow circle circle-01"></span>
      <span className="green circle circle-02"></span>
      <span className="pink circle circle-03"></span>
      <div className="TodoCounter">
        <h1 className="TodoCounter_title">TODO APP</h1>
        <div className="TodoCounter_taskCounter">
          <span></span>
          {totalTodos
            ? `${completedTodos} tasks completed of ${totalTodos}`
            : "No tasks created"}
          <span></span>{" "}
        </div>
      </div>
    </header>
  );
}

export { TodoCounter };
