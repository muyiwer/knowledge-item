import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Header } from "../components/header";

test("header renders with correct text", () => {
  render(<Header/>);
  const headerName = screen.getByTestId("logo-name");
  const headerName2 = screen.getByTestId("logo-name2");
  expect(headerName.textContent).toBe("Knowledge");
  expect(headerName2.textContent).toBe("Item");
}); 


