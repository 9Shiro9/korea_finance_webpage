import FooterSocial from "../components/Social";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: black;
  color: #888;
  padding: 0 40px;

  @media (min-width: 1024px) {
    padding: 0 40px;
  }
`;

const MaxWidthContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const PaddingContainer = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 3.6rem;
  padding-top: 3.4rem;

  @media (min-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 50px;
    padding-top: 40px;
    order: 2;
  }
`;

const FooterHanaImage = styled.img`
  margin-bottom: 2rem;
  opacity: 0.7;
`;

const FooterDate = styled.span`
  @media (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const FooterText = styled.p`
  margin-top: 0.6rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <MaxWidthContainer>
        <PaddingContainer>
          <FooterHanaImage
            src="https://www.hanafn.com/assets/img/ko/logo-w.svg"
            alt=""
          />
          <p>
            <span>서울특별시 중구 을지로 66</span>
            <FooterDate >02.2002.1110</FooterDate>
          </p>
          <FooterText>
            Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.
          </FooterText>
        </PaddingContainer>
        <FooterSocial />
      </MaxWidthContainer>
    </FooterContainer>
  );
};

export default Footer;
