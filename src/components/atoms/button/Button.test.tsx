import { Button } from "./Button";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const setup = () => {
  return {
    onClick: jest.fn(),
    user: userEvent.setup(),
  };
};

describe("Button", () => {
  const { onClick, user } = setup();
  it("should display the button component ", () => {
    render(<Button onClick={onClick}>{"Reserve"}</Button>);

    const button = screen.getByRole("button", { name: "Reserve" });

    expect(button).toHaveTextContent("Reserve");
  });
  it("should invoke the onClick function ", async () => {
    render(<Button onClick={onClick}>{"Reserve"}</Button>);

    const button = screen.getByRole("button", { name: "Reserve" });
    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
