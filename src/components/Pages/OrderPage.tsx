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
import { Formik, FormikProps } from "formik";
import { OrderSchema } from "../../common/utils";
import { useMutation } from "react-query";
import { IForm, IPost_Query_Form } from "../../common/interfaces";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { cartActions } from "store/cart-slice";
import { useSelector } from "react-redux";

const initialFormState: IForm = {
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
  const { mutate, error, isError } = useMutation<any, Error, IPost_Query_Form>(
    postOrderToHistory
  );

  const cartTotalAmount = useSelector((state: any) => {
    console.log(state);
    return state.cart.totalAmount;
  });

  const cartItems = useSelector((state: any) => {
    return state.cart.items;
  });

  const dispatchFunction = useDispatch();
  // const cartContext = useContext(CartContext);

  const modalHandler = (): void => {
    navigate("/order-history");
  };

  const submitHandler = (form: IForm): void => {
    mutate({ form, cartContext });
    setShowModal(true);
    // cartContext.clearCart();
    dispatchFunction(cartActions.clearCart());
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
      <Formik
        initialValues={initialFormState}
        validationSchema={OrderSchema}
        onSubmit={(form: IForm) => {
          submitHandler(form);
        }}
      >
        {(formikProps: FormikProps<IForm>) => (
          <CommonContainer withMargin={true}>
            <Wrapper>
              <OrderContainer>
                <OrderForm></OrderForm>
                <ShadowContainer withShadow={true}>
                  <OrderList
                    orderItems={cartItems}
                    totalAmount={cartTotalAmount}
                  ></OrderList>
                </ShadowContainer>
              </OrderContainer>
              <BtnContainer>
                <Button
                  className={"order"}
                  type="submit"
                  onClick={() => {
                    formikProps.submitForm();
                  }}
                >
                  Order <Icons name="check" classes={"icon"} />
                </Button>
              </BtnContainer>
            </Wrapper>
          </CommonContainer>
        )}
      </Formik>
    </>
  );
};

export default OrderPage;
