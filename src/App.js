import React from "react";
import "./App.css";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  {
    text: "Cortar cebolla",
    completed: false,
  },
  {
    text: "Limpiar Tenis ",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
  {
    text: "Cocinar",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      <main className="container">
        <TodoSearch />
        <TodoList>
          {todos.length ? (
            todos.map((todo, index) => (
              <TodoItem text={todo.text} key={`TodoItem-${index}`} />
            ))
          ) : (
            <p>No hay tareas creadas</p>
          )}
        </TodoList>

        <CreateTodoButton />
      </main>
    </React.Fragment>
  );
}

export default App;
