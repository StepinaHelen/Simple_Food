import CommonContainer from "../Containers/CommonContainer";
import { FooterContainer, Content } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <CommonContainer>
        <Content>
          <p>
            &#169; 2022 | All Rights Reserved | Developed with &nbsp;
            <span>&#10084;</span>&nbsp; by Stepina Helen
          </p>
        </Content>
      </CommonContainer>
    </FooterContainer>
  );
};

export default Footer;
