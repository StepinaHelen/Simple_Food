import { Btn } from "./BtnStyles";
import { IBtnProps } from "../../common/interfaces";

const Button = (props: IBtnProps) => {
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
