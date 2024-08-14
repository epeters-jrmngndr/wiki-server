import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Article from "./Article.jsx";

test("Back Button Renders", () => {
    render(
        <MemoryRouter>
          <Article />
        </MemoryRouter>
    );
    const backButton = screen.getByTestId("back-button");
    expect(backButton).toBeInTheDocument();
});

test("Edit Button Renders", () => {
    render(
        <MemoryRouter>
          <Article />
        </MemoryRouter>
    );
    const editButton = screen.getByTestId("edit-button");
    expect(editButton).toBeInTheDocument();
});
