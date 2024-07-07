const LIGHT_GRAY = "#A0AAB4";

export const inputStyle = {
  background: "#F9F9F9",
  width: "335px",
  padding: 0,
  "& label.Mui-focused": {
    color: LIGHT_GRAY,
  },
  "& label": {
    color: LIGHT_GRAY,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#D6D6D6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#D6D6D6",
    },
  },
};
