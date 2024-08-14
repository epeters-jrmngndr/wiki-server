import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Editor from "./Editor.jsx";

beforeAll(() => {
    // Jest isn't compatible with more recent versions of react-markdown, and so this warning arises about future incompatibility. Suppress it, for now.
  jest.spyOn(console, 'error').mockImplementation((msg) => {
    if (msg.includes('Support for defaultProps will be removed from function components')) {
      return;
    }
    console.error(msg);
  });
});

afterAll(() => {
  console.error.mockRestore();
});


test("Text matches", () => {
    render(
        <MemoryRouter>
          <Editor />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/Now Editing/i);
    expect(messageElement).toBeInTheDocument();
});
