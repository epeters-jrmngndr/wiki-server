import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";

test("Text matches", () => {
    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/Wiki Articles/i);
    expect(messageElement).toBeInTheDocument();
});
