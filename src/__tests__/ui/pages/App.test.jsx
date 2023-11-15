import { it, describe } from "vitest";
import { logRoles, render } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import "@testing-library/jest-dom";
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

describe("Check if App renders properly", () => {
  it("Should Show the entire App Bar", () => {
    const { container } = render(
      <UserContextProvider>
        <App />
      </UserContextProvider>
    );
    logRoles(container);
  });
});
