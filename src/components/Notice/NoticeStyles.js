import styled from "styled-components";

export const Image = styled.img`
  display: block;
  width: 320px;
  @media screen and (min-width: 780px) {
    width: 450px;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 400px;
  color: ${({ theme }) => theme.colors.mainFont};
  p {
    font-weight: 600;
    font-size: 23px;
    line-height: 26px;
  }
`;
