import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  padding: 60px 0;
`;

export const TotalWrapper = styled.div`
  ${({ theme }) => theme.flex}
  ${({ theme }) => theme.fontText({ fontSize: "48px", lineHeight: "56px" })}
`;

export const Item = styled.li`
  ${({ theme }) => theme.flex({ flexDirection: "column" })}
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
  width: 100%;

  img {
    @media screen and ${({ theme }) => theme.media.medium} {
      width: 330px;
      max-height: 199px;
    }
    @media screen and ${({ theme }) => theme.media.large} {
      max-height: 255px;
      width: 39%;
    }
  }
  @media screen and ${({ theme }) => theme.media.medium} {
    flex-direction: row;
  }
`;

export const WraperItem = styled.div`
  width: 100%;
  flex-direction: column;
  padding: 20px;

  h2 {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: "40px", lineHeight: "47px" })}
    margin: 0 0 10px 0;
  }

  p {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: "28px", lineHeight: "33px" })}
    margin: 0 0 10px 0;
  }
  @media screen and ${({ theme }) => theme.media.medium} {
    padding: 40px 32px;
    width: 61%;
    flex-direction: row;
    max-height: 199px;
    padding: 20px;

    h2 {
      ${({ theme }) => theme.fontText({ fontSize: "28px", lineHeight: "33px" })}
      margin: 0 0 20px 0;
    }

    p {
      ${({ theme }) => theme.fontText({ fontSize: "20px", lineHeight: "23px" })}
      margin: 0 0 20px 0;
    }
  }
  @media screen and ${({ theme }) => theme.media.large} {
    h2 {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: "40px",
          lineHeight: "47px",
        })}
    }

    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: "28px",
          lineHeight: "33px",
        })}
    }
  }
`;
export const AmountWrapper = styled.div`
  p {
    margin: 0;
  }
`;

export const BtnWrapper = styled.div`
  text-align: right;

  .trash {
    width: 35px;
    height: 44px;
    cursor: pointer;
  }
`;
