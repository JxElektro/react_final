// import render, screen, and the component to be tested
import React from "react";
import { render, screen } from "@testing-library/react";
import Cards from "../Componentes/Cards";
import '@testing-library/jest-dom/extend-expect';

// test the component Cards
test("renders Cards component", () => {
  render(<Cards />);
  // create a const to store the element id
  const cardsElement = screen.getByTestId("containerCards");
  expect(cardsElement).toBeInTheDocument();
});