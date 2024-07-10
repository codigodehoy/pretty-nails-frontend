import { ChangeEvent } from "react";

import { Box } from "@mui/material";

import { Typography, Input, DatePicker, Button } from "../../atoms";

import { formFieldsStyle } from "./Style";
import { FormFieldsProps } from "./Type";

export const FormFields = ({
  formFields,
  formHeader,
  buttonText,
  onSubmit,
  onChange,
  onChangeDate,
  setValues,
}: FormFieldsProps) => {
  const { container, form } = formFieldsStyle;
  const fields = Object.keys(formFields);

  const validateFields = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const error = !value ? true : false;
    setValues({ ...formFields, [name]: { ...formFields[name], value, error } });
  };

  return (
    <Box sx={container}>
      <Box>
        <Typography variant="h1" component="h1" fontSize="24px">
          {formHeader}
        </Typography>
      </Box>
      <Box component="form" sx={form}>
        {fields.map((field, idx) => {
          const formField = formFields[field];
          return (
            <Box key={`${field}-${field}-${idx}`}>
              {formField.type === "date" ? (
                <DatePicker
                  value={formField.value}
                  name={field}
                  label={formField.label}
                  onChange={onChangeDate}
                />
              ) : (
                <Input
                  name={field}
                  value={formField.value}
                  label={formField.label}
                  error={formField.error}
                  helperText={formField.helperText}
                  onChange={(event) => {
                    onChange(event);
                    validateFields(event);
                  }}
                />
              )}
            </Box>
          );
        })}
        <Button onClick={onSubmit}>{buttonText}</Button>
      </Box>
    </Box>
  );
};
