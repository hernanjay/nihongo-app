import { it, describe } from "vitest";
import { logRoles, render } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Register from "../../../ui/pages/register/Register";

describe("Check if login page renders properly", () => {
  it("Should Show the entire login page", () => {
    const { container } = render(
      <BrowserRouter>
        <UserContextProvider>
          <Register />
        </UserContextProvider>
      </BrowserRouter>
    );
    logRoles(container);
  });
});
