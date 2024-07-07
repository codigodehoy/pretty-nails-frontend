
type variantProps = "outlined" | "filled" | "standard";

export interface InputProps {
  label: string;
  variant?: variantProps;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}
