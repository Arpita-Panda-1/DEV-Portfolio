import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
    test("renders navbar title", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/FullStack Dev/i)
        ).toBeInTheDocument();
    });

    test("renders navigation links", () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );

        expect(
            screen.getByText(/About/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Skills/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Projects/i)
        ).toBeInTheDocument();

        expect(
            screen.getByText(/Contact/i)
        ).toBeInTheDocument();
    });
});