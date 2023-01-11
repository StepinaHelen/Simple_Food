import { Btn } from "components/Button/BtnStyles";
import { IBtnProps } from "common/interfaces";

const Button = (props: IBtnProps) => {
  return (
    <Btn
      type={props.type || "button"}
      className={props.className}
      onClick={(e) => props.onClick?.(e)}
      disabled={props.disabled}
    >
      {props.children}
    </Btn>
  );
};

export default Button;
