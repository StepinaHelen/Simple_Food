import catImg from "../../assets/cat.png";
import { Image, Wrapper } from "./NoticeStyles";

const Notice = (props) => {
  return (
    <Wrapper>
      <Image src={catImg} alt="cat" />
      <p>{props.title}</p>
      <p>{props.message}</p>
    </Wrapper>
  );
};

export default Notice;
