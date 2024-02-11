import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { options, socials } from "../../../constant/data";
import styled from "styled-components";
import React from "react";
const SocialContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 4.4rem;

  @media (min-width: 1024px) {
    order: 1;
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
`;

const PositionRelativeContainer = styled.div`
  position: relative;
`;

interface StyledButtonProps {
  isOpen: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => (props.isOpen ? "#444" : "initial")};
  color: #aaa;
  flex: 1;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 1rem 1rem;
  padding-left: 1.2rem;
  text-align: left;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;
`;

interface ArrowProps {
  isOpen: boolean;
}

const StyledArrow = styled(IoMdArrowDropup)<ArrowProps>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(-180deg)" : "none")};
  position: relative;
  right: 1.2rem;
  font-size: 20px;
`;

const StyledList: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
  borderTopLeftRadius: "1rem",
  borderTopRightRadius: "1rem",
  paddingLeft: "1.2rem",
  paddingTop: "1.6rem",
  paddingBottom: "1.6rem",
  fontWeight: "bold",
};

const StyledListLgScreen: React.CSSProperties = {
  position: "relative",
  display: "flex",
  flexDirection: "row",
  gap: "34px",
  padding: 0,
};

const StyledOpenList: React.CSSProperties = {
  borderBottom: "1px solid #aaa",
  backgroundColor: "#444",
  color: "#aaa",
};

const SocialItem = styled.li`
  width: 100%;
  max-width: 100%;

  @media (min-width: 1024px) {
    width: fit-content;
  }
`;

const SocialIconsContainer = styled.div`
  margin-top: 0.8rem;
  border-top: 1px solid #888;
  padding-top: 2.3rem;

  @media (min-width: 1024px) {
    margin-top: 0;
    border-top: none;
    padding-top: 0;
  }
`;

const SocialIconsList = styled.ul`
  display: flex;
  gap: 2.8rem;
`;

const FooterImageLink = styled(Link)`
  position: absolute;
  bottom: 4.5rem;
  right: 2rem;

  @media (min-width: 1024px) {
    bottom: -132px;
    right: 0;
  }
`;

const FooterLogoImage = styled.img`
  width: 4.2rem;

  @media (min-width: 1024px) {
    width: 65px;
  }
`;

const Social = () => {
  const largeScreen = useSelector(selectScreen);
  const [isOpen, setIsOpen] = useState(false);

  const inlineStyles = {
    ...StyledList,
    ...(largeScreen ? StyledListLgScreen : ""),
    ...(isOpen ? StyledOpenList : ""),
  };

  return (
    <SocialContainer>
      <PositionRelativeContainer>
        <StyledButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {!largeScreen && (
            <React.Fragment>
              <span>이용약관</span>
              <StyledArrow isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </React.Fragment>
          )}
        </StyledButton>
        <motion.ul
          animate={{
            display: isOpen || largeScreen ? "flex" : "none",
            bottom: isOpen ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
          style={inlineStyles}
        >
          {options.map((option) => {
            return <SocialItem key={option.id}>{option.option}</SocialItem>;
          })}
        </motion.ul>
      </PositionRelativeContainer>
      <SocialIconsContainer>
        <SocialIconsList>
          {socials.map((social) => {
            return (
              <li key={social.id}>
                <img src={social.iconUrl} alt="" />
              </li>
            );
          })}
        </SocialIconsList>
      </SocialIconsContainer>
      <FooterImageLink to={"/"}>
        <FooterLogoImage
          src="https://www.hanafn.com/assets/img/ko/img-accessibility.svg"
          alt=""
        />
      </FooterImageLink>
    </SocialContainer>
  );
};

export default Social;
