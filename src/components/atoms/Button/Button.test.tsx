import { render, screen } from "@testing-library/react";
import { ButtonExample } from "./ButtonExample";
import "@testing-library/jest-dom";

// TODO: Update this test when the button has been implemented
describe("Name of the group", () => {
  it("should ", () => {
    render(<ButtonExample />);

    const button = screen.getByRole("button", { name: "Button Example" });

    expect(button).toHaveTextContent("Button Example");
  });
});
