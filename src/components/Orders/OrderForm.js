import { FormWrapper } from "./OrdersStyles";
import { Form, Field, useFormikContext } from "formik";

const OrderForm = () => {
  const { errors, touched } = useFormikContext();

  return (
    <>
      <FormWrapper>
        <h2>Order summaries:</h2>
        <Form>
          <label className="control">
            First Name
            <Field name="name" />
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </label>
          <label className="control">
            Last Name
            <Field name="surName" />
            {errors.surName && touched.surName ? <p>{errors.surName}</p> : null}
          </label>
          <label className="control">
            Phone number
            <Field name="phone" type="number" />
            {errors.phone && touched.phone ? <p>{errors.phone}</p> : null}
          </label>
          <label className="control">
            City
            <Field name="city" type="text" />
            {errors.city && touched.city ? <p>{errors.city}</p> : null}
          </label>
          <label className="control">
            Street
            <Field name="street" type="text" />
            {errors.street && touched.street ? <p>{errors.street}</p> : null}
          </label>
        </Form>
      </FormWrapper>
    </>
  );
};

export default OrderForm;
