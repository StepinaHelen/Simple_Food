import CommonContainer from "../Containers/CommonContainer";
import { FooterContainer, Content } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <CommonContainer withMargin={false}>
        <Content>
          <p>
            &#169; 2022 | All Rights Reserved | Developed with &nbsp;
            <span>&#10084;</span>&nbsp; by
            <a href="https://www.linkedin.com/in/helen-stepina-a5b8b8211/">
              Stepina Helen
            </a>
          </p>
        </Content>
      </CommonContainer>
    </FooterContainer>
  );
};

export default Footer;