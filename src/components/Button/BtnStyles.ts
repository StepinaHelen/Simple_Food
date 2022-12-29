import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 5px 27px;
  ${({ theme }) => theme.fontText({})}
  color: ${({ theme }) => theme.colors.btnColor};
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
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  &.categories {
    margin-bottom: 12px;
    padding: 4px 12px;
    margin-right: 12px;
    @media screen and ${({ theme }) => theme.media.medium} {
      padding: 8px 23px;
      margin-right: 24px;
    }
  }

  &.cardItem {
    ${({ theme }) => theme.fontText({})}
    padding: 5px 27px;
  }

  &.order {
    ${({ theme }) =>
      theme.flex({
        alignItems: "center",
        justifyContent: "center",
      })}
  }

  &.goToOrder {
    ${({ theme }) =>
      theme.flex({
        alignItems: "center",
        justifyContent: "center",
      })}
    padding: 13px 54px;
    font-weight: 600;
  }
`;
