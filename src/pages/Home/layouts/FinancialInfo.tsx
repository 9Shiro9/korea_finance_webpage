import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 4rem;
  max-width: 1280px;
  transform: translateY(-6rem);
`;

const ContentCard = styled.div`
  border-radius: 1em;
  background-color: rgba(32, 59, 60, 0.95);
  padding: 3rem;
  font-size: 1rem;
  font-weight: 600;
  backdrop-filter: blur(10px);

  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    height: 200px;
  }
`;

const ContentSection = styled.div`
  @media (min-width: 1025px) {
    width: 450px;
  }
`;

const TextContent = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 3rem;
  color: white;
`;

const StyledSpan = styled.span`
  font-size: 16px;
  font-weight: 700;

  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;

const LgScreenMarginTop = styled.div`
  @media (min-width: 1025px) {
    margin-top: 1rem;
  }
`;

const YearText = styled.span`
  margin-right: 0.5rem;
  font-size: 2.2rem;
  color: #78fffb;

  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;

const FinancialNotice = styled.p`
  margin-top: 2.4rem;
  background-image: url("https://www.hanafn.com/assets/img/ko/main/ico-notice-w.svg");
  background-repeat: no-repeat;
  padding-left: 2.2rem;
  font-size: 1.4rem;
  color: white;

  @media (min-width: 1025px) {
    font-size: 14px;
    letter-spacing: 0.05em;
  }
`;

const BusinessPerformanceText = styled.span`
  font-size: 2.2rem;

  @media (min-width: 1025px) {
    font-size: 30px;
  }
`;

const ButtonSection = styled.div`
  margin-top: 6rem;
  font-size: 1.4rem;

  @media (min-width: 1025px) {
    margin-top: 0;
    display: flex;
    width: 340px;
    align-self: flex-end;
  }
`;

const FirstButtonGroup = styled.div`
  display: flex;

  @media (min-width: 1025px) {
    flex: 1;
    flex-direction: column;
    gap: 10px;
  }
`;

const ManagePerformanceButton = styled(Link)`
  flex: 1;
  background-color: white;
  background-image: url("https://www.hanafn.com/assets/img/ko/ico-download.svg");
  font-size: 14px;
  min-height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  background-position: right 1.6rem center;
  background-repeat: no-repeat;
  padding-left: 2rem;
  padding-right: 3.8rem;
  font-size: 1.3rem;
`;

const DatabookButton = styled(Link)`
  margin-left: 1rem;
  flex: 1;
  background-color: white;
  background-image: url("https://www.hanafn.com/assets/img/ko/ico-download.svg");
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4rem;
  padding-left: 2rem;
  padding-right: 3.8rem;
  font-size: 1.3rem;
  border-radius: 2rem;
  background-position: right 1.6rem center;
  background-repeat: no-repeat;

  /* Media query for lg breakpoint */
  @media (min-width: 1025px) {
    margin-left: 0;
    flex: none;
    font-size: 14px;
  }
`;

const SecondButtonGroup = styled.div`
  margin-top: 2rem;

  @media (min-width: 1025px) {
    margin-left: 3px; 
    margin-top: 0;
    display: flex;
    flex: 1.2; 
    flex-direction: column;
    gap: 10px; 
  }
`;

const HanaFinancialButton = styled(Link)`
  display: flex;
  min-height: 4rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  background-color: white;
  background-image: url("https://www.hanafn.com/assets/img/ko/ico-download.svg");
  background-position: right 1.6rem center;
  background-repeat: no-repeat;
  padding-left: 2rem;
  padding-right: 3.8rem;
  font-size: 1.3rem;

  @media (min-width: 1025px) {
    font-size: 14px;
  }
`;

const WebCastingButton = styled(Link)`
  margin-top: 2rem;
  display: flex;
  min-height: 4rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  border: 1px solid white;
  background-color: var(--mic); /* Assuming you have a CSS variable for background color */
  background-image: url('https://www.hanafn.com/assets/img/ko/ico-webcast-w.svg'); /* Replace 'url_to_your_image' with the actual URL */
  background-position: right 1.6rem center;
  background-repeat: no-repeat;
  padding-left: 2rem;
  padding-right: 3.8rem;
  font-size: 1.3rem;
  color: white;

  @media (min-width: 1024px) {
    margin-top: 0;
    font-size: 14px;
  }
`;


const FinancialInfo = () => {
  return (
    <section>
      <Container>
        <ContentCard>
          <ContentSection>
            <TextContent>
              <StyledSpan>하나금융그룹</StyledSpan>
              <br />
              <LgScreenMarginTop>
                <YearText>2023년</YearText>
                <BusinessPerformanceText>경영실적 발표</BusinessPerformanceText>
              </LgScreenMarginTop>
            </TextContent>
            <FinancialNotice>
              본 재무제표는 실적발표일 기준 추정치이므로 추후 변경 될 수
              있습니다.
            </FinancialNotice>
          </ContentSection>
          <ButtonSection>
            <FirstButtonGroup>
              <ManagePerformanceButton to={"/"}>
                경영실적
              </ManagePerformanceButton>
              <DatabookButton to={"/"}>Databook</DatabookButton>
            </FirstButtonGroup>
            <SecondButtonGroup>
              <HanaFinancialButton to={"/"}>
                하나금융그룹 FS
              </HanaFinancialButton>
              <WebCastingButton
                to={"/"}
              >
                Web Casting
              </WebCastingButton>
            </SecondButtonGroup>
          </ButtonSection>
        </ContentCard>
      </Container>
    </section>
  );
};

export default FinancialInfo;
