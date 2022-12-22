import React, { useContext } from "react";
import Icons from "../../SvgComponent/SvgComponent";
import CommonContainer from "../Containers/CommonContainer";
import { Link } from "react-router-dom";
import CartContext from "../../../store/cart-context";
import { ROUTES } from "../../../common/constants";
import {
  HeaderContainer,
  HeaderWrapper,
  Title,
  IconsContainer,
  Amount,
  IconContainer,
} from "./HeaderStyles";

const Header = () => {
  const cartContext = useContext(CartContext);
  const cartItemsAmount = cartContext.items.reduce((currentValue, item) => {
    return currentValue + item.amount;
  }, 0);
  return (
    <React.Fragment>
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
                    <span>{cartItemsAmount}</span>
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