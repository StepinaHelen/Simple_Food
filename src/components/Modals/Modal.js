import { useEffect } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button";
import { BackdropWrapper, ModalWrapper } from "./ModalsStyles";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
// const portalElement = document.getElementById("overlay");
document.body.appendChild(modalRoot);

const Modal = (props) => {
  const el = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => modalRoot.removeChild(el);
  });

  return createPortal(
    <BackdropWrapper onClick={props.onCloseModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <Button onClick={props.onCloseModal}>Close</Button>
      </ModalWrapper>
    </BackdropWrapper>,
    el
  );
};

export default Modal;
