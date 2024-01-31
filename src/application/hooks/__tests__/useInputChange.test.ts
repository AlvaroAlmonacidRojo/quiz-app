import { renderHook, act } from "@testing-library/react";
import useInputChange from "../useInputChange";

describe("useInputChange", () => {
  it("should return the newValue", () => {
    const { result } = renderHook(() => useInputChange(""));
    const newValue = "newValue";

    act(() => {
      result.current.onChange({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe("newValue");
  });
  it("should return the initialValue", () => {
    const { result } = renderHook(() => useInputChange(""));
    const initialValue = "";

    act(() => {
      result.current.onChange({
        target: { value: "test" },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    act(() => {
      result.current.resetState();
    });

    expect(result.current.value).toBe(initialValue);
  });
});
