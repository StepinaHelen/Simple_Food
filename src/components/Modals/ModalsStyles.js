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
  background-color: ${({ theme }) => theme.colors.consantColor};
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
export const BtnContainer = styled.button`
  background-color: transparent;
  border: none;
  position:absolute;
  top:0;
  right:-5px;
  .close {
    height: 40px;
    width: 40px;
    cursor: pointer;
    :hover {
      fill: ${({ theme }) => theme.colors.secondary};
    }
`;

export const IconWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  .check {
    height: 40px;
    width: 40px;
    fill: ${({ theme }) => theme.colors.consantColor};
  }
`;
