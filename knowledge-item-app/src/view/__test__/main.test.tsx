import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DataTable } from "../components/main";
import { store } from "../../context/store";

test("page renders with correct parent className", () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );
  const homePageParentDiv = screen.getByTestId("home-table");
  expect(homePageParentDiv).toHaveClass("home-table");
});

test("page renders with correct table header names", () => {
  render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );
  const homePageTableHeaderType = screen.getByTestId("table-header-type");
  const homePageTableHeaderUpdatedOn = screen.getByTestId(
    "table-header-updated"
  );
  const homePageTableHeaderCreatedOn = screen.getByTestId(
    "table-header-created"
  );
  const homePageTableHeaderAuthor = screen.getByTestId("table-header-author");
  const homePageTableHeaderService = screen.getByTestId("table-header-service");
  const homePageTableHeaderStatus = screen.getByTestId("table-header-status");
  const homePageTableHeaderPrivate = screen.getByTestId("table-header-private");
  const homePageTableHeaderSummary = screen.getByTestId("table-header-summary");
  expect(homePageTableHeaderType.textContent).toBe("Type #");
  expect(homePageTableHeaderUpdatedOn.textContent).toBe("Updated");
  expect(homePageTableHeaderCreatedOn.textContent).toBe("Created");
  expect(homePageTableHeaderAuthor.textContent).toBe("Author");
  expect(homePageTableHeaderService.textContent).toBe("Service");
  expect(homePageTableHeaderStatus.textContent).toBe("Status");
  expect(homePageTableHeaderPrivate.textContent).toBe("Private");
  expect(homePageTableHeaderSummary.textContent).toBe("Summary");
});

test("page renders with correct table row lenght", async () => {
  await render(
    <Provider store={store}>
      <DataTable />
    </Provider>
  );
  const homePageTableRow =  await screen.findAllByTestId(/table-row/i);
  expect(homePageTableRow.length).toBe(13);   
}); 

describe("TableList", () => {
  it('page renders with correct table row lenght', async ()=> {
     render(
      <Provider store={store}>
        <DataTable />
      </Provider>
    );
    const homePageTableRow =  await screen.findAllByTestId(/table-row/i);
    expect(homePageTableRow.length).toBe(13); 
  })
}) 
 