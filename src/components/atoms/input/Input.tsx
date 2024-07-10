import { TextField } from "@mui/material";

import { inputStyle } from "./Styles";
import { InputProps } from "./Type";

export const Input = ({
  label,
  value,
  name,
  error,
  onChange,
  helperText,
  variant = "outlined",
}: InputProps) => {
  return (
    <TextField
      helperText={error ? helperText : null}
      error={!!error}
      onChange={onChange}
      value={value}
      label={label}
      name={name}
      variant={variant}
      sx={inputStyle}
    />
  );
};
