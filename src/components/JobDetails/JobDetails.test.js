import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import JobDetails from "./JobDetails";

const mockData = {
  name: "frontend",
  location: { city: "Berlin" },
  customField: [{ fieldId: "COUNTRY", valueLabel: "Germany" }],
  typeOfEmployment: { label: "fullTime" },
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
    // const location = getByText(/berlin/i);
    // const employment_type = getByText(/Full time/i);

    expect(name).toBeInTheDocument();
    expect(companyName).toBeInTheDocument();
    // expect(location).toBeInTheDocument();
    // expect(employment_type).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
