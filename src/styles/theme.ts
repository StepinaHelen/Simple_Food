import { css } from "styled-components";
import { IFlexMixin, IFontText } from "./types";
export const baseTheme = {
  colors: {
    primary: "#6B068A",
    secondary: "#c913d6",
    btnColor: "#FFFFFF",
    error: "red",
    mainFont: "#252525",
    secondaryFont: "#FFFFFF",
    borderColor: "#747474",
    boxShadow:
      "0px 2px 1px rgb(0 0 0 / 20%), 0px 1px 1px rgb(0 0 0 / 14%),0px 1px 3px rgb(0 0 0 / 12%)",
  },

  media: {
    large: "(min-width: 1200px)",
    medium: "(min-width: 768px)",
    small: "(min-width: 480px)",
    small_max: "(max-width: 480px)",
  },

  flex: ({ alignItems, justifyContent, flexDirection }: IFlexMixin) => css`
    display: flex;
    justify-content: ${justifyContent ? justifyContent : "space-between"};
    align-items: ${alignItems ? alignItems : "stretch"};
    flex-direction: ${flexDirection ? flexDirection : "row"};
  `,

  fontText: ({ fontWeight, fontSize, lineHeight }: IFontText) => css`
    font-weight: ${fontWeight ? fontWeight : 400};
    font-size: ${fontSize ? `${fontSize}px` : "16px"};
    line-height: ${lineHeight ? `${lineHeight}px` : "19px"};
  `,
};

export const darkTheme = {
  colors: {
    primary: "#6B068A",
    secondary: "#c913d6",
    error: "red",
    btnColor: "#FFFFFF",
    mainFont: "#FFFFFF",
    secondaryFont: "black",
    borderColor: "#747474",
    boxShadow:
      "inset 2px 2px 5px rgb(124 40 201 / 50%), 1px 1px 5px rgb(201 8 223)",
  },

  media: {
    large: "(min-width: 1200px)",
    medium: "(min-width: 768px)",
    small: "(min-width: 480px)",
    small_max: "(max-width: 480px)",
  },

  flex: ({ alignItems, justifyContent, flexDirection }: IFlexMixin) => css`
    display: flex;
    justify-content: ${justifyContent ? justifyContent : "space-between"};
    align-items: ${alignItems ? alignItems : "stretch"};
    flex-direction: ${flexDirection ? flexDirection : "row"};
  `,

  fontText: ({ fontWeight, fontSize, lineHeight }: IFontText) => css`
    font-weight: ${fontWeight ? fontWeight : 400};
    font-size: ${fontSize ? `${fontSize}px` : "16px"};
    line-height: ${lineHeight ? `${lineHeight}px` : "19px"};
  `,
};