import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import JobCard from "./JobCard";

const mockData = {
  position: "frontend",
  companyName: "job gmbh"
  //   location: "berlin",
  //   employment_type: "full_time"
};

describe("<JobCard/>", () => {
  it("renders JobCard component properly", () => {
    const { asFragment, getByText } = render(
      <MemoryRouter>
        <JobCard {...mockData} />
      </MemoryRouter>
    );
    const position = getByText(/frontend/i);
    const companyName = getByText(/job gmbh/i);
    // const location = getByText(/berlin/i);
    // const employment_type = getByText(/Full time/i);

    expect(position).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    // expect(location).toBeInTheDocument();
    // expect(employment_type).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
