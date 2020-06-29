import { render } from "@testing-library/react";
import React from "react";
import Error from "./Error";

describe("<Error/>", () => {
  it("renders Error component properly", () => {
    const { asFragment } = render(<Error />);

    expect(asFragment()).toMatchSnapshot();
  });
});
