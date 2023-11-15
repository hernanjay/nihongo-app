import { it, describe, expect, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import "@testing-library/jest-dom";
import App from "../../../ui/pages/main/App";
import { prettyDOM } from "@testing-library/dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("Check if App renders properly", () => {
  beforeEach(async () => {
    render(
      <UserContextProvider>
        <App />
      </UserContextProvider>
    );
  });
  it("Should Show the entire App Bar", () => {
    const { container } = render(
      <UserContextProvider>
        <App />
      </UserContextProvider>
    );
    // logRoles(container);
    // console.log(prettyDOM(container));
    // screen.logTestingPlaygroundURL();
  });
  it("Go to login page on login button click", () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const textDisplay = screen.getByText(/Don't have an account yet?/i);
    expect(textDisplay).toBeInTheDocument();
  });
  it("Should login and redirect to homepage ", async () => {
    const emailField = screen.getByPlaceholderText(/Email/i);
    const passField = screen.getByPlaceholderText(/Enter password/i);
    expect(emailField).toBeInTheDocument();
    expect(passField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: "nan" } });
    fireEvent.change(passField, { target: { value: "Wew@123321" } });
    const loginButton = screen.getByTestId("login-button");
    fireEvent.click(loginButton);
  });
});
