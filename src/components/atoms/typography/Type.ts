type VariantProps =
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2";

type TypographyComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyProps {
  children: React.ReactNode;
  variant: VariantProps;
  component: TypographyComponent;
  fontSize?: string
}
