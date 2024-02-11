import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { useSelector } from "react-redux";

const SectionContainer = styled.section`
  margin-bottom: 4rem;
  transform: translateY(-6rem);
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const GroupSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <SectionContainer>
      <ListContainer>
        <li className="h-[24rem] rounded-[1rem] bg-white bg-hana bg-sizeGroup bg-PosGp bg-no-repeat shadow-card lg:flex lg:h-[280px] lg:flex-1 lg:flex-col lg:bg-lgSizeGp lg:bg-lgPosGp">
          <div className="flex h-[6rem] items-center border-b border-[##eee] px-[3rem] lg:min-h-[60px] lg:px-[30px]">
            <Link
              to={"/"}
              className="w-full bg-arrow bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
            >
              하나금융그룹
            </Link>
          </div>
          <div className="h- relative p-[3rem] pt-[3.4rem] lg:flex lg:flex-grow lg:flex-col lg:overflow-hidden lg:px-[30px] lg:pb-[36px] lg:pt-[26px]">
            <p
              className="text-[2.2rem] 
        font-[700] lg:text-[22px]"
            >
              <span>함께 성장하며</span>
              <br />
              <span>행복을 나누는 금융</span>
            </p>
            {largeScreen && (
              <p className="mt-auto text-[14px] text-[#666]">
                <span>직원, 손님, 사회 모두가 행복한</span>
                <br />
                <span>금융회사로 성장해갑니다</span>
              </p>
            )}
          </div>
        </li>
        <li className="h-[24rem] rounded-[1rem] bg-white bg-global bg-sizeGroup bg-PosGp bg-no-repeat shadow-card lg:flex lg:h-[280px] lg:flex-1 lg:flex-col lg:bg-lgSizeGp lg:bg-lgPosGp">
          {/* {linkComponent} */}
          <div className="flex h-[6rem] items-center border-b border-[##eee] px-[3rem] lg:min-h-[60px] lg:px-[30px]">
            <Link
              to={"/"}
              className="w-full bg-arrow bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
            >
              글로벌 네트워크
            </Link>
          </div>
          {/* {bodyComponent} */}
          <div className="h- relative p-[3rem] pt-[3.4rem] lg:flex lg:flex-grow lg:flex-col lg:overflow-hidden lg:px-[30px] lg:pb-[36px] lg:pt-[26px]">
            <p
              className="text-[2.2rem] 
        font-[700] lg:text-[22px]"
            >
              <span>함께 성장하며</span>
              <br />
              <span>행복을 나누는 금융</span>
            </p>
            {largeScreen && (
              <p className="mt-auto text-[14px] text-[#666]">
                <span>직원, 손님, 사회 모두가 행복한</span>
                <br />
                <span>금융회사로 성장해갑니다</span>
              </p>
            )}
          </div>
        </li>
        <li className="h-[26rem] rounded-[1rem] bg-[#effbf7] bg-stock bg-sizeStock bg-right-bottom bg-no-repeat shadow-card lg:flex lg:h-[280px] lg:flex-1 lg:flex-col lg:bg-lgSizeStock lg:bg-right-bottom">
          {/* {linkComponent} */}
          <div className="flex h-[6rem] items-center border-b border-[##eee] px-[3rem] lg:min-h-[60px] lg:px-[30px]">
            <Link
              to={"/"}
              className="w-full bg-arrow bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
            >
             주가정보
            </Link>
          </div>
          {/* {bodyComponent} */}
          <div className="h- relative p-[3rem] pt-[3.4rem] lg:flex lg:flex-grow lg:flex-col lg:overflow-hidden lg:px-[30px] lg:pb-[36px] lg:pt-[26px]">
            <p className="text-[1.6rem] text-[#666]">
              Hana Financial Group (086790)
            </p>
            <p className="mt-[0.8rem]">
              <strong>
                <span className="text-[4.4rem]">54,300</span>
                <span> KRW</span>
              </strong>
            </p>
            <p className="mt-6 text-[#666]">
              Compared to the previous day -900 won (-1.63%)
              <span className="relative ml-[1.2rem] before:absolute before:left-0 before:top-[20%] before:mt-1 before:block before:border-l-[0.7rem] before:border-r-[0.7rem] before:border-t-[1rem] before:border-[#1c8ff0] before:border-l-transparent before:border-r-transparent" />
            </p>
          </div>
        </li>
      </ListContainer>
    </SectionContainer>
  );
};

export default GroupSection;
