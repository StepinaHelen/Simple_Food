import { EmptyWrapper } from "./ContainersStyles";

const ShadowContainer = (props) => {
  return (
    <EmptyWrapper $withShadow={props.withShadow}>{props.children}</EmptyWrapper>
  );
};

export default ShadowContainer;
