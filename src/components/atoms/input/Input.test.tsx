import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Input } from "./Input";

const setup = () => {
  return {
    onChange: jest.fn(),
    user: userEvent,
  };
};

describe("Input", () => {
  const { onChange, user } = setup();
  it("should render the input element", () => {
    render(<Input onChange={onChange} label="Name" />);

    const input = screen.getByRole("textbox", { name: "Name" });

    expect(input).toBeInTheDocument();
  });
  it("should type the test value into the input element", async () => {
    render(<Input onChange={onChange} label="Name" />);

    const input = screen.getByRole("textbox", { name: "Name" });
    await user.type(input, "test");

    expect(input).toHaveValue("test");
  });
});
