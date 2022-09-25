import React from "react";
import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Jss from "../Pages/js";

// test the component Jss
test("renders Jss component", () => {
  render(<Jss />);
  // create a const to store the element id
  const jssElement = screen.getByTestId("containerJs");
  expect(jssElement).toBeInTheDocument();
});