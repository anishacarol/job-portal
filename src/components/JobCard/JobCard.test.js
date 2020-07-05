import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import JobCard from "./JobCard";

const mockData = {
  position: "frontend",
  companyName: "job gmbh",
  country: "berlin",
  typeOfEmployment: "full_time"
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
    const country = getByText(/berlin/i);
    const typeOfEmployment = getByText(/full_time/i);

    expect(position).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(typeOfEmployment).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
