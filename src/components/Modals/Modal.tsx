import { useEffect } from "react";
import { createPortal } from "react-dom";
import {
  BackdropWrapper,
  ModalWrapper,
  BtnContainer,
  IconWrapper,
} from "./ModalsStyles";
import { IModalProps } from "common/interfaces";
import Icons from "components/SvgComponent/SvgComponent";

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

const Modal = (props: IModalProps) => {
  const el = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  });

  return createPortal(
    <BackdropWrapper onClick={props.onCloseModal}>
      <ModalWrapper onClick={(e) => e.stopPropagation}>
        <BtnContainer onClick={props.onCloseModal}>
          <Icons name="close" classes={"close"} />
        </BtnContainer>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <IconWrapper>
          <Icons name="check" classes={"check"} />
        </IconWrapper>
      </ModalWrapper>
    </BackdropWrapper>,
    el
  );
};

export default Modal;
