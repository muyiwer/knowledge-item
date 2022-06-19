import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loader } from "../loader";

test("loader renders with correct text", () => {
  render(<Loader />);
  const loaderElement = screen.getByTestId("loader");
  const loaderName = screen.getByTestId("logo-name");
  const loaderName2 = screen.getByTestId("logo-name2");

  expect(loaderName.textContent).toBe("Knowledge");
  expect(loaderName2.textContent).toBe("Item");
  expect(loaderElement.textContent).toBe("Loading....");
});


