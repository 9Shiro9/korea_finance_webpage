import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: none; 

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    color: white;
  }
`;

interface NavLinkProps {
  isScrolled: boolean;
  isHover: boolean;
}

const StyledNavLink = styled(NavLink)<NavLinkProps>`
  padding: 0 20px; 
  font-size: 14px;
  font-weight: bold;
  transition: color 300ms ease-in-out;
  text-decoration: none;
  color: ${(props) => (props.isScrolled || props.isHover ? "black" : "")};

  @media (min-width: 1024px) {
    font-size: 18px;
    padding: 0 20px;
  }

  &:hover {
    color: #009178;
  }

  @media (min-width: 1280px) {
    padding: 0 30px;
  }
`;

const StyledList = styled.ul`
  display: flex;
`;

const NavBar = ({
  isScrolled,
  isHover,
  setIsHover,
}: {
  isScrolled: boolean;
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <NavBarContainer>
      <StyledList>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledNavLink to="/" isScrolled={isScrolled} isHover={isHover}>
            그룹소개
          </StyledNavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledNavLink to="/" isScrolled={isScrolled} isHover={isHover}>
            기업지배구조
          </StyledNavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledNavLink to="/" isScrolled={isScrolled} isHover={isHover}>
            ESG경영
          </StyledNavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledNavLink to="/" isScrolled={isScrolled} isHover={isHover}>
            투자정보
          </StyledNavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <StyledNavLink to="/" isScrolled={isScrolled} isHover={isHover}>
            PR센터
          </StyledNavLink>
        </li>
      </StyledList>
    </NavBarContainer>
  );
};

export default NavBar;
