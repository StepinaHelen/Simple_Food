import styled from "styled-components";

export const OrderContainer = styled.div`
  ${({ theme }) =>
    theme.flex({
      justifyContent: "center",
      flexDirection: "column",
    })}
  margin-bottom: 60px;

  @media screen and ${({ theme }) => theme.media.large} {
    flex-direction: row;
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

export const Wrapper = styled.div`
  padding: 40px 0;
`;

export const MarginWrapper = styled.div`
  margin-top: 90px;
  margin-bottom: 100px;
  min-height: calc(100vh - 290px);
`;
