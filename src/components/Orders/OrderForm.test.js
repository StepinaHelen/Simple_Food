import { render, screen, fireEvent, waitFor } from "test-utils";
import OrderForm from "components/Orders/OrderForm";
import { Formik } from "formik";
import { FORMS_FIELD } from "common/constants";

test("render OrderForm", async () => {
  render(
    <Formik>
      <OrderForm />
    </Formik>
  );
});

describe("test OrderForm", () => {
  it("render OrderForm", async () => {
    render(
      <Formik>
        <OrderForm />
      </Formik>
    );
  });
  FORMS_FIELD.map((el) => {
    it(`check OrderForm validation ${[el.name]}`, async () => {
      render(
        <Formik
          validate={(values) => {
            let errors = {};
            if (!values?.[el.name]) {
              errors[el.name] = "Required";
            }
            return errors;
          }}
        >
          <OrderForm />
        </Formik>
      );
      const input = screen.getByLabelText([el.title]);

      fireEvent.blur(input);

      await waitFor(() => {
        expect(screen.getByText("Required")).toBeInTheDocument();
      });
    });
  });
});
