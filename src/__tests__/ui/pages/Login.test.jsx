import { it, describe } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "../../../ui/pages/login/Login";

describe("Check if login page renders properly", () => {
  it("Should Show the entire login page", () => {
    const { container } = render(
      <BrowserRouter>
        <UserContextProvider>
          <Login />
        </UserContextProvider>
      </BrowserRouter>
    );
    // logRoles(container);
    screen.logTestingPlaygroundURL();
  });
});
