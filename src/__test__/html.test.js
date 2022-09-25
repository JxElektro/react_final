import { render , screen } from "@testing-library/react";
import Html from "../Pages/html";
import '@testing-library/jest-dom/extend-expect';
import React from "react";

// test the component Html
test("renders Html component", () => {
  render(<Html />);
  // create a const to store the element id
  const htmlElement = screen.getByTestId("containerHtml");
  expect(htmlElement).toBeInTheDocument();
});