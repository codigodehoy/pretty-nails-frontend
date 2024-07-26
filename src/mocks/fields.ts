import { FieldProps } from "../components/molecules/FormFields/Type";

export const mockFields: FieldProps = {
  name: {
    value: "",
    label: "Name",
    type: "text",
    error: false
  },
  last_name: {
    value: "user test",
    label: "Last Name",
    type: "text",
    error: false
  },
  date: {
    value: "2024-07-15",
    label: "Reservation Date",
    type: "date",
    },
}
