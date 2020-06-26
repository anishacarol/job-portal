import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import useFetch from "./useFetch";

const mockData = {
  title: "frontend",
  company_name: "job gmbh",
  location: "berlin",
  employment_type: "fultime"
};

afterEach(cleanup);

describe("useFetch", () => {
  it("should return success response", async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: mockData }));
    const setUpHook = () => renderHook(() => useFetch("list"));
    const { result, waitForNextUpdate } = setUpHook();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.data).toStrictEqual(mockData);
  });

  it("should return error response", async () => {
    axios.get = jest.fn(() => Promise.reject("Error"));
    const setUpHook = () => renderHook(() => useFetch("list"));
    const { result, waitForNextUpdate } = setUpHook();

    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBe("Error");
  });
});
