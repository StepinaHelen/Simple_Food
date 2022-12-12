import CartItem from "./CartItem";
import CommonContainer from "../Base/Containers/CommonContainer";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { List, TotalWrapper } from "./CartStyles";
import { ROUTES } from "../../common/constants";
import Notice from "../Notice/Notice";

const CartList = () => {
  const cartContext = useContext(CartContext);

  return (
    <CommonContainer withMargin={true}>
      {cartContext.items.length > 0 && (
        <>
          <List>
            {cartContext.items.map((el) => (
              <CartItem
                img={el.img}
                price={el.price}
                amount={el.amount}
                id={el.id}
                title={el.title}
                category={el.category}
                key={el.id}
              />
            ))}
          </List>
          <TotalWrapper>
            <p>Total:</p> <p>{cartContext.totalAmount}$</p>
          </TotalWrapper>
          <Link to={ROUTES.orderPage}>
            <Button className={"goToOrder"}>Go to order</Button>
          </Link>
        </>
      )}
      {!cartContext.items.length && (
        <Notice
          title="You don't have any items in your cart!"
          message="Please add some food to the cart. We're waiting for you :)"
        ></Notice>
      )}
    </CommonContainer>
  );
};

export default CartList;
