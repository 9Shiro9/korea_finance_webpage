import { Link } from "react-router-dom";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { useSelector } from "react-redux";
import styled from "styled-components";

interface RecruitSectionContainerProps {
  largeScreen: boolean;
}

const RecruitSectionContainer = styled.section<RecruitSectionContainerProps>`
  background-image: ${(props) =>
    props.largeScreen
      ? "url('https://www.hanafn.com/assets/img/ko/main/bg-recruit.png')"
      : "url('https://www.hanafn.com/assets/img/ko/main/bg-recruit-m.png')"};
  display: flex;
  height: 24rem;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    height: 300px;
    padding: 0 40px;
    background-position: 50% center;
  }
`;

const MaxWidthContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 1280px;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const RecruitText = styled.p`
  text-align: left;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: tighter;
  color: white;

  @media (min-width: 1024px) {
    font-size: 34px;
  }
`;

const RecruitButtonGroup = styled.div`
  margin-top: 3.2rem;
  display: flex;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const TalentLink = styled(Link)`
  min-height: 5.4rem;
  color: black;
  flex: 1;
  border-radius: 50px;
  background-color: white;
  background-position: right 1.6rem center;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-image: url("https://www.hanafn.com/assets/img/ko/arrow-right-long.svg");
  font-size: 1.6rem;
  min-height: 4rem;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 3.8rem;
  background-repeat: no-repeat; /* Added bg-no-repeat */

  @media (min-width: 1024px) {
    min-height: 54px;
    min-width: 193px;
  }
`;

const RecruitmentLink = styled(Link)`
  margin-left: 2rem;
  min-height: 5.4rem;
  flex: 1;
  border-radius: 50px;
  background-color: #292f35;
  background-image: url("https://www.hanafn.com/assets/img/ko/arrow-right-long-w.svg");
  background-position: right 1.6rem center;
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
  padding-right: 3.8rem;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    margin-left: 0;
    margin-top: 16px;
    min-height: 54px;
    min-width: 193px;
  }
`;

const RecruitSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <RecruitSectionContainer largeScreen={largeScreen}>
      <MaxWidthContainer>
        <RecruitText>
          변화를 주도하는 <br />
          글로벌 인재를 기다립니다
        </RecruitText>
        <RecruitButtonGroup>
          <TalentLink to={"/"}>인재상</TalentLink>
          <RecruitmentLink to={"/"}>채용공고</RecruitmentLink>
        </RecruitButtonGroup>
      </MaxWidthContainer>
    </RecruitSectionContainer>
  );
};

export default RecruitSection;
