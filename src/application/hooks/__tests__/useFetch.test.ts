import { renderHook } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import useFetch from "../useFetch";
import { mockQuiz } from "@application/__mocks__/mockQuiz";

const mockGetData = async () => {
  return mockQuiz;
};

describe("useFetch", () => {
  it("should fetch data correctly", async () => {
    const { result } = renderHook(() => useFetch(mockGetData));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(null);
      expect(result.current.data).toEqual(mockQuiz);
    });
  });

  it("should handle errors correctly", async () => {
    const mockErrorData = async () => {
      throw new Error("Test error");
    };

    const { result } = renderHook(() => useFetch(mockErrorData));

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe("Error fetching data");
      expect(result.current.data).toBe(null);
    });
  });
});
