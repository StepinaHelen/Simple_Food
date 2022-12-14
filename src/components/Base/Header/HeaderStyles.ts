import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.consantColor};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) =>
    theme.flex({
      alignItems: "center",
      justifyContent: "space-between",
    })}
  margin: 0 auto;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.consantColor};
  .icon {
    height: 62px;
    width: 48px;
    fill: ${({ theme }) => theme.colors.consantColor};
    :hover {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Mansalva", cursive;
  ${({ theme }) => theme.fontText({ fontSize: 52, lineHeight: 57 })}

  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.fontText({ fontSize: 32, lineHeight: 35 })}
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  hr {
    transform: rotate(180deg);
    height: 56px;
    margin-right: 8px;
    margin-left: 8px;
    border: 2px solid ${({ theme }) => theme.colors.secondaryFont};
    background-color: ${({ theme }) => theme.colors.consantColor};
    border-radius: 3px;
    @media screen and (max-width: 768px) {
      margin-right: 2px;
      margin-left: 2px;
      height: 40px;
    }
  }
`;

export const Amount = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryShadow};
  span {
    display: block;
    color: ${({ theme }) => theme.colors.consantColor};
    font-weight: 600;
    margin-left: 8px;
    font-size: 18px;
    margin-top: 3px;
  }
`;

export const IconContainer = styled.div`
  position: relative;
`;

export const ThemeBtn = styled.button`
  position: fixed;
  z-index: 1000;
  top: 25px;
  right: 25px;
  background-color: transparent;
  border: none;
  .theme {
    height: 48px;
    width: 48px;
    cursor: pointer;
    fill: ${({ theme }) => theme.colors.consantColor};
    :hover {
      fill: ${({ theme }) => theme.colors.secondary};
    }
    &-moon {
      height: 40px;
      width: 40px;
      cursor: pointer;
      fill: ${({ theme }) => theme.colors.consantColor};
      :hover {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;
