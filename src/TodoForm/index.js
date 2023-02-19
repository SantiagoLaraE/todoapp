import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "./TodoForm.css";

function TodoForm() {
    const {createTodo, setOpenedModal} = useContext(AppContext);
  const [todoInput, setTodoInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const createTodoHandler = (e) => {
    e.preventDefault();
    const value = todoInput.trim();
    if (value !== "") {
        createTodo(todoInput);
        setOpenedModal(false);
    } else {
      setInputError("This field can't be empty");
    }
  };
  const todoInputHandler = (e) => {
    setTodoInput(e.target.value);
    setInputError(false);
  };
  return (
    <form className="TodoForm" onSubmit={createTodoHandler}>
      <h2 className="TodoForm_title">Create TODO</h2>
      <input
        type="text"
        placeholder="Enter your TODO"
        className="TodoForm_input"
        value={todoInput}
        onInput={todoInputHandler}
      />
      {inputError && (
        <span className="TodoForm_error">This field can't be empty</span>
      )}
      <button type="submit" className="TodoForm_btn">
        Create
      </button>
    </form>
  );
}

export { TodoForm };
