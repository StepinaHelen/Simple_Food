import styled from "styled-components";

export const Item = styled.li`
  margin: 15px;
  background-color: #fff;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 1px 3px rgb(0 0 0 / 12%);
  border-radius: 0px 0px 4px 4px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 15px) / 2);

    img {
      height: 226px;
    }
  }
  @media screen and (min-width: 1200px) {
    width: calc((100% - 8 * 15px) / 4);

    img {
      height: 175px;
    }
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const WraperItem = styled.div`
  padding: 20px 20px;

  h2 {
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    margin-bottom: 20px;
    text-overflow: ellipsis;
    /* width: 220px; */
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 23px;
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }
`;
export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  button {
    background-color: #6b068a;
    height: 20px;
    width: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
  }

  p {
    margin: 0 12px 0 0;
  }

  span {
    margin-right: 3px;
    margin-left: 3px;
  }
`;

export const BtnWrapper = styled.div`
  text-align: right;
`;

export const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;

  .arrow {
    width: 40px;
    height: 40px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -15px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Btn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
