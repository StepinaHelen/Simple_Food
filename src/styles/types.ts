import { FlattenSimpleInterpolation } from "styled-components";

export interface ITheme {
  colors: IColors;
  media: IMedia;
  order: IOrder;
  flex: (props?: IFlexMixin) => FlattenSimpleInterpolation;
  fontText: (props?: IFontText) => FlattenSimpleInterpolation;
}
interface IColors {
  primary: string;
  secondary: string;
  error: string;
  mainFont: string;
  secondaryFont: string;
  borderColor: string;
  boxShadow: string;
  btnColor: string;
}
interface IOrder {
  header: number;
  modal: number;
}

interface IMedia {
  large: string;
  medium: string;
  small: string;
  small_max: string;
}

export interface IFlexMixin {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?:
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "stretch";
  justifyContent?:
    | "space-between"
    | "center"
    | "start"
    | "end"
    | "left"
    | "right"
    | "flex-start"
    | "flex-end";
}

export interface IFontText {
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900;
  fontSize?: 24 | 52 | 32 | 22 | 20 | 48 | 40 | 28 | 20 | 12 | 36;
  lineHeight?: 28 | 57 | 35 | 28 | 23 | 56 | 47 | 33 | 23 | 14 | 42;
}
