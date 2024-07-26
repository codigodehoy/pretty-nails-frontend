import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Input } from "./Input";

const setup = () => {
  return {
    onChange: jest.fn(),
    user: userEvent,
    value: "test",
    name: "test",
    label: "Name"
  };
};

describe("Input", () => {
  const { user, ...props } = setup();
  it("should render the input element", () => {
    render(<Input {...props} />);

    const input = screen.getByRole("textbox", { name: "Name" });

    expect(input).toBeInTheDocument();
  });
  it("should type the test value into the input element", async () => {
    render(<Input {...props} />);

    const input = screen.getByRole("textbox", { name: "Name" });
    await user.type(input, "test");

    expect(input).toHaveValue("test");
  });
});
