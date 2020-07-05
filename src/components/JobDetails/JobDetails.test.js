import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import JobDetails from "./JobDetails";

const mockData = {
  name: "frontend",
  location: { city: "berlin" },
  customField: [{ fieldId: "COUNTRY", valueLabel: "Germany" }],
  typeOfEmployment: { label: "full_Time" },
  company: { name: "job gmbh" },
  jobAd: {
    sections: {
      jobDescription: { title: "", text: "" },
      qualifications: { title: "", text: "" }
    }
  }
};

describe("<JobDetails/>", () => {
  it("renders JobDetails component properly", () => {
    const { asFragment, getByText } = render(
      <MemoryRouter>
        <JobDetails data={mockData} />
      </MemoryRouter>
    );
    const name = getByText(/frontend/i);
    const companyName = getByText(/job gmbh/i);
    const city = getByText(/berlin/i);
    const typeOfEmployment = getByText(/full_time/i);

    expect(name).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(typeOfEmployment).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
