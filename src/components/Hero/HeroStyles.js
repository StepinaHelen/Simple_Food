import styled from "styled-components";
import mealImg from "assets/simply-food.jpg";

export const Background = styled.div`
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  background-image: url(${mealImg});
  background-size: cover;
  display: block;
  padding: 30px 32px;
  max-width: 480px;
  @media screen and ${({ theme }) => theme.media.medium} {
    max-width: 1200px;
    padding: 75px 0;
    height: 312px;
    max-width: 768px;
  }
  @media screen and ${({ theme }) => theme.media.large} {
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
    ${({ theme }) => theme.fontText({ fontWeight: 500 })}
  }
  p {
    margin: 0;
    ${({ theme }) =>
      theme.fontText({ fontWeight: 500, fontSize: 12, lineHeight: 14 })}
  }

  @media screen and ${({ theme }) => theme.media.small} {
    width: 416px;
  }

  @media screen and ${({ theme }) => theme.media.medium} {
    width: 416px;
    h2 {
      ${({ theme }) => theme.fontText({ fontWeight: 500 })}
    }
    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: 12,
          lineHeight: 14,
        })}
    }
  }

  @media screen and ${({ theme }) => theme.media.large} {
    width: 660px;
    h2 {
      margin: 0 0 22px 0;
      ${({ theme }) => theme.fontText({ fontSize: 36, lineHeight: 42 })}
    }
    p {
      ${({ theme }) =>
        theme.fontText({
          fontWeight: 500,
          fontSize: 20,
          lineHeight: 23,
        })}
      margin: 0;
    }
  }
`;
