import styled, { css } from "styled-components";

const marginStyle = css`
  margin-top: 90px;
  margin-bottom: 100px;
  min-height: calc(100vh - 290px);
`;

export const Container = styled.div<{ $withMargins: boolean }>`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ $withMargins }) => $withMargins && marginStyle};

  @media screen and ${({ theme }) => theme.media?.small} {
    width: 480px;
  }

  @media screen and ${({ theme }) => theme.media?.medium} {
    width: 768px;
  }

  @media screen and ${({ theme }) => theme.media?.large} {
    width: 1200px;
  } ;
`;

export const Wrapper = styled.div`
  margin-top: 90px;
  margin-bottom: 100px;
  min-height: calc(100vh - 290px);
`;

const shadowStyle = css`
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  padding: 30px;
  ${({ theme }) =>
    theme.flex({
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "space-between",
    })};
  width: 446px;
  margin: 0 auto;

  @media screen and ${({ theme }) => theme.media.medium} {
    padding: 30px;
    width: 446px;
  } ;
`;

export const EmptyWrapper = styled.div<{ $withShadow: boolean }>`
  ${({ theme }) =>
    theme.flex({
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexDirection: "column",
    })};
  width: 100%;

  h3,
  .amount {
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: 24, lineHeight: 28 })}
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and ${({ theme }) => theme.media.large} {
    padding: 0px 0px 0px 70px;
  }

  @media screen and ${({ theme }) => theme.media.medium} {
    width: 50%;
    padding: 0px 0px 0px 20px;
  }

  ${({ $withShadow }) => $withShadow && shadowStyle};
`;
