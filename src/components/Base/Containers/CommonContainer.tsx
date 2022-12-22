import { Container } from "./ContainersStyles";
import { ICommonContainerProps } from "../../../common/interfaces";

const CommonContainer = (props: ICommonContainerProps) => {
  return (
    <Container $withMargins={props.withMargin}>{props.children}</Container>
  );
};

export default CommonContainer;
