import styled from "styled-components";

export const List = styled.ul`
  margin: 0 auto;
  padding: 60px 0;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const Item = styled.li`
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    @media screen and (min-width: 768px) {
      width: 330px;
      max-height: 199px;
    }
    @media screen and (min-width: 1200px) {
      max-height: 255px;
      width: 39%;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WraperItem = styled.div`
  width: 100%;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 47px;
    margin: 0 0 10px 0;
  }

  p {
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    margin: 0 0 10px 0;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 32px;
    width: 61%;
    flex-direction: row;
    max-height: 199px;
    padding: 20px;

    h2 {
      font-size: 28px;
      line-height: 33px;
      margin: 0 0 20px 0;
    }

    p {
      font-size: 20px;
      line-height: 23px;
      margin: 0 0 20px 0;
    }
  }
  @media screen and (min-width: 1200px) {
    h2 {
      font-weight: 500;
      font-size: 40px;
      line-height: 47px;
    }

    p {
      font-weight: 500;
      font-size: 28px;
      line-height: 33px;
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
  }
`;
