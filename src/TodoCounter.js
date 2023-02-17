import React from "react";
import "./TodoCounter.css";

function TodoCounter() {
  return (
    <header className="container">
      <span className="green circle circle-01"></span>
      <span className="yellow circle circle-02"></span>
      <span className="pink circle circle-03"></span>
      <div className="TodoCounter">
        <h1 className="TodoCounter_title">TODO APP</h1>
        <div className="TodoCounter_taskCounter">
          <span></span> 5 tasks completed of 10 <span></span>{" "}
        </div>
      </div>
    </header>
  );
}

export { TodoCounter };
