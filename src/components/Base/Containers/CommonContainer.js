import { Container } from "./ContainersStyles";

const CommonContainer = (props) => {
  return (
    <Container $withMargins={props.withMargin}>{props.children}</Container>
  );
};

export default CommonContainer;
