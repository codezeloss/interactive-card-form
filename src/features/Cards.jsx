import cardLogo from "../assets/card-logo.svg";
import frontCard from "../assets/bg-card-front.png";
import backCard from "../assets/bg-card-back.png";

const Cards = ({ cardNumber, username, month, year, userCVC, formValid }) => {
  return (
    <div className="min-w-[541px] flex flex-col  br2:flex-col-reverse br2:min-w-[100%] br2:justify-center br2:items-center br2:w-[343px]">
      <div className="relative mb-[37px] br2:z-20  br2:mt-[-68px] br2:ml-[-89px] br3:ml-[-42px]">
        <img
          className="z-0 drop-shadow-[0px_39px_60px_rgba(0,0,0,0.142481)] br2:w-[285px] br2:h-[156.21px]"
          src={frontCard}
          alt="front-card"
        />
        <div className="absolute w-[447px] h-[100%] z-10 top-0 text-white flex flex-col justify-between py-[28px] px-[32px] br2:py-[19px] br2:px-[20px] br2:w-[285px]">
          <img
            className="w-[84px] h-[47px] br2:w-[54px] br2:h-[30px]"
            src={cardLogo}
            alt="card logo"
          />
          <div>
            <p className="font-space text-[28px] font-medium tracking-[3.42222px] mb-[25px] br2:text-[18px] br2:tracking-[2.2px]">
              {!formValid ? cardNumber : "0000 0000 0000 0000"}
            </p>
            <div className="flex flex-row justify-between">
              <p className="tracking-[2px] uppercase br2:text-[9px]">
                {!formValid ? username : "Felicia Leire"}
              </p>
              <p className="tracking-[2px] br2:text-[9px]">
                {!formValid ? `${month}/${year}` : "09/00"}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative ml-[94px] br2:ml-[36px]">
        <img
          className="z-0 drop-shadow-[0px_39px_60px_rgba(0,0,0,0.142481)] br2:w-[286px] br2:h-[157px]"
          src={backCard}
          alt="front-card"
        />
        <div className="absolute z-10 top-0 text-white br2:w-[285px]">
          <p className="text-[14px] tracking-[2px] medium mr-[57px] ml-[358px] mt-[111px] br2:text-[9px] br2:mt-[71px] br2:ml-[231px]">
            {!formValid ? userCVC : "1000000"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
