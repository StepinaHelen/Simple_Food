import styled from "styled-components";

export const List = styled.ul`
  width: 100%;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #747474;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: 20px;
  .date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 24px;
      line-height: 28px;
      color: #6b068a;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #252525;
    }
  }
  .title-container {
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    padding-right: 70px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 40px;
  display: flex;
  flex-direction: column;

  hr {
    background: #6b068a;
    @media screen and (max-width: 768px) {
      transform: rotate(180deg);
      width: 100%;
    }
  }

  h2 {
    font-size: 24px;
    line-height: 28px;
    align-items: center;
    color: #6b068a;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const WrapperContainer = styled.div`
  padding: 40px 0;
`;

export const ListItems = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #000000;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const WrapperList = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  h2 {
    font-size: 40px;
    line-height: 47px;
    color: #6b068a;
  }

  input {
    border: 1px solid #6b068a;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 30px;
    margin-top: 12px;
    height: 52px;
    width: 100%;
    font-size: 24px;
    line-height: 28px;

    @media screen and (min-width: 1200px) {
      width: 675px;
      max-width: 675px;
      margin-right: 30px;
    }
  }
`;
