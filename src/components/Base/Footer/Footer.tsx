import CommonContainer from "components/Base/Containers/CommonContainer";
import { FooterContainer, Content } from "components/Base/Footer/FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <CommonContainer withMargin={false}>
        <Content>
          <p>
            &#169; 2022 | All Rights Reserved | Developed with &nbsp;
            <span>&#10084;</span>&nbsp; by &nbsp;
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
