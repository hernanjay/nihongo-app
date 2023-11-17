import { it, describe, expect, beforeEach, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import "@testing-library/jest-dom";
import App from "../../../ui/pages/main/App";
import { QuestionContextProvider } from "../../../logic/context/QuestionContext";
import ContextWrapper from "../../../ui/components/ContextWrapper";

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

describe("Check if App renders properly", async () => {
  beforeEach(async () => {
    render(<ContextWrapper app={<App />} />);
  });
  // beforeEach(() => {
  //   vi.useFakeTimers();
  // });

  // afterEach(() => {
  //   vi.useRealTimers();
  // });
  it("Should Show the entire App Bar", async () => {
    const { container } = render(<ContextWrapper app={<App />} />);
    expect(container).not.toBeNull();
    // logRoles(container);
  });
  it("Go to login page on login button click", () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    fireEvent.click(loginButton);
    const textDisplay = screen.getByText(/Don't have an account yet?/i);
    expect(textDisplay).toBeInTheDocument();
  });
  it("Should fill up login form and login user", async () => {
    //User Data to Use
    const emailInput = "nan";
    const passInput = "Wew@123321";
    //Set User's Data inside Input Fields
    const emailField = screen.getByPlaceholderText(/Email/i);
    const passField = screen.getByPlaceholderText(/Enter password/i);
    expect(emailField).toBeInTheDocument();
    expect(passField).toBeInTheDocument();
    fireEvent.change(emailField, { target: { value: emailInput } });
    fireEvent.change(passField, { target: { value: passInput } });
    //Simulate user clicking the button
    const loginButton = screen.getByTestId("login-button");
    //Token is null
    fireEvent.click(loginButton);
    //Token is null
    //Wait for loading to finish
    const loader = await screen.findByTestId("loader");
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });
    //Token is set
  });
  it("Login button should change to logout and user token should be set", async () => {
    //Wait for loading to finish
    const loader = await screen.findByTestId("loader");
    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
    });
    //Check if user can see the logout button
    const logoutButton = await screen.findByText("Logout");
    await waitFor(() => {
      expect(logoutButton).toBeInTheDocument();
    });
    const token = localStorage.getItem("token");
    expect(token).not.toBeNull();
    screen.logTestingPlaygroundURL();
  });
});
