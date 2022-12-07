import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;

  .icon {
    height: 35px;
    width: 35px;
  }

  @media screen and (min-width: 1200px) {
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
