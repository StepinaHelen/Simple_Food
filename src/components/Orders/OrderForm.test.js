import { render, screen, fireEvent, waitFor } from "../../test-utils";
import OrderForm from "./OrderForm";
import { Formik } from "formik";

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
  it("check OrderForm validation name", async () => {
    render(
      <Formik
        validate={(values) => {
          let errors = {};
          if (!values?.name) {
            errors.name = "Required";
          }
          return errors;
        }}
      >
        <OrderForm />
      </Formik>
    );
    const input = screen.getByLabelText("First Name");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });

  it("check OrderForm validation surName", async () => {
    render(
      <Formik
        validate={(values) => {
          let errors = {};
          if (!values?.surName) {
            errors.surName = "Required";
          }
          return errors;
        }}
      >
        <OrderForm />
      </Formik>
    );
    const input = screen.getByLabelText("Last Name");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
  it("check OrderForm validation street", async () => {
    render(
      <Formik
        validate={(values) => {
          let errors = {};
          if (!values?.street) {
            errors.street = "Required";
          }
          return errors;
        }}
      >
        <OrderForm />
      </Formik>
    );
    const input = screen.getByLabelText("Street");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
  it("check OrderForm validation city", async () => {
    render(
      <Formik
        validate={(values) => {
          let errors = {};
          if (!values?.city) {
            errors.city = "Required";
          }
          return errors;
        }}
      >
        <OrderForm />
      </Formik>
    );
    const input = screen.getByLabelText("City");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
  it("check OrderForm validation phone", async () => {
    render(
      <Formik
        validate={(values) => {
          let errors = {};
          if (!values?.phone) {
            errors.phone = "Required";
          }
          return errors;
        }}
      >
        <OrderForm />
      </Formik>
    );
    const input = screen.getByLabelText("Phone number");

    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText("Required")).toBeInTheDocument();
    });
  });
});
