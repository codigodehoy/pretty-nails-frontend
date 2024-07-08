import { Typography as MuiTypography } from "@mui/material";

import { TypographyProps } from "./Type";

export const Typography = ({
  variant,
  component,
  children,
  fontSize,
}: TypographyProps) => {
  return (
    <MuiTypography variant={variant} component={component} fontSize={fontSize}>
      {children}
    </MuiTypography>
  );
};
