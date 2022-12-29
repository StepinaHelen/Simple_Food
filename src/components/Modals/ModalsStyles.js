import styled from "styled-components";

export const BackdropWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.btnColor};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 460px;
  width: 100%;
  animation: slide-down 300ms ease-out forwards;
  text-align: center;
  z-index: 100;
`;
