import { render , screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import All from "../Pages/All";

// test the component All 
test("renders All component", () => {
  render(<All />);
  // create a const to store the element id
  const allElement = screen.getByTestId("main");
  expect(allElement).toBeInTheDocument();
});