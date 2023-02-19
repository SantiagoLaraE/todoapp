import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { AppContext } from "../context/AppContext";
import "./Modal.css";

function Modal({ children }) {
  const { setOpenedModal } = useContext(AppContext);
  return ReactDOM.createPortal(
    <aside className="Modal">
      <div className="Modal_container container">
        <button
          type="button"
          onClick={() => setOpenedModal(false)}
          aria-label="Close Modal"
          className="Modal_closer TodoItem_btn TodoItem_btn-delete"
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
        {children}
      </div>
    </aside>,
    document.getElementById("modal")
  );
}

export { Modal };
