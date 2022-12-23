import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 100%;
  display: block;
`;

export const Content = styled.div`
  ${({ theme }) => theme.fontText}
  margin: 0 auto;

  p {
    padding: 40px 0;
    text-align: center;
    margin: 0px;
  }

  span {
    color: ${({ theme }) => theme.colors.error};
  }
  a {
    color: white;
    display: inline-block;
    text-decoration: underline;
  }
`;
