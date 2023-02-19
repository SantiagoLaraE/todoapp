import React, { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext(null);

const AppProvider = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const {
    items: todos,
    saveItems: setTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [openedModal, setOpenedModal] = useState(false);

  let searchedTodos =
    searchValue !== ""
      ? todos.filter((todo) =>
          todo.text.toLowerCase().includes(searchValue.toLowerCase())
        )
      : todos;

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const findTodoIndex = (todo) => {
    const index = todos.findIndex((a) => a === todo);
    return index;
  };

  const onCompleteTodo = (todo) => {
    const todoIndex = findTodoIndex(todo);
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].completed = !updatedTodos[todoIndex].completed;
    setTodos(updatedTodos);
  };

  const onDeleteTodo = (todo) => {
    const todoIndex = findTodoIndex(todo);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoIndex, 1);
    setTodos(updatedTodos);
  };

  const createTodo = (todoName) => {
    const newTodo = { text: todoName, completed: false };
    const updatedTodos = [...todos];
    updatedTodos.push(newTodo);
    setTodos(updatedTodos);
  };
  return (
    <AppContext.Provider
      value={{
        error,
        loading,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        onCompleteTodo,
        onDeleteTodo,
        createTodo,
        searchedTodos,
        openedModal,
        setOpenedModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
