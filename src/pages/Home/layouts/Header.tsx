import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";

interface Props {
  isScrolled: boolean;
  isHover: boolean;
}

const HeaderContainer = styled.header<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7.2rem; 
  background-color: ${props => (props.isScrolled || props.isHover ? "#ffffff" : "transparent")};
  z-index: 999;
  transition: all 300ms ease-out;

  @media (min-width: 1024px) {
    height: 84px; 
  }
`;

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  
  @media (min-width: 1024px) {
    padding: 0 40px; 
  }
`;

const LogoLink = styled(NavLink)<Props>`
display: block;
height: 2.2rem; 
width: 11rem; 
background-image: url(${props => (props.isScrolled || props.isHover ? 'https://www.hanafn.com/assets/img/ko/logo.svg' : 'https://www.hanafn.com/assets/img/ko/logo-w.svg')});
background-size: contain;
background-repeat: no-repeat;

@media (min-width: 1024px) {
  height: 28px; 
  width: 140px; 
}
`;

const FlexContainer = styled.div`
  display: flex;
  justify-self: end;
`;

const PlusButton = styled.button<Props>`
  background-image: url(${props => (props.isScrolled || props.isHover ? 'https://www.hanafn.com/assets/img/ko/btn-key-info.svg' : 'https://www.hanafn.com/assets/img/ko/btn-key-info-w.svg')});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 24px;
  height: 30px;
  width: 30px;
`;

const HanaButton = styled.button<Props>`
  background-image: url(${props => (props.isScrolled || props.isHover ? 'https://www.hanafn.com/assets/img/ko/btn-network.svg' : 'https://www.hanafn.com/assets/img/ko/btn-network-w.svg')});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 24px;
  display: none;
  height: 30px;
  width: 30px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const EarthButton = styled.button<Props>`
  background-image: url(${props => (props.isScrolled || props.isHover ? 'https://www.hanafn.com/assets/img/ko/btn-language.svg' : 'https://www.hanafn.com/assets/img/ko/btn-language-w.svg')});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 24px;
  display: none;
  height: 30px;
  width: 30px;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const HamburgerButton = styled.button<Props>`
  background-image: url(${props => (props.isScrolled || props.isHover ? 'https://www.hanafn.com/assets/img/ko/btn-menu.svg' : 'https://www.hanafn.com/assets/img/ko/btn-menu-w.svg')});
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 2rem; /* Adjust this value based on your design */
  height: 30px;
  width: 30px;

  @media (min-width: 1024px) {
    margin-left: 24px; /* Adjust this value based on your design */
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled} isHover={isHover}>
      <InnerContainer>
        <LogoLink to={"/"} isScrolled={isScrolled} isHover={isHover} />
        <NavBar isScrolled={isScrolled} isHover={isHover} setIsHover={setIsHover} />
        <FlexContainer>
          <PlusButton
            isScrolled={isScrolled}
            isHover={isHover}
          />
          <HanaButton
            isScrolled={isScrolled}
            isHover={isHover}
          />
          <EarthButton
            isScrolled={isScrolled}
            isHover={isHover}
          />
          <HamburgerButton
            className="icon3"
            isScrolled={isScrolled}
            isHover={isHover}
          />
        </FlexContainer>
      </InnerContainer>
      <ProgressBar isScrolled={isScrolled} />
    </HeaderContainer>
  );
};

export default Header;



// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import NavBar from "../../../components/NavBar";
// import ProgressBar from "../../../components/ProgressBar";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHover, setIsHover] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       setIsScrolled(scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`${
//         isScrolled || isHover ? "bg-white" : "bg-transparent"
//       } fixed z-[999] h-[7.2rem] w-full transition-all duration-300 ease-out lg:h-[84px] `}
//     >
//       <div className="relative flex h-full items-center justify-between px-[2rem] lg:px-[40px]">
//         <NavLink
//           to={"/"}
//           className={`${
//             isScrolled || isHover ? "bg-scrollLogo" : "bg-logo"
//           }  h-[2.2rem] w-[11rem] bg-contain bg-no-repeat lg:h-[28px] lg:w-[140px]`}
//         />
//         <NavBar
//           isScrolled={isScrolled}
//           isHover={isHover}
//           setIsHover={setIsHover}
//         />
//         <div className="flex justify-self-end">
//           <button
//             className={`${
//               isScrolled || isHover ? "bg-blackPlus" : "bg-whitePlus"
//             } ml-[24px] h-[30px] w-[30px]`}
//           />
//           <button
//             className={`${
//               isScrolled || isHover ? "bg-hanaBlackIcon" : "bg-hanaWhiteIcon"
//             } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
//           />
//           <button
//             className={`${
//               isScrolled || isHover ? "bg-blackEarth" : "bg-whiteEarth"
//             } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
//           />
//           <button
//             className={`${
//               isScrolled || isHover ? "bg-blackHamburger" : "bg-whiteHamburger"
//             } bg-hanaIcon ml-[2rem] h-[30px] w-[30px] lg:ml-[24px]`}
//           />
//         </div>
//       </div>
//       <ProgressBar isScrolled={isScrolled} />
//     </header>
//   );
// };

// export default Header;

