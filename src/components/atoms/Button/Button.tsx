import { Button as MuiButton } from "@mui/material";
import { buttonStyle } from "./Style";
import { ButtonProps } from "./Type";

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
