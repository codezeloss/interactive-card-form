import completeIcon from "../assets/icon-complete.svg";

const ThanksMessage = ({ formIsValid }) => {
  return (
    <div className="flex flex-col w-[100%]">
      <div>
        <img
          className="w-[80px] h-[80px] ml-auto mr-auto"
          src={completeIcon}
          alt="complete icon"
        />
        <div className="mt-[35px] mb-[48px] text-center ml-auto mr-auto">
          <h1 className="font-space text-[28px] text-[#21092F]">Thank you</h1>
          <p className="font-space text-[18px] mt-[16px]">
            We’ve added your card details
          </p>
        </div>
      </div>

      <div>
        <button
          className="w-[327px] font-space text-[18px] py-[15px] bg-very-dark-violet text-white rounded-[8px]"
          onClick={formIsValid}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ThanksMessage;
