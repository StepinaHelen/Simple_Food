import React from "react";
import Icons from "components/SvgComponent/SvgComponent";
import CommonContainer from "components/Base/Containers/CommonContainer";
import { Link } from "react-router-dom";
import { ROUTES } from "common/constants";
import {
  HeaderContainer,
  HeaderWrapper,
  Title,
  IconsContainer,
  Amount,
  IconContainer,
  ThemeBtn,
} from "./HeaderStyles";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = (props: any) => {
  const cartItems = useSelector((state: any) => {
    return state.cart.items.reduce((currentValue: number, item: any) => {
      return currentValue + item.amount;
    }, 0);
  });


  return (
    <React.Fragment>
      {props.mode === "dark" ? (
        <ThemeBtn onClick={props.changeTheme}>
          <Icons name="moon" classes={"theme-moon"} />
        </ThemeBtn>
      ) : (
        <ThemeBtn onClick={props.changeTheme}>
          <Icons name="sun" classes={"theme"} />
        </ThemeBtn>
      )}
      <HeaderContainer>
        <CommonContainer withMargin={false}>
          <HeaderWrapper>
            <Link to={"/"}>
              <Icons name="logo" classes={"icon"} />
            </Link>
            <Title>Simple food</Title>
            <IconsContainer>
              <Link to={ROUTES.cartPage}>
                <IconContainer>
                  <Icons name="cart" classes={"icon"} />
                  <Amount>
                    <span>{cartItems}</span>
                  </Amount>
                </IconContainer>
              </Link>
              <hr />
              <Link to={ROUTES.orderHistoryPage}>
                <Icons name="note" classes={"icon"} />
              </Link>
            </IconsContainer>
          </HeaderWrapper>
        </CommonContainer>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
