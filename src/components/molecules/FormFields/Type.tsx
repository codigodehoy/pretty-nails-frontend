import {Dayjs} from "dayjs";

export interface FieldProps {
  [name: string]: {
    value: string;
    label: string;
    error?: boolean;
    helperText?: string;
    type: "text" | "date";
  }
}

export interface FormFieldsProps {
  formHeader: string;
  buttonText: string;
  onSubmit: () => void;
  onChange: (event: React.ChangeEvent) => void;
  onChangeDate: (date: Dayjs |  null) => void;
  setValues: (data: FieldProps) => void;
  formFields: FieldProps;
}
