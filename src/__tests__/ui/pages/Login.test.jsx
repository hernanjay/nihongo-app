import { it, describe, expect, beforeAll } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContextWrapper from "../../../ui/components/ContextWrapper";
import App from "../../../ui/pages/main/App";

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

describe("-------------- Login Render Testing --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_LOGIN-100 Check if login page renders properly", () => {
      beforeEach(async () => {
        render(<ContextWrapper app={<App />} />);
      });
      it("VITEST_UT_LOGIN-101 Should Show the entire login page", () => {
        // screen.logTestingPlaygroundURL();
        const loginButton = screen.getByRole("button", { name: /login/i });
        fireEvent.click(loginButton);
        const textDisplay = screen.getByText(/Don't have an account yet?/i);
        expect(textDisplay).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-102 Should show Email input field", () => {
        const email = screen.getByPlaceholderText(/Email/i);
        expect(email).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-103 Should show Password input field", () => {
        const password = screen.getByPlaceholderText(/Enter password/i);
        expect(password).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-104 Should show Form's Login button", () => {
        const loginButton = screen.getByTestId("login-button");
        expect(loginButton).toBeInTheDocument();
      });
    });
  });
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_LOGIN-200 Check if login form Show error alerts on input fields if input is invalid ", () => {
      beforeAll(() => {
        render(<ContextWrapper app={<App />} />);
      });
      it("VITEST_UT_LOGIN-201 Should Show popup alert on email field if login button pressed without input in email field", async () => {
        const loginButton = screen.getByTestId("login-button");
        fireEvent.click(loginButton);
        const emailPopUp = await screen.findByText(/Email field is empty/i);
        const passwordPopUp = await screen.findByText(
          /Password field is empty/i
        );
        expect(emailPopUp).toBeInTheDocument();
        expect(passwordPopUp).toBeInTheDocument();
      });
    });
  });
});
