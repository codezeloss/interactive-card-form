import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // Valid Input
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // onChange
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  // onBlur
  const valueBlurHandler = (e) => {
    setIsTouched(true);
  };

  // reset user Input
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
