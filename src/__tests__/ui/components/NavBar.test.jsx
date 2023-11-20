import { it, describe, beforeEach, expect } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import NavBar from "../../../ui/Components/NavBar";

describe("Check if Navigation Bar renders properly", () => {
  beforeEach(() => {
    <BrowserRouter>
      <UserContextProvider>
        <NavBar />
      </UserContextProvider>
    </BrowserRouter>;
  });

  it("Should Show the entire Navigation Bar", () => {
    const { container } = render(
      <BrowserRouter>
        <UserContextProvider>
          <NavBar />
        </UserContextProvider>
      </BrowserRouter>
    );
    logRoles(container);
  });
  it("Should Show register and login button if user not logged in", async () => {
    const registerButton = await screen.findByText(/register/i);
    const loginButton = await screen.findByText(/login/i);
    expect(registerButton).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
