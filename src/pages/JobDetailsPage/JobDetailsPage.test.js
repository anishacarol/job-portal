import { cleanup, render, waitForElement } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import JobDetailsPage from "./JobDetailsPage";

jest.mock("../../hooks/useFetch");

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

afterEach(cleanup);

describe("<JobDetailsPage/>", () => {
  it("renders JobDetailsPage component properly", async () => {
    useFetch.mockReturnValue({
      loading: false,
      data: mockData
    });

    const { asFragment, getByText } = render(
      <MemoryRouter>
        <JobDetailsPage />
      </MemoryRouter>
    );

    await waitForElement(() => getByText("frontend"));

    const title = getByText(/frontend/i);
    const company_name = getByText(/job gmbh/i);
    const location = getByText(/berlin/i);
    const employment_type = getByText(/fullTime/i);

    expect(title).toBeInTheDocument();
    expect(company_name).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(employment_type).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Loader during async call", async () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null
    });

    const { asFragment } = render(
      <MemoryRouter>
        <JobDetailsPage />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders Error component if there is any error during api call", async () => {
    useFetch.mockReturnValue({
      loading: false,
      data: null,
      error: "error"
    });

    const { asFragment } = render(
      <MemoryRouter>
        <JobDetailsPage />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
