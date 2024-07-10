import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

import { DatePickerProps } from "./Type";
import { inputStyle } from "../input";

export const DatePicker = ({ value, name, label, onChange }: DatePickerProps) => {
  const today = dayjs().format("YYYY-MM-DD");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MuiDatePicker
        value={dayjs(value)}
        name={name}
        label={label}
        onChange={onChange}
        minDate={dayjs(today)}
        sx={inputStyle}
      />
    </LocalizationProvider>
  );
};
