import { useSelector } from "react-redux";
import StockCard from "../pages/Home/components/StockCard";
import PillButton from "./PillButton";
import { selectScreen } from "../redux/slice/homeSlice";

const GroupBody = ({
  isStock = false,
  firstText,
  secondText,
  isReport = false,
  imgSrc,
  firstBtnLabel,
  secondBtnLabel,
  isMic = false,
}: {
  firstText?: string;
  secondText?: string;
  isStock?: boolean;
  isReport?: boolean;
  imgSrc?: string;
  firstBtnLabel?: string;
  secondBtnLabel?: string;
  isMic?: boolean;
}) => {
  const largeScreen = useSelector(selectScreen);

  return (
    <div
      className={`h- relative p-[3rem] lg:flex lg:flex-grow lg:flex-col lg:overflow-hidden ${
        isReport
          ? "border-b pt-0 lg:border-0 lg:pt-0 lg:px-[30px]"
          : "pt-[3.4rem] lg:px-[30px] lg:pb-[36px] lg:pt-[26px]"
      }`}
    >
      {isStock && <StockCard />}
      <p
        className={` font-[700] ${
          isReport
            ? "mb-[2.6rem] mt-[53px] text-[1.8rem] lg:mb-[32px] lg:mt-auto lg:text-[22px]"
            : "text-[2.2rem] lg:text-[22px]"
        }`}
      >
        <span>{firstText}</span>
        <br />
        <span>{secondText}</span>
      </p>
      {largeScreen && !isReport && !isStock && (
        <p className="mt-auto text-[14px] text-[#666]">
          <span>직원, 손님, 사회 모두가 행복한</span>
          <br />
          <span>금융회사로 성장해갑니다</span>
        </p>
      )}

      {isReport && imgSrc && (
        <img
          src={imgSrc}
          alt=""
          className="absolute bottom-[9.4rem] right-0 h-[8rem] w-[12rem] lg:h-[107px] lg:bottom-[27px] lg:w-[161px] lg:right-[-20px] shadow-card"
        />
      )}
      {isReport && firstBtnLabel && secondBtnLabel && (
        <div className="flex justify-between lg:flex-col lg:gap-y-[10px]">
          <PillButton
            className="flex-1 bg-[#f2f2f2] bg-download font-semibold lg:w-fit"
            label={firstBtnLabel}
          />
          <PillButton
            className={`ml-[1rem] flex-1 bg-[#f2f2f2] font-semibold lg:ml-0 lg:w-fit ${
              isMic ? "bg-blackMic" : "bg-download"
            }`}
            label={secondBtnLabel}
          />
        </div>
      )}
    </div>
  );
};

export default GroupBody;
