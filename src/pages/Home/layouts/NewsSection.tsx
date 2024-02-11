import NewsLink from "../../../components/NewsLink";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { newsDatas } from "../../../constant/data";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import styled from 'styled-components';

const NewsSectionContainer = styled.section`
  padding: 4rem 2rem 4.5rem; /* Top, right, bottom, left */
  
  @media (min-width: 1024px) {
    padding: 80px 40px 4.5rem; /* Top, right, bottom */
  }
`;
const MaxWidthContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
`;

const ImageFigure = styled.figure`
  margin-top: 1.6rem;
  overflow: hidden;
  border-radius: 1rem;
`;

const HoverImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 300ms ease-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1024px) {
    margin-top: 24px;
    min-height: 128px;
  }
`;

const NewsTag = styled.span`
  margin-top: 4px;
  display: inline-flex;
  height: 23px;
  align-items: center;
  justify-content: center;
  border: 1px solid #009178;
  padding: 0 8px;
  font-size: 12px;
  font-weight: bold;
  color: #009178;
  border-radius: 4px;
`;

const NewsParagraph = styled.p`
  margin-top: 1.6rem;
  font-size: 1.6rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-weight: bold;
  }
`;

const NewsDate = styled.p`
  margin-top: auto;
  font-size: 14px;
  color: #666;
`;

const NewSection = () => {
  const largeScreen = useSelector(selectScreen);
  const [id, setId] = useState("");

  return (
    <NewsSectionContainer >
      <MaxWidthContainer >
        <NewsLink />
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            1025: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
        >
          {newsDatas.map((data) => {
            return (
              <StyledSwiperSlide key={data.id}>
                <Link
                  to={"/"}
                  onMouseEnter={() => {
                    largeScreen && setId(data.id);
                  }}
                  onMouseLeave={() => {
                    largeScreen && setId("false");
                  }}
                >
                  <ImageFigure>
                    <HoverImg
                      src={data.imgSrc}
                      alt=""
                    />
                  </ImageFigure>
                  <StyledContainer >
                    {largeScreen && (
                      <div>
                        <NewsTag >
                          하나뉴스
                        </NewsTag>
                      </div>
                    )}
                    <NewsParagraph >
                      {data.p}
                    </NewsParagraph>
                    {largeScreen && (
                      <NewsDate >
                        2024.02.07
                      </NewsDate>
                    )}
                  </StyledContainer>
                </Link>
              </StyledSwiperSlide>
            );
          })}
        </Swiper>
      </MaxWidthContainer>
    </NewsSectionContainer>
  );
};

export default NewSection;
