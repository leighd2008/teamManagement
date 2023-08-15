import React from "react";

import "./Modal.scss";

const Modal = (props) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: props.show ? "translateY(-70vh)" : "translateY(-600vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <div className="modal-body">
        <span>{props.children}</span>
      </div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
