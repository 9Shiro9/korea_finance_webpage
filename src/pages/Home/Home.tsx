import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import FinancialInfo from "./layouts/FinancialInfo";
import GroupSection from "./layouts/GroupSection";
import NewsSection from "./layouts/NewsSection";
import AnnounceSection from "./layouts/AnnounceSection";
import RecruitSection from "./layouts/RecruitSection";
import Footer from "./layouts/Footer";
import { setScreen } from "../../redux/slice/homeSlice";

const Container = styled.div`
  background-color: #f5fbfa;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    padding: 0 40px;
    padding-bottom: 60px;
  }
`;

const MaxWidthContainer = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    max-width: 1280px;
  }
`;

const Home = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  dispatch(setScreen(deviceWidth > 1024));

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Container>
        <MaxWidthContainer>
          <FinancialInfo />
          <GroupSection />
          {/* <ReportSection /> */}
        </MaxWidthContainer>
      </Container>
      <NewsSection />
      <AnnounceSection />
      <RecruitSection />
      <Footer />
    </>
  );
};

export default Home;

