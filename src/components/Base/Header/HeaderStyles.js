import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #6b068a;
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
  align-items: center;
  color: white;

  .icon {
    height: 62px;
    width: 48px;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Mansalva", cursive;
  font-weight: 400;
  font-size: 52px;
  line-height: 57px;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 32px;
    line-height: 35px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  hr {
    transform: rotate(180deg);
    height: 56px;
    margin-right: 8px;
    margin-left: 8px;
    border: 2px solid #ffffff;
    background-color: white;
    border-radius: 3px;
    @media screen and (max-width: 768px) {
      margin-right: 2px;
      margin-left: 2px;
      height: 40px;
    }
  }
`;

export const Amount = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #350e42;

  span {
    display: block;
    color: white;
    font-weight: 600;
    margin-left: 8px;
    font-size: 18px;
  }
`;

export const IconContainer = styled.div`
  position: relative;
`;
