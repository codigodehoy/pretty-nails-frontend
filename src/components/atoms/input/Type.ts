import { ChangeEvent } from "react";

type variantProps = "outlined" | "filled" | "standard";
export interface InputProps {
  label: string;
  variant?: variantProps;
  value: string;
  name: string;
  error?: boolean;
  helperText?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
