import styled from "styled-components";

import { Hearts } from "react-loader-spinner";

export const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Hearts
        height="200"
        width="200"
        color="#6b068a"
        ariaLabel="hearts-loading"
        wrapperStyle={{ display: "block" }}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};
export default Spinner;
