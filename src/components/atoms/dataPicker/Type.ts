import { Dayjs } from "dayjs";

export interface DatePickerProps {
  value: string;
  name: string;
  label: string;
  onChange: (date: Dayjs | null) => void
}
