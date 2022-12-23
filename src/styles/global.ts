import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
 * {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background: #fff;
}

body {
  margin: 0;
  cursor: default;
}

main {
  margin-top: 6rem;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
  display: block;
}
img {
  display: block;
}
`;
