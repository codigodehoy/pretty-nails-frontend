import { TextField } from "@mui/material";

import { inputStyle } from "./Styles";
import { InputProps } from "./Type";

export const Input = ({
  label,
  onChange,
  variant = "outlined",
}: InputProps) => {
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant={variant}
      onChange={onChange}
      sx={inputStyle}
    />
  );
};
