import { EmptyWrapper } from "./ContainersStyles";
import { IShadowContainerProps } from "../../../common/interfaces";

const ShadowContainer = (props: IShadowContainerProps) => {
  return (
    <EmptyWrapper $withShadow={props.withShadow}>{props.children}</EmptyWrapper>
  );
};

export default ShadowContainer;
