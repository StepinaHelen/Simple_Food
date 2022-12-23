import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  li {
    ${({ theme }) => theme.flex({ alignItems: "center" })}
  }
  h3 {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: "20px", lineHeight: "23px" })}
  }
  p {
    ${({ theme }) => theme.fontText}
    color: #747474;
  }
`;

export const DetailsContainer = styled.div`
  ${({ theme }) =>
    theme.flex({ alignItems: "flex-end", flexDirection: "column" })}
  width: 100%;
  padding-right: 20px;
  .date {
    width: 100%;
    ${({ theme }) => theme.flex}
    h3 {
      ${({ theme }) => theme.fontText({ fontSize: "24px", lineHeight: "28px" })}
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "23px",
        })}
      color: #252525;
    }
  }
  .title-container {
    width: 100%;
  }
  @media screen and ${({ theme }) => theme.media.large} {
    padding-right: 70px;
  }
  @media screen and ${({ theme }) => theme.media.medium} {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
  display: flex;
  flex-direction: column;

  hr {
    background: ${({ theme }) => theme.colors.primary};
    @media screen and (max-width: 768px) {
      transform: rotate(180deg);
      width: 100%;
    }
  }

  h2 {
    align-items: center;
    ${({ theme }) => theme.fontText({ fontSize: "24px", lineHeight: "28px" })}
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and ${({ theme }) => theme.media.medium} {
    flex-direction: row;
  }
`;

export const WrapperContainer = styled.div`
  padding: 40px 0;
`;

export const ListItems = styled.li`
  ${({ theme }) => theme.flex({ alignItems: "center" })}
  border-bottom: dotted;
  border-color: #747474;
  width: 100%;

  p:first-child {
    width: 150px;
  }

  p:last-child {
    width: 30px;
  }

  p {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: "20px", lineHeight: "23px" })}
    ${({ theme }) =>
      theme.flex({
        alignItems: "center",
      })}
    color: #000000;
  }
`;

export const AmountContainer = styled.div`
  ${({ theme }) => theme.flex({ alignItems: "flex-end" })}
  width: 100%;
`;

export const WrapperList = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.div`
  label {
    display: flex;
    flex-direction: column;
    ${({ theme }) => theme.fontText({ fontWeight: 500 })}
    position: relative;
    p {
      position: absolute;
      color: ${({ theme }) => theme.colors.error}
      bottom: -3px;
      font-size: 12px;
    }
  }

  h2 {
    ${({ theme }) => theme.fontText({ fontSize: "40px", lineHeight: "247px" })}
    color: ${({ theme }) => theme.colors.primary};
  }

  input {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 12px;
    height: 52px;
    font-size: 24px;
    line-height: 28px;
      @media screen and (max-width:480px) {
        max-width:420px
      }
  }
  max-width:420px
  @media screen and (min-width:480px) {
    width:605px
  }
  @media screen and (min-width:780px) {
    width: 675px;
  }
`;

export const BtnContainer = styled.div`
  ${({ theme }) =>
    theme.flex({
      justifyContent: "center",
    })}

  .icon {
    height: 35px;
    width: 35px;
  }

  @media screen and ${({ theme }) => theme.media.large} {
    justify-content: end;
  }
`;
