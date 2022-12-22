import Icons from "../../assets/sprite.svg";
import { ISVG } from "../../common/interfaces";

const SvgComponent = ({ name, classes }: ISVG) => {
  return (
    <svg className={classes}>
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default SvgComponent;
