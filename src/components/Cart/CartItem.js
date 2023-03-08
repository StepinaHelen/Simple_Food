import Icons from "../SvgComponent/SvgComponent";

import { Item, WraperItem, AmountWrapper, BtnWrapper } from "./CartStyles";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { cartActions } from "store/cart-slice";

const CartItem = (props) => {
  const dispatchAction = useDispatch();

  const deleteFromCartHandler = () => {
    dispatchAction(cartActions.removeItem(props.id));
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
        <BtnWrapper onClick={deleteFromCartHandler} data-testid="delete-btn">
          <Icons name="trash" classes={"trash"} />
        </BtnWrapper>
      </WraperItem>
    </Item>
  );
};

export default CartItem;
