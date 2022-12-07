import styled from "styled-components";

export const Btn = styled.button`
  background-color: #6b068a;
  padding: 5px 27px;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border-radius: 15px;
  font-size: 24px;
  line-height: 28px;
  border: none;
  outline: none;
  cursor: pointer;
  &.login {
    padding: 9px 51px;
  }
  &:disabled {
    opacity: 0.7;
  }
  &:hover {
    background-color: #c913d6;
  }
  &.categories {
    margin-bottom: 12px;
    padding: 4px 12px;
    margin-right: 12px;
    @media screen and (min-width: 768px) {
      padding: 8px 23px;
      margin-right: 24px;
    }
  }

  &.cardItem {
    font-size: 16px;
    line-height: 19px;
    padding: 5px 27px;
  }

  &.order {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.goToOrder {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 54px;
    font-weight: 600;
  }
`;
