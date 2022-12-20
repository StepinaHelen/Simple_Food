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
import { Formik } from "formik";
import { OrderSchema } from "../../common/utils";
import { useMutation } from "react-query";
import Spinner from "../Spinner/Spinner";

const initialFormState = {
  name: "",
  surName: "",
  phone: "",
  city: "",
  street: "",
};

const OrderPage = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const { mutate, error, isError } = useMutation(postOrderToHistory);

  const modalHandler = () => {
    navigate("/order-history");
  };

  const submitHandler = (form) => {
    mutate({ form, cartContext });
    setShowModal(true);
    cartContext.clearCart();
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

      {isError && error.message && (
        <Modal title={error.message} onCloseModal={modalHandler} />
      )}
      <Formik initialValues={initialFormState} validationSchema={OrderSchema}>
        <CommonContainer withMargin={true}>
          <Wrapper>
            <OrderContainer>
              <OrderForm></OrderForm>
              <ShadowContainer withShadow={"withShadow"}>
                <OrderList
                  orderItems={cartContext.items}
                  totalAmount={cartContext.totalAmount}
                ></OrderList>
              </ShadowContainer>
            </OrderContainer>
            <BtnContainer>
              <Button className={"order"} onClick={submitHandler} type="submit">
                Order <Icons name="check" classes={"icon"} />
              </Button>
            </BtnContainer>
          </Wrapper>
        </CommonContainer>
      </Formik>
    </>
  );
};

export default OrderPage;
