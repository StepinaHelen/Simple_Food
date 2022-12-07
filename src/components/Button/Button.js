import { Btn } from "./BtnStyles";

const Button = (props) => {
  return (
    <Btn
      type={props.type || "button"}
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
