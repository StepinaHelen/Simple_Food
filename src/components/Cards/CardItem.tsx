import { useContext, useState } from "react";
import Button from "components/Button/Button";
import CartContext from "store/cart-context";
import { toast } from "react-toastify";
import { Item, WraperItem, AmountWrapper, BtnWrapper } from "components/Cards/CardsStyles";
import { ICardItem } from "common/interfaces";

const CardItem = (props: ICardItem) => {
  const cartContext = useContext(CartContext);
  const [value, setValue] = useState(1);
  const decrement = () => {
    if (value > 1) {
      setValue((previous) => previous - 1);
    }
  };

  const addToCartHandler = () => {
    cartContext.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      category: props.category,
      amount: value,
      img: props.img,
    });
    setValue(1);
    toast(`${props.title} added to cart successfully!`);
  };

  const increment = () => {
    setValue((previous) => previous + 1);
  };

  return (
    <Item>
      <img src={props.img} alt={props.title} />
      <WraperItem>
        <h2>{props.title}</h2>
        <p>
          Price: <span> {props.price}$</span>
        </p>
        <AmountWrapper>
          <p>Amount:</p>
          <button type="button" onClick={decrement} disabled={value === 0}>
            -
          </button>
          <span data-testid="value">{value}</span>
          <button type="button" onClick={increment}>
            +
          </button>
        </AmountWrapper>
        <BtnWrapper>
          <Button type="button" onClick={addToCartHandler}>
            Add
          </Button>
        </BtnWrapper>
      </WraperItem>
    </Item>
  );
};

export default CardItem;
