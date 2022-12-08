import ReactDOM from "react-dom";
import Button from "../Button/Button";
import { BackdropWrapper, ModalWrapper } from "./ModalsStyles";

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <BackdropWrapper onClick={props.onCloseModal} />
          <ModalWrapper>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <Button onClick={props.onCloseModal}>Close</Button>
          </ModalWrapper>
        </>,
        portalElement
      )}
    </>
  );
};

export default Modal;
