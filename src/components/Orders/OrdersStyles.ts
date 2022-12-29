import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  color: ${({ theme }) => theme.colors.mainFont};
  li {
    ${({ theme }) => theme.flex({ alignItems: "center" })}
  }
  h3 {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: 20, lineHeight: 23})}
  }
  p {
    ${({ theme }) => theme.fontText({})}
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
    ${({ theme }) => theme.flex({})}
    h3 {
      ${({ theme }) => theme.fontText({ fontSize: 24, lineHeight: 28 })}
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 400,
          fontSize: 20,
          lineHeight: 23,
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
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  margin-bottom: 20px;
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
    ${({ theme }) => theme.fontText({ fontSize: 24, lineHeight: 28 })}
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
  border-color: ${({ theme }) => theme.colors.borderColor};
  width: 100%;

  p:first-child {
    width: 150px;
  }

  p:last-child {
    width: 30px;
  }

  p {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: 20, lineHeight: 23 })}
    ${({ theme }) =>
      theme.flex({
        alignItems: "center",
      })}
    color: ${({ theme }) => theme.colors.mainFont};
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
    color: ${({ theme }) => theme.colors.mainFont};
    ${({ theme }) => theme.fontText({ fontWeight: 500 })}
    position: relative;
    p {
      position: absolute;
      color: ${({ theme }) => theme.colors.error};
      bottom: -3px;
      font-size: 12px;
    }
  }

  h2 {
    ${({ theme }) => theme.fontText({ fontSize: 40, lineHeight: 47 })}
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
    @media screen and ${({ theme }) => theme.media.small_max} {
      max-width: 420px;
    }
  }
  max-width: 420px @media screen and ${({ theme }) => theme.media.small} {
    width: 605px;
  }
  @media screen and (min-width: 780px) {
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
