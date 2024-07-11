import { Button as MuiButton } from "@mui/material";
import { ButtonProps } from "./Type";
import { buttonStyle } from "./Style";

export const Button = ({
  onClick,
  children,
  disabled = false,
}: ButtonProps) => {
  return (
    <MuiButton onClick={onClick} sx={buttonStyle} disabled={disabled}>
      {children}
    </MuiButton>
  );
};
