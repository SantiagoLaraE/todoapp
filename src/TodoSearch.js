import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <form className="TodoSearch_container" action="">
      <input className="TodoSearch" type="text" placeholder="Search tasks" />
      <button type="submit" className="TodoSearch_btn">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.77061 9.61914C7.84681 10.3581 6.67501 10.8 5.4 10.8C2.41766 10.8 0 8.38234 0 5.4C0 2.41766 2.41766 0 5.4 0C8.38234 0 10.8 2.41766 10.8 5.4C10.8 6.67501 10.3581 7.84681 9.61914 8.77061L11.8243 10.9757C12.0586 11.2101 12.0586 11.59 11.8243 11.8243C11.59 12.0586 11.2101 12.0586 10.9757 11.8243L8.77061 9.61914ZM1.2 5.4C1.2 3.0804 3.0804 1.2 5.4 1.2C7.7196 1.2 9.6 3.0804 9.6 5.4C9.6 6.53157 9.15251 7.55862 8.42483 8.31383C8.4043 8.32962 8.38455 8.34692 8.36574 8.36574C8.34692 8.38455 8.32962 8.4043 8.31383 8.42483C7.55862 9.15251 6.53157 9.6 5.4 9.6C3.0804 9.6 1.2 7.7196 1.2 5.4Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
}

export { TodoSearch };
