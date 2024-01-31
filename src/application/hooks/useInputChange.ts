import { ChangeEvent, useState } from "react";

const useInputChange = (initialState: string) => {
  const [value, setValue] = useState<string>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const resetState = () => setValue(initialState);

  return {
    value,
    onChange: handleChange,
    resetState,
  };
};

export default useInputChange;
