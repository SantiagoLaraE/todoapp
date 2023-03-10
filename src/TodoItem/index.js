import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./TodoItem.css";

function TodoItem({ todo }) {
  const { onCompleteTodo, onDeleteTodo } = useContext(AppContext);
  return (
    <li className={`TodoItem ${todo.completed ? "completed" : ""}`}>
      <button
        aria-label="Complete item"
        className="TodoItem_btn TodoItem_btn-check"
        onClick={() => onCompleteTodo(todo)}
      >
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.8047 0.195262C12.0651 0.455612 12.0651 0.877722 11.8047 1.13807L4.4714 8.4714C4.21106 8.73175 3.78894 8.73175 3.5286 8.4714L0.195262 5.13807C-0.0650874 4.87772 -0.0650874 4.45561 0.195262 4.19526C0.455612 3.93491 0.877722 3.93491 1.13807 4.19526L4 7.05719L10.8619 0.195262C11.1223 -0.0650874 11.5444 -0.0650874 11.8047 0.195262Z"
            fill="white"
          />
        </svg>
      </button>
      <p>{todo.text}</p>
      <button
        aria-label="Delete Item"
        className="TodoItem_btn TodoItem_btn-delete"
        onClick={() => onDeleteTodo(todo)}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.32737 11.6726C0.508166 11.8534 0.801294 11.8534 0.98209 11.6726L6.00001 6.65471L11.0179 11.6726C11.1987 11.8534 11.4919 11.8534 11.6727 11.6726C11.8534 11.4918 11.8534 11.1987 11.6727 11.0179L6.65473 5.99999L11.6726 0.982091C11.8534 0.801295 11.8534 0.508166 11.6726 0.32737C11.4918 0.146574 11.1987 0.146573 11.0179 0.327369L6.00001 5.34527L0.982112 0.327371C0.801316 0.146575 0.508187 0.146575 0.327391 0.327371C0.146595 0.508167 0.146594 0.801295 0.32739 0.982091L5.34529 5.99999L0.327369 11.0179C0.146573 11.1987 0.146573 11.4918 0.32737 11.6726Z"
            fill="white"
          />
        </svg>
      </button>
    </li>
  );
}

export { TodoItem };
