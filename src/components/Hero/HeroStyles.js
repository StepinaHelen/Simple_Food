import styled from "styled-components";
import mealImg from "../../assets/simply-food.jpg";

export const Background = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  background-image: url(${mealImg});
  background-size: cover;
  display: block;
  padding: 30px 32px;
  max-width: 480px;
  @media screen and (min-width: 768px) {
    max-width: 1200px;
    padding: 75px 0;
    height: 312px;
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1600px;
    padding: 215px 0;
    height: 600px;
  }
`;

export const Content = styled.div`
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  text-align: center;
  width: 100%;
  padding: 36px 48px;
  h2 {
    margin: 0 0 22px 0;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }
  p {
    margin: 0;
    font-size: 12px;
    line-height: 14px;
  }

  @media screen and (min-width: 480px) {
    width: 416px;
  }

  @media screen and (min-width: 768px) {
    width: 416px;
    h2 {
      font-size: 16px;
      line-height: 19px;
      font-weight: 500;
    }
    p {
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
    }
  }

  @media screen and (min-width: 1200px) {
    width: 660px;
    h2 {
      font-size: 36px;
      line-height: 42px;
      margin: 0 0 22px 0;
    }
    p {
      font-size: 20px;
      line-height: 23px;
      font-weight: 500;
      margin: 0;
    }
  }
`;