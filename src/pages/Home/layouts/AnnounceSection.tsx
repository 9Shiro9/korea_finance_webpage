import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { announceDatas, noticeDatas } from "../../../constant/data";
import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const AnnounceSectionContainer = styled.section`
  padding: 4rem 2rem 3rem;

  @media (min-width: 1024px) {
    padding: 40px 40px 120px;
  }
`;

const MaxWidthContainer = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const HalfWidthContainer = styled.div`
  width: 100%; 
  max-width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
    padding-right: 60px;
  }
`;

const StyledBorder = styled.div`
  margin-top: 3rem;
  border-top: 1px solid #eee;
  padding-top: 3rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    border-top: none;
    padding-left: 20px;
    padding-top: 0;
  }
`;

const FlexContainer = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  justify-content: space-between;

  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

const NewsTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 30px;
    font-weight: bold;
  }
`;

const MoreLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const MoreText = styled.span`
  color: transparent;
  @media (min-width: 1024px) {
    margin-right: 1rem;
    font-weight: 600;
    color: currentColor;
  }
`;

const StyledArrowRightLong = styled(FaArrowRightLong)`
  font-size: 16px;

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const NoticeList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const NoticeText = styled.p`
  font-size: 16px;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: 16px;
    font-weight: 600;
  }
`;

const NoticeDate = styled.p`
  color: #666;
`;

const AnnounceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1024px) {
    flex-grow: 1;
    flex-direction: row;
  }
`;


const AnnounceItem = styled.li`
  position: relative;
  display: flex;
  height: 4.8rem;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 0.6rem;
  padding: 0 2rem;

  @media (min-width: 1024px) {
    height: auto;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    border: none;
    border-left: 1px solid #ddd;
    border-radius: 0;
    padding-left: 20px;
    padding-right: 0;
  }
`;

const AnnounceText = styled.p`
  font-size: 1.6rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    text-align: left;
    font-size: 16px;
    letter-spacing: tighter;
  }
`;

const AnnounceLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-image: url('https://www.hanafn.com/assets/img/ko/ico-download.svg');
  background-repeat: no-repeat;
  background-position: right 2rem center;
  color: transparent;

  @media (min-width: 1024px) {
    position: relative;
    height: fit-content;
    width: fit-content;
    background-position: right; 
    padding-right: 26px;
    font-weight: bold;
    color: currentColor;
  }

  @media (min-width: 1024px) and (hover: hover) {
    &:hover {
      color: #009178; 
    }
  }
`;

const AnnounceSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <AnnounceSectionContainer>
      <MaxWidthContainer>
        <HalfWidthContainer>
          <FlexContainer >
            <NewsTitle>
              하나소식
            </NewsTitle>
            <MoreLink to={"/"}>
              <MoreText>
                More
              </MoreText>
              {largeScreen ? (
                <StyledArrowRightLong />
              ) : (
                <IoIosArrowForward />
              )}
            </MoreLink>
          </FlexContainer>
          <NoticeList >
            {noticeDatas.map((data) => {
              return (
                <NoticeItem key={data.id}>
                  <NoticeText >{data.label}</NoticeText>
                  <NoticeDate >{data.date}</NoticeDate>
                </NoticeItem>
              );
            })}
          </NoticeList>
        </HalfWidthContainer>
        <StyledBorder>
        <FlexContainer >
            <NewsTitle>
              하나소식
            </NewsTitle>
            <MoreLink to={"/"}>
              <MoreText>
                More
              </MoreText>
              {largeScreen ? (
                <StyledArrowRightLong />
              ) : (
                <IoIosArrowForward />
              )}
            </MoreLink>
          </FlexContainer>
          <AnnounceList >
            {announceDatas.map((data) => (
              <AnnounceItem
                key={data.id}
              >
                <AnnounceText>
                  {data.p}
                  {largeScreen && <br />}
                  하나금융지주회사
                </AnnounceText>
                <AnnounceLink
                  to={"/"}
                >
                  {data.label}
                </AnnounceLink>
              </AnnounceItem>
            ))}
          </AnnounceList>
        </StyledBorder>
      </MaxWidthContainer>
    </AnnounceSectionContainer>
  );
};

export default AnnounceSection;
