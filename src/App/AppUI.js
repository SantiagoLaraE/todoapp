import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodoCounter } from "../TodoCounter";
import { TodoForm } from "../TodoForm";
import { TodoItem } from "../TodoItem";
import { TodoList } from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import "./App.css";

function AppUI() {
  const { error, loading, searchedTodos, openedModal } = useContext(AppContext);
  return (
    <React.Fragment>
      <TodoCounter />

      <main className="container">
        <TodoSearch />
        <TodoList>
          {error && <div className="TodoItem">Error</div>}
          {loading && (
            <>
              <div className="TodoItem loading"></div>
              <div className="TodoItem loading"></div>
              <div className="TodoItem loading"></div>
              <div className="TodoItem loading"></div>
            </>
          )}
          {searchedTodos.map((todo, index) => (
            <TodoItem todo={todo} key={`TodoItem-${index}`} />
          ))}
        </TodoList>
        {openedModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}

        <CreateTodoButton />
      </main>
    </React.Fragment>
  );
}

export { AppUI };
