import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  padding: 60px 0;
`;

export const TotalWrapper = styled.div`
  ${({ theme }) => theme.flex({})}
  ${({ theme }) => theme.fontText({ fontSize: 48, lineHeight: 56 })}
`;

export const Item = styled.li`
  ${({ theme }) => theme.flex({ flexDirection: "column" })};
  background-color: ${({ theme }) => theme.colors.secondaryFont};
  color: ${({ theme }) => theme.colors.mainFont};
  margin-bottom: 20px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
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
      theme.fontText({ fontWeight: 500, fontSize: 40, lineHeight: 47 })}
    margin: 0 0 10px 0;
  }

  p {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: 28, lineHeight: 33 })}
    margin: 0 0 10px 0;
  }
  @media screen and ${({ theme }) => theme.media.medium} {
    padding: 40px 32px;
    width: 61%;
    flex-direction: row;
    max-height: 199px;
    padding: 20px;

    h2 {
      ${({ theme }) => theme.fontText({ fontSize: 28, lineHeight: 33 })}
      margin: 0 0 20px 0;
    }

    p {
      ${({ theme }) => theme.fontText({ fontSize: 20, lineHeight: 23 })}
      margin: 0 0 20px 0;
    }
  }
  @media screen and ${({ theme }) => theme.media.large} {
    h2 {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: 40,
          lineHeight: 47,
        })}
    }

    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: 28,
          lineHeight: 33,
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
    fill: ${({ theme }) => theme.colors.primary};
    :hover {
      fill: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
