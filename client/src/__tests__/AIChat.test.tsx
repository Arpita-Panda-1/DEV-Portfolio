import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import axios from "axios";
import AIChat from "../components/AIChat";

vi.mock("axios");

const mockedAxios = axios as any;

describe("AIChat Component", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    test("renders chatbot toggle button", () => {
        render(<AIChat />);

        expect(
            screen.getByRole("button")
        ).toBeInTheDocument();
    });

    test("opens chat window when clicked", () => {
        render(<AIChat />);

        const toggleBtn =
            screen.getByRole("button");

        fireEvent.click(toggleBtn);

        expect(
            screen.getByText("AI Assistant")
        ).toBeInTheDocument();
    });

    test("shows initial AI message", () => {
        render(<AIChat />);

        fireEvent.click(
            screen.getByRole("button")
        );

        expect(
            screen.getByText(
                /Hi 👋 Ask me anything about this developer/i
            )
        ).toBeInTheDocument();
    });

    test("allows user to type message", () => {
        render(<AIChat />);

        fireEvent.click(
            screen.getByRole("button")
        );

        const input =
            screen.getByPlaceholderText(
                /Ask something/i
            );

        fireEvent.change(input, {
            target: {
                value: "What are your skills?",
            },
        });

        expect(input).toHaveValue(
            "What are your skills?"
        );
    });

    test("sends message and displays AI reply", async () => {
        mockedAxios.post.mockResolvedValue({
            data: {
                reply:
                    "React, TypeScript, Node.js",
            },
        });

        render(<AIChat />);

        fireEvent.click(
            screen.getByRole("button")
        );

        const input =
            screen.getByPlaceholderText(
                /Ask something/i
            );

        fireEvent.change(input, {
            target: {
                value: "skills",
            },
        });

        fireEvent.click(
            screen.getByText("Send")
        );

        expect(
            screen.getByText("skills")
        ).toBeInTheDocument();

        await waitFor(() => {
            expect(
                screen.getByText(
                    "React, TypeScript, Node.js"
                )
            ).toBeInTheDocument();
        });
    });

    test("shows error message if API fails", async () => {
        mockedAxios.post.mockRejectedValue(
            new Error("Network Error")
        );

        render(<AIChat />);

        fireEvent.click(
            screen.getByRole("button")
        );

        const input =
            screen.getByPlaceholderText(
                /Ask something/i
            );

        fireEvent.change(input, {
            target: {
                value: "hello",
            },
        });

        fireEvent.click(
            screen.getByText("Send")
        );

        await waitFor(() => {
            expect(
                screen.getByText(
                    /Something went wrong/i
                )
            ).toBeInTheDocument();
        });
    });

    test("shows loading state while waiting", async () => {
        mockedAxios.post.mockImplementation(
            () =>
                new Promise((resolve) =>
                    setTimeout(
                        () =>
                            resolve({
                                data: {
                                    reply: "Done",
                                },
                            }),
                        500
                    )
                )
        );

        render(<AIChat />);

        fireEvent.click(
            screen.getByRole("button")
        );

        fireEvent.change(
            screen.getByPlaceholderText(
                /Ask something/i
            ),
            {
                target: {
                    value: "hello",
                },
            }
        );

        fireEvent.click(
            screen.getByText("Send")
        );

        expect(
            screen.getByText(/Typing/i)
        ).toBeInTheDocument();
    });

    test("closes chat window", () => {
        render(<AIChat />);

        const toggleBtn =
            screen.getByRole("button");

        fireEvent.click(toggleBtn);

        expect(
            screen.getByText("AI Assistant")
        ).toBeInTheDocument();

        fireEvent.click(toggleBtn);

        expect(
            screen.queryByText("AI Assistant")
        ).not.toBeInTheDocument();
    });
});