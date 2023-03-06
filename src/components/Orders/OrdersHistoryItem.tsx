import OrderList from "./OrderList";
import CommonContainer from "../Base/Containers/CommonContainer";
import ShadowContainer from "../Base/Containers/ShadowContainer";
import Modal from "../Modals/Modal";
import {
  List,
  DetailsContainer,
  Wrapper,
  WrapperContainer,
} from "./OrdersStyles";
import { getOrders } from "../../services/common-service";
import Notice from "../Notice/Notice";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { KEYQUERIES } from "../../common/constants";
import {
  ICardItem,
  IOrdersHistoryItem,
  IOrdersQuery,
} from "../../common/interfaces";

const OrdersHistoryItem = () => {
  const { isLoading, data, error } = useQuery<any, Error>(
    KEYQUERIES.orders,
    () => getOrders()
  );

  // const { data, error, isLoading } = useQuery<ICardItem[], Error>(
  //   [KEYQUERIES.cards, choosenCategory],
  //   () => getCards(choosenCategory)
  // );

  const navigate = useNavigate();

  const modalHandler = () => {
    navigate("/");
  };

  return (
    <CommonContainer withMargin={true}>
      <WrapperContainer>
        {!data && (
          <Notice
            title="You don't have any orders!"
            message="Place your first order now! We're waiting for you :)"
          ></Notice>
        )}

        {isLoading && <Spinner />}

        {error && error.message && (
          <Modal title={error.message} onCloseModal={modalHandler} />
        )}

        {data && (
          <>
            {data.map((el: any) => {
              return (
                <Wrapper key={el.id}>
                  <DetailsContainer>
                    <div className="title-container">
                      <h2>Details:</h2>
                      <List>
                        <li>
                          <h3>First and last name:</h3>
                          <p>
                            {el.firstName} &nbsp;
                            {el.lastName}
                          </p>
                        </li>
                        <li>
                          <h3>Phone number:</h3>
                          <p>{el.phone}</p>
                        </li>
                        <li>
                          <h3>Adress:</h3>
                          <p>
                            {el.city}, &nbsp;
                            {el.street}
                          </p>
                        </li>
                      </List>
                    </div>
                    <div className="date">
                      <h3>Date:</h3>
                      <p>{el.date.toString().slice(0, 10)}</p>
                    </div>
                  </DetailsContainer>
                  <hr />
                  <ShadowContainer withShadow={false}>
                    <OrderList
                      orderItems={el.foods}
                      totalAmount={el.totalAmount}
                    ></OrderList>
                  </ShadowContainer>
                </Wrapper>
              );
            })}
          </>
        )}
      </WrapperContainer>
    </CommonContainer>
  );
};

export default OrdersHistoryItem;
