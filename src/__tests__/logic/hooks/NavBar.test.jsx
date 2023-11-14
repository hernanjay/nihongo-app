import React from "react";
import { expect, it, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../../../ui/components/NavBar"
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../../logic/context/AuthContext";

describe("Check if navbar renders properly", () => {
    it("It should render", () => {
      render(
        <BrowserRouter>
          <AuthContextProvider>
            <NavBar />
          </AuthContextProvider>
        </BrowserRouter>
      );
    });
    it("Should Show a login button", () => {
      render(
        <BrowserRouter>
          <AuthContextProvider>
            <NavBar />
          </AuthContextProvider>
        </BrowserRouter>
      );
      const buttonElem = screen.getByText(/Login/i);
      expect(buttonElem).toBeInTheDocument();
    });
    it("Should Login the user when login button is clicked", () => {
       render(
         <BrowserRouter>
           <AuthContextProvider>
             <NavBar />
           </AuthContextProvider>
         </BrowserRouter>
       );
       const buttonElem = screen.getByText(/Login/i);
       expect(buttonElem).toBeInTheDocument();
       fireEvent.click(buttonElem);
       expect(buttonElem).toHaveBeenCalled();
    });
  });
