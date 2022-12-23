import { css } from "styled-components";
export const baseTheme = {
  colors: {
    primary: "#6B068A",
    secondary: "#c913d6",

    error: "red",

    mainFont: "#252525",
    secondaryFont: "#FFFFFF",
  },

  media: {
    large: "(min-width: 1200px)",
    medium: "(min-width: 768px)",
    small: "(min-width: 480px)",
  },

  flex: ({ alignItems, justifyContent, flexDirection }: any) => css`
    display: flex;
    justify-content: ${justifyContent ? justifyContent : "space-between"};
    align-items: ${alignItems ? alignItems : "stretch"};
    flex-direction: ${flexDirection ? flexDirection : "row"};
  `,

  fontText: ({ fontWeight, fontSize, lineHeight }: any) => css`
    font-weight: ${fontWeight ? fontWeight : "400"};
    font-size: ${fontSize ? fontSize : "16px"};
    line-height: ${fontSize ? fontSize : "19px"};
  `,
};
