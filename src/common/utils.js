import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const stringMinMaxRequired = Yup.string()
  .min(3, "Too short!")
  .max(50, "Too long!")
  .required("Required");

export const phoneValidRequired = Yup.string()
  .required("Required")
  .matches(phoneRegExp, "Phone number is not valid");

export const OrderSchema = Yup.object().shape({
  name: stringMinMaxRequired,
  surName: stringMinMaxRequired,
  phone: phoneValidRequired,
  city: stringMinMaxRequired,
  street: stringMinMaxRequired,
});
