import { useState } from "react";
import useInput from "../hooks/use-input";
import ContentContainer from "../UI/ContentContainer";
import Cards from "./Cards";
import ThanksMessage from "./ThanksMessage";

const UserForm = () => {
  const [formValid, setFormValid] = useState(true);

  // Name Input
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  // Card Number Input
  const ccFormat = (value) => {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  };

  const {
    value: enteredCardNumber,
    isValid: enteredCardNumberIsValid,
    hasError: cardNumberInputHasError,
    valueChangeHandler: cardNumberChangeHandler,
    valueBlurHandler: cardNumberBlurHandler,
    reset: resetCardNumberInput,
  } = useInput(
    (value) => value.trim() !== "" && (value.length >= 12 || value.length <= 16)
  );

  const {
    value: enteredMonth,
    isValid: enteredMonthIsValid,
    hasError: monthInputHasError,
    valueChangeHandler: monthChangeHandler,
    valueBlurHandler: monthBlurHandler,
    reset: resetMonthInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      !isNaN(value) &&
      value.length >= 1 &&
      value.length <= 2
  );

  const {
    value: enteredYear,
    isValid: enteredYearIsValid,
    hasError: yearInputHasError,
    valueChangeHandler: yearChangeHandler,
    valueBlurHandler: yearBlurHandler,
    reset: resetYearInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      !isNaN(value) &&
      (value.length === 4 || value.length === 2)
  );

  const {
    value: enteredCVC,
    isValid: enteredCVCIsValid,
    hasError: CVCInputHasError,
    valueChangeHandler: CVCChangeHandler,
    valueBlurHandler: CVCBlurHandler,
    reset: resetCVCInput,
  } = useInput(
    (value) =>
      value.trim() !== "" &&
      !isNaN(value) &&
      value.length >= 3 &&
      value.length < 4
  );

  // form Submission
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    if (
      !enteredNameIsValid &&
      !enteredCardNumberIsValid &&
      !enteredMonthIsValid &&
      !enteredYearIsValid &&
      !enteredCVCIsValid
    ) {
      return;
    }

    resetNameInput();
    resetCardNumberInput();
    resetMonthInput();
    resetYearInput();
    resetCVCInput();
  };

  const formIsValid = () => {
    setFormValid((prevState) => !prevState);
  };

  // form validation
  let UserFormIsValid = false;

  if (
    enteredNameIsValid &&
    enteredCardNumberIsValid &&
    enteredMonthIsValid &&
    enteredYearIsValid &&
    enteredCVCIsValid
  ) {
    UserFormIsValid = true;
  }

  // Classes
  const nameInputClasses = nameInputHasError
    ? "font-space w-[381px] h-[45px] py-[11px] px-[16px] border-[#FF5050] rounded-[8px] border-[1px] br3:w-[327px]"
    : "font-space w-[381px] h-[45px] py-[11px] px-[16px] border-light-violet rounded-[8px] border-[1px] br3:w-[327px]";

  const cardNumberInputClasses = cardNumberInputHasError
    ? "font-space w-[381px] h-[45px] py-[11px] px-[16px] border-[#FF5050] rounded-[8px] border-[1px] br3:w-[327px]"
    : "font-space w-[381px] h-[45px] py-[11px] px-[16px] border-light-violet rounded-[8px] border-[1px] br3:w-[327px]";

  const monthInputClasses = monthInputHasError
    ? "font-space w-[80px] h-[45px] py-[11px] px-[16px] border-[#FF5050] rounded-[8px] border-[1px] mr-[10px] br3:w-[72px] br3:mr-[8px]"
    : "font-space w-[80px] h-[45px] py-[11px] px-[16px] border-light-violet rounded-[8px] border-[1px] mr-[10px] br3:w-[72px] br3:mr-[8px]";

  const yearInputClasses = yearInputHasError
    ? "font-space w-[80px] h-[45px] py-[11px] px-[16px] border-[#FF5050] rounded-[8px] border-[1px] mr-[20px] br3:w-[72px] br3:mr-[11px]"
    : "font-space w-[80px] h-[45px] py-[11px] px-[16px] border-light-violet rounded-[8px] border-[1px] mr-[20px] br3:w-[72px] br3:mr-[11px]";

  const cvcInputClasses = CVCInputHasError
    ? "font-space w-[191px] h-[45px] py-[11px] px-[16px] border-[#FF5050] rounded-[8px] border-[1px] br3:w-[164px]"
    : "font-space w-[191px] h-[45px] py-[11px] px-[16px] border-light-violet rounded-[8px] border-[1px] br3:w-[164px]";

  return (
    <ContentContainer>
      <Cards
        cardNumber={enteredCardNumber}
        username={enteredName}
        month={enteredMonth}
        year={enteredYear}
        userCVC={enteredCVC}
        formValid={formValid}
      />
      <div>
        {formValid ? (
          <form onSubmit={formSubmissionHandler}>
            <div>
              <div className="flex flex-col mb-[26px]">
                <label className="font-space mb-[9px] uppercase text-xs font-medium text-[12px] tracking-[2px] text-very-dark-violet">
                  Cardholder Name
                </label>
                <input
                  className={nameInputClasses}
                  type="text"
                  placeholder="e.g. John Doe"
                  id="name"
                  onChange={nameChangeHandler}
                  onBlur={nameBlurHandler}
                  value={enteredName}
                />
                {nameInputHasError && (
                  <p className="error-message-text">Not Valid</p>
                )}
              </div>

              <div className="flex flex-col mb-[26px]">
                <label className="font-space mb-[9px] uppercase text-xs font-medium text-[12px] tracking-[2px] text-very-dark-violet">
                  Card Number
                </label>
                <input
                  className={cardNumberInputClasses}
                  type="text"
                  placeholder="e.g. 1234 5678 9123"
                  id="cardNumber"
                  onChange={cardNumberChangeHandler}
                  onBlur={cardNumberBlurHandler}
                  value={ccFormat(enteredCardNumber)}
                />
                {cardNumberInputHasError && (
                  <p className="error-message-text">
                    Wrong format, numbers only
                  </p>
                )}
              </div>

              <div className="flex flex-col mb-[40px]">
                <label className="font-space mb-[9px] uppercase text-xs font-medium text-[12px] tracking-[2px] text-very-dark-violet">
                  Exp. Date (MM/YY) <span>CVC</span>
                </label>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <input
                      className={monthInputClasses}
                      type="text"
                      placeholder="MM"
                      id="month"
                      onChange={monthChangeHandler}
                      onBlur={monthBlurHandler}
                      value={enteredMonth}
                    />
                    {monthInputHasError && (
                      <p className="error-message-text">Can’t be blank</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      className={yearInputClasses}
                      type="text"
                      placeholder="YY"
                      id="year"
                      onChange={yearChangeHandler}
                      onBlur={yearBlurHandler}
                      value={enteredYear}
                    />
                    {yearInputHasError && (
                      <p className="error-message-text">Can’t be blank</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <input
                      className={cvcInputClasses}
                      type="text"
                      placeholder="e.g. 123"
                      id="CVC"
                      onChange={CVCChangeHandler}
                      onBlur={CVCBlurHandler}
                      value={enteredCVC}
                    />
                    {CVCInputHasError && (
                      <p className="error-message-text">Can’t be blank</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                className="font-space text-[18px] py-[15px] px-[157px] bg-very-dark-violet text-white rounded-[8px] br3:w-[327px] br3:px-0"
                onClick={formIsValid}
                disabled={!UserFormIsValid}
              >
                Confirm
              </button>
            </div>
          </form>
        ) : (
          <ThanksMessage formIsValid={formIsValid} />
        )}
        {/* {!formValid && <ThanksMessage formIsValid={formIsValid} />} */}
      </div>
    </ContentContainer>
  );
};

export default UserForm;
