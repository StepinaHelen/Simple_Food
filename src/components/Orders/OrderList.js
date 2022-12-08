import { ListItems, AmountContainer, WrapperList } from "./OrdersStyles";

const OrderList = (props) => {
  return (
    <>
      <WrapperList>
        <h3>Order list:</h3>
        <ul>
          {props.orderItems.map((el) => {
            return (
              <ListItems key={el.id}>
                <p>{el.title}</p>
                <p>x{el.amount}</p>
                <p>{el.price}$</p>
              </ListItems>
            );
          })}
        </ul>
      </WrapperList>
      <AmountContainer>
        <h3>Amount: {props.amount}</h3>
        <p className="amount">{props.totalAmount}$</p>
      </AmountContainer>
    </>
  );
};

export default OrderList;
