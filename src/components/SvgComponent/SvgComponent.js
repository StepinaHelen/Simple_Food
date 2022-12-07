import Icons from "../../assets/sprite.svg";

const SvgComponent = ({ name, classes }) => {
  return (
    <svg className={classes}>
      <use xlinkHref={`${Icons}#${name}`} />
    </svg>
  );
};

export default SvgComponent;
