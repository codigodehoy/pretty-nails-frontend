import { Link } from "./Link";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const setup = () => {
    return{
        onClick: jest.fn(),
        user: userEvent,
        href: "#"
    }
}
describe("Link", () => {
    const {onClick, user, href} = setup();
    it('should render the link component', () => {
        render(<Link onClick={onClick} href={href}>Home</Link>)

        const link = screen.getByRole("link", {name: "Home"})

        expect(link).toBeInTheDocument()
    });
    it('should invoke the onClick function', async() => {
        render(<Link onClick={onClick} href={href}>Home</Link>)

        const link = screen.getByRole("link", {name: "Home"})
        await user.click(link)

        expect(onClick).toHaveBeenCalled()
    });
});