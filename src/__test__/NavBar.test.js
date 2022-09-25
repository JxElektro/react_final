import { render, screen } from "@testing-library/react";
import NavBar from "../Componentes/NavBar"
import '@testing-library/jest-dom/extend-expect';

test('Render NavBar by role', () => {
  render(<NavBar role="navigation" />);
  const navBar = screen.getByRole('navigation');
  expect(navBar).toBeInTheDocument();
})

