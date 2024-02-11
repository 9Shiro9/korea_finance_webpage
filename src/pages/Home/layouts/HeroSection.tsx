import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { largeHeroImg, smallHeroImg } from "../../../constant/data";
import styled from "styled-components";

const HeroSectionContainer = styled.section`
position: relative;
height: 59rem; 
overflow: hidden;
padding-top: 7.2rem; 

@media (min-width: 1024px) {
  padding-top: 84px; 
  height: 640px; 
}
`;

const TitleImageContainer = styled.figure`
max-width: 1280px;
background-color: var(--dark-green);
padding: 0 2rem; 
margin-left: auto;
margin-right: auto;
margin-top: 0; 

@media (min-width: 1024px) {
  padding: 0 40px;
  margin-top: 3rem; 
}
`;

interface ImageProp {
src: string;
}

const TitleImage = styled.img<ImageProp>`
margin-top: 0; 
position: absolute;
z-index: 90;
width: 32rem;
src: ${(props) => props.src};

@media (min-width: 1024px) {
  margin-top: 40px;
  width: 612px;
}
`;

const HeroImageContainer = styled.figure`
position: absolute;
left: 50%;
top: 0;
height: 100%;
width: 100%;
transform: translateX(-50%);
`;

const HeroImage = styled.img<ImageProp>`
height: 100%; 
width: 100%; 
object-fit: cover; 
`;

const HeroSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <HeroSectionContainer>
      <TitleImageContainer >
        <TitleImage src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085741227.png" />
      </TitleImageContainer>
      <HeroImageContainer>
        <HeroImage
          src={largeScreen ? largeHeroImg : smallHeroImg}
        />
      </HeroImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
