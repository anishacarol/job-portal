import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

jest.mock("./pages/JobListPage/JobListPage.js", () => () => (
  <div>JobListPage</div>
));

describe("<App/>", () => {
  it("renders App component", () => {
    const { getByText } = render(<App />);
    const listPage = getByText(/JobListPage/i);

    expect(listPage).toBeInTheDocument();
  });
});
