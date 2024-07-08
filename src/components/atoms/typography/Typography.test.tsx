import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Typography } from "./Typography";

describe("Typography", () => {
  it("should ", () => {
    render(
      <Typography variant="body1" component="h1">
        {"Hello world"}
      </Typography>
    );

    const typography = screen.getByRole("heading", { name: "Hello world" });

    expect(typography).toBeInTheDocument();
  });
});
