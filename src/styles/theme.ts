import { css } from "styled-components";
import { IFlexMixin, IFontText } from "styles/types";
export const baseTheme = {
  colors: {
    primary: "#6B068A",
    secondary: "#c913d6",
    secondaryShadow: "#350e42",
    consantColor: "#FFFFFF",
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

  flex: (props: IFlexMixin | undefined) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "space-between"};
    align-items: ${props?.alignItems ?? "stretch"};
    flex-direction: ${props?.flexDirection ?? "row"};
  `,

  fontText: (props: IFontText | undefined) => css`
    font-weight: ${props?.fontWeight ?? 400};
    font-size: ${props?.fontSize ? `${props?.fontSize}px` : "16px"};
    line-height: ${props?.lineHeight ? `${props?.lineHeight}px` : "19px"};
  `,
};

export const darkTheme = {
  colors: {
    primary: "#6B068A",
    secondary: "#c913d6",
    secondaryShadow: "#350e42",
    error: "red",
    consantColor: "#FFFFFF",
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

  flex: (props: IFlexMixin | undefined) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "space-between"};
    align-items: ${props?.alignItems ?? "stretch"};
    flex-direction: ${props?.flexDirection ?? "row"};
  `,

  fontText: (props: IFontText | undefined) => css`
    font-weight: ${props?.fontWeight ?? 400};
    font-size: ${props?.fontSize ? `${props?.fontSize}px` : "16px"};
    line-height: ${props?.lineHeight ? `${props?.lineHeight}px` : "19px"};
  `,
};
