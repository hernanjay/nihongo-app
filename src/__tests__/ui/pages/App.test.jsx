import { it, describe, expect, beforeEach, vi } from "vitest";
import {
  act,
  fireEvent,
  getByText,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import "@testing-library/jest-dom";
import App from "../../../ui/pages/main/App";
import { QuestionContextProvider } from "../../../logic/context/QuestionContext";

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
    render(
      <QuestionContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </QuestionContextProvider>
    );
  });
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  it("Should Show the entire App Bar", async () => {
    const { container } = render(
      <QuestionContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </QuestionContextProvider>
    );
    // logRoles(container);
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
    await fireEvent.change(emailField, { target: { value: "nan" } });
    await fireEvent.change(passField, { target: { value: "Wew@123321" } });
    const loginButton = screen.getByTestId("login-button");
    await waitFor(() => {
      const loader = screen.getByTestId("loader");
      expect(loader).toBeInTheDocument();
      fireEvent.click(loginButton);
    });
    act(() => vi.advanceTimersByTime(4000));
    expect;
  }, 1000);
  it("shoulb be logged in and inside home page", () => {
    // screen.logTestingPlaygroundURL();
  });
});
