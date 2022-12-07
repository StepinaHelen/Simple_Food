import { useContext } from "react";
import Icons from "../SvgComponent/SvgComponent";
import CartContext from "../../store/cart-context";
import { Item, WraperItem, AmountWrapper, BtnWrapper } from "./CartStyles";

const CartItem = (props) => {
  const cartContext = useContext(CartContext);
  const deleteFromCartHandler = () => {
    cartContext.removeItem(props.id);
  };

  return (
    <Item>
      <img src={props.img} alt={props.name} />
      <WraperItem>
        <h2>{props.title}</h2>
        <p>Price: {props.price}$</p>
        <AmountWrapper>
          <p>Amount: {props.amount}</p>
        </AmountWrapper>
        <BtnWrapper onClick={deleteFromCartHandler}>
          <Icons name="trash" classes={"trash"} />
        </BtnWrapper>
      </WraperItem>
    </Item>
  );
};

export default CartItem;
