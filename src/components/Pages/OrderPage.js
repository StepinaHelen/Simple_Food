import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommonContainer from "../Base/Containers/CommonContainer";
import OrderList from "../Orders/OrderList";
import Button from "../Button/Button";
import Icons from "../SvgComponent/SvgComponent";
import CartContext from "../../store/cart-context";
import OrderForm from "../Orders/OrderForm";
import ShadowContainer from "../Base/Containers/ShadowContainer";
import Modal from "../Modals/Modal";
import { OrderContainer, BtnContainer, Wrapper } from "./PagesStyles";
import { postOrderToHistory } from "../../services/common-service";

const initialFormState = {
  name: "",
  surName: "",
  phone: "",
  city: "",
  street: "",
};

const OrderPage = () => {
  const [form, setForm] = useState(initialFormState);

  const onFormChange = (e) => {
    setForm((previous) => {
      return {
        ...previous,
        [e.target.name]: e.target.value,
      };
    });
  };

  const cartContext = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    postOrderToHistory(form, cartContext);
    setShowModal(true);
  };

  const modalHandler = () => {
    navigate("/order-history");
  };

  return (
    <>
      {showModal && (
        <Modal
          title="Your order has been successfully sent!"
          message="In the near future, our manager will contact you to clarify delivery and payment."
          onCloseModal={modalHandler}
        />
      )}
      <CommonContainer withMargin={true}>
        <Wrapper>
          <OrderContainer>
            <OrderForm onFormChange={onFormChange}></OrderForm>
            <ShadowContainer withShadow={"withShadow"}>
              <OrderList
                orderItems={cartContext.items}
                totalAmount={cartContext.totalAmount}
              ></OrderList>
            </ShadowContainer>
          </OrderContainer>
          <BtnContainer>
            <Button className={"order"} onClick={submitHandler}>
              Order <Icons name="check" classes={"icon"} />
            </Button>
          </BtnContainer>
        </Wrapper>
      </CommonContainer>
    </>
  );
};

export default OrderPage;
