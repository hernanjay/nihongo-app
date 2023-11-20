import { it, describe, expect, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

describe("-------------- Register Vitest Testing --------------", () => {
  describe("-------------- Unit Testing --------------", () => {
    describe("VITEST_UT_LOGIN-100 Check if login page renders properly", () => {
      beforeEach(async () => {
        render(<ContextWrapper app={<App />} />);
      });
      it("VITEST_UT_LOGIN-101 Should Show the entire login page", () => {
        const loginButton = screen.getByRole("button", { name: /register/i });
        fireEvent.click(loginButton);
        const textDisplay = screen.getByText(/Already have an account?/i);
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
      it("VITEST_UT_LOGIN-103 Should show Verify Password input field", () => {
        const verifyPassword = screen.getByPlaceholderText("*******");
        expect(verifyPassword).toBeInTheDocument();
      });
      it("VITEST_UT_LOGIN-104 Should show Form's Login button", () => {
        const registerButton = screen.getByTestId("register-button");
        expect(registerButton).toBeInTheDocument();
      });
    });
  });
});

describe("-------------- Unit Testing --------------", () => {
  describe("first", () => {
    second;
  });
});
describe("-------------- Integration Testing --------------", () => {});
