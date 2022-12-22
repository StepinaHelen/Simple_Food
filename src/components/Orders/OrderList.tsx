import { ListItems, AmountContainer, WrapperList } from "./OrdersStyles";
import { IOrdersPageProps } from "../../common/interfaces";

const OrderList = (props: IOrdersPageProps) => {
  return (
    <>
      <WrapperList>
        <h3>Order list:</h3>
        <ul>
          {props.orderItems &&
            props.orderItems.map((el) => {
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
        <h3>Amount:</h3>
        <p className="amount">{props.totalAmount}$</p>
      </AmountContainer>
    </>
  );
};

export default OrderList;
