import { it, describe } from "vitest";
import { logRoles, render, screen } from "@testing-library/react";
import { UserContextProvider } from "../../../logic/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Home from "../../../ui/pages/home/Home";
import { QuestionContextProvider } from "../../../logic/context/QuestionContext";

describe("Check if login page renders properly", () => {
  it("Should Show the entire login page", () => {
    const { container } = render(
      <BrowserRouter>
        <QuestionContextProvider>
          <UserContextProvider>
            <Home />
          </UserContextProvider>
        </QuestionContextProvider>
      </BrowserRouter>
    );
    logRoles(container);
  });
});
