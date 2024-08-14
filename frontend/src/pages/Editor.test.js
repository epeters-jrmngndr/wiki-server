import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Editor from "./Editor.jsx";

test("Headline Found", () => {
    render(
        <MemoryRouter>
          <Editor />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/Now Editing/i);
    expect(messageElement).toBeInTheDocument();
});

test("Cancel Button Renders", () => {
    render(
        <MemoryRouter>
          <Editor />
        </MemoryRouter>
    );
    const cancelButton = screen.getByTestId("cancel-button");
    expect(cancelButton).toBeInTheDocument();
});

test("Save Button Renders", () => {
    render(
        <MemoryRouter>
          <Editor />
        </MemoryRouter>
    );
    const saveButton = screen.getByTestId("save-button");
    expect(saveButton).toBeInTheDocument();
});
