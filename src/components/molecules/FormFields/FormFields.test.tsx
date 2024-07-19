import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { FormFields } from "./FormFields";
import { mockFields } from "../../../mocks";
import { FormFieldsProps } from "./Type";

const setup = () => {
  return {
    onChange: jest.fn(),
    onChangeDate: jest.fn(),
    onSubmit: jest.fn(),
    formHeader: "Test",
    buttonText: "reserve",
    setValues: jest.fn(),
    formFields: mockFields,
  };
};

describe("Field Form", () => {
  const user = userEvent.setup();
  let props: FormFieldsProps;

  beforeEach(() => {
    props = setup();
  })
  it("should render all form fields", () => {
    render(<FormFields {...props} />);

    const name = screen.getByRole("textbox", { name: "Name" });
    const lastName = screen.getByRole("textbox", { name: "Last Name" });
    const date = screen.getByRole("textbox", { name: "Reservation Date" });

    expect(name).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
  it("should invoke the onSubmit function  when clicking the button", async () => {
    render(<FormFields {...props} />);

    const submitButton = screen.getByRole("button", { name: "reserve" });
    await user.click(submitButton);

    expect(props.onSubmit).toHaveBeenCalled();
  });
  it("should invoke the setValues function when a user type in the input field", async () => {
    render(<FormFields {...props} />);

    const name = screen.getByRole("textbox", { name: "Name" });
    await user.type(name, "test");

    expect(props.setValues).toHaveBeenCalled();
  });
});
