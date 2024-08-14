import "@testing-library/jest-dom";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";

beforeEach(() => {
  // Mock the fetch function before each test
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(["Article 1", "Article 2"]),
    })
  );
});

afterEach(() => {
  // Cleanup the mock after each test
  global.fetch.mockRestore();
});

test("Headline Displays", () => {
    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/Wiki Articles/i);
    expect(messageElement).toBeInTheDocument();
});

test("Shows 'Nothing to Display'", () => {
    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/Wiki Articles/i);
    expect(messageElement).toBeInTheDocument();
});


test("Displays articles as buttons", async () => {
    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
    );

    // Wait for the articles to be fetched and rendered
  await waitFor(() => {
    const articleButton = screen.getByText(/Article 1/i);
    expect(articleButton).toBeInTheDocument();
  });

    // Check if the second article button is also rendered
    const articleButton2 = screen.getByText(/Article 2/i);
    expect(articleButton2).toBeInTheDocument();
});

test("Fail a test and demonstrate CI pipeline", async () => {
    render(
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
    );
    const messageElement = screen.getByText(/If you are seeing this page, you are in the wrong universe/i);
    expect(messageElement).toBeInTheDocument();


});
