import { Form } from "./OrdersStyles";

const OrderForm = ({ onFormChange }) => {
  return (
    <Form>
      <h2>Order summaries:</h2>
      <label className="control">
        First Name
        <input name="name" type="text" onChange={onFormChange} />
      </label>
      <label className="control">
        Last Name
        <input name="surName" type="text" onChange={onFormChange} />
      </label>
      <label className="control">
        Phone number
        <input name="phone" type="text" onChange={onFormChange} />
      </label>
      <label className="control">
        City
        <input name="city" type="text" onChange={onFormChange} />
      </label>
      <label className="control">
        Street
        <input name="street" type="text" onChange={onFormChange} />
      </label>
    </Form>
  );
};

export default OrderForm;
