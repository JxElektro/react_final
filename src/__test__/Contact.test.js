import React from "react";
import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Contact from "../Pages/Contact";

// test the component Contact
test("renders Contact component", () => {
  render(<Contact />);
  // create a const to store the element id
  const contactElement = screen.getByTestId("containerContact");
  expect(contactElement).toBeInTheDocument();
});
