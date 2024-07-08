import { Link as MuiLink } from "@mui/material";

import { linkStyle } from "./Style";
import { LinkProps } from "./Type";

export const Link = ({
  children,
  href,
  onClick,
  active = false,
}: LinkProps) => {
  return (
    <MuiLink
      href={href}
      underline={active ? "always" : "none"}
      onClick={onClick}
      sx={linkStyle}
    >
      {children}
    </MuiLink>
  );
};
