import {
  cleanup,
  fireEvent,
  render,
  waitForElement
} from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import JobListPage from "./JobListPage";

jest.mock("../../hooks/useFetch");

const mockData = {
  content: [
    {
      name: "frontend",
      location: { city: "Berlin" },
      customField: [{ fieldId: "COUNTRY", valueLabel: "Germany" }],
      typeOfEmployment: { label: "fullTime" },
      company: { name: "job gmbh" },
      department: { label: "IT Dep" },
      jobAd: {
        sections: {
          jobDescription: { title: "", text: "" },
          qualifications: { title: "", text: "" }
        }
      }
    }
  ]
};

afterEach(cleanup);

describe("<JobListPage/>", () => {
  it("renders JobListPage component properly", async () => {
    useFetch.mockReturnValue({
      loading: false,
      data: mockData
    });

    const { asFragment, getByText, container } = render(
      <MemoryRouter>
        <JobListPage />
      </MemoryRouter>
    );

    await waitForElement(() => getByText("frontend"));

    const position = getByText(/frontend/i);
    const company_name = getByText(/Job gmbh/i);
    const city = getByText(/Berlin/i);
    const location = getByText(/Berlin , Germany/i);
    const employment_type = getByText(/fullTime/i);

    expect(position).toBeInTheDocument();
    expect(company_name).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(employment_type).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();

    const selectComp = container.querySelectorAll("select[name='country']")[0];

    fireEvent.change(selectComp, { target: { value: "all" } });
    expect(selectComp.value).toBe("all");

    fireEvent.change(selectComp, { target: { value: "Germany" } });
    expect(selectComp.value).toBe("Germany");
  });

  it("renders Loader during async call", async () => {
    useFetch.mockReturnValue({
      loading: true,
      data: null
    });

    const { asFragment } = render(
      <MemoryRouter>
        <JobListPage />
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
        <JobListPage />
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
