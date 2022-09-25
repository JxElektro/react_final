import Alfa from "../Pages/Alfa";
import React from "react";
import { render , screen } from "@testing-library/react"; 
import '@testing-library/jest-dom/extend-expect';


  test("renders Alfa component", () => {

    render(<Alfa />);
    // create a const to store the element id
    const alfaElement = screen.getByTestId("containerAlfa");
    expect(alfaElement).toBeInTheDocument();
  });




