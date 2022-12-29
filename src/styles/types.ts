export interface ITheme {
  colors: IColors;
  media: IMedia;
  order: IOrder;
  flex: (props?: any) => any;
  fontText: (props?: any) => any;
}

interface IColors {
  primary: string;
  secondary: string;
  error: string;
  mainFont: string;
  secondaryFont: string;
  borderColor: string;
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
