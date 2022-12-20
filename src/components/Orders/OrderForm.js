import { FormWrapper } from "./OrdersStyles";
import { Form, Field, useFormikContext } from "formik";
import { FORMS_FIELD } from "../../common/constants";

const OrderForm = () => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <FormWrapper>
        <h2>Order summaries:</h2>
        <Form>
          {FORMS_FIELD.map((el) => {
            return (
              <label key={el.id} className="control">
                {el.title}
                <Field name={el.name} />
                {errors[el.name] && touched[el.name] ? (
                  <p>{errors[el.name]}</p>
                ) : null}
              </label>
            );
          })}
        </Form>
      </FormWrapper>
    </>
  );
};

export default OrderForm;
