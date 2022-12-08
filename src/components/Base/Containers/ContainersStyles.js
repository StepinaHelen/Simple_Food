import styled, { css } from "styled-components";

const marginStyle = css`
  margin-top: 90px;
  margin-bottom: 100px;
  min-height: calc(100vh - 290px);
`;

export const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  ${({ $withMargins }) => $withMargins && marginStyle}

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 90px;
  margin-bottom: 100px;
  min-height: calc(100vh - 290px);
`;

const shadowStyle = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 446px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 30px;
    width: 446px;
  }
`;

export const EmptyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h3,
  .amount {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #6b068a;
  }

  @media screen and (min-width: 1200px) {
    padding: 0px 0px 0px 70px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 0px 0px 0px 20px;
  }

  ${({ $withShadow }) => $withShadow && shadowStyle};
`;
