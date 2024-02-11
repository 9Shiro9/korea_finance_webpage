/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1025px",
      xl: "1230px",
    },
    extend: {
      backgroundImage: {
        logo: "url('https://www.hanafn.com/assets/img/ko/logo-w.svg')",
        scrollLogo: "url('https://www.hanafn.com/assets/img/ko/logo.svg')",
        notice:
          "url('https://www.hanafn.com/assets/img/ko/main/ico-notice-w.svg')",
        download:
          "url('https://www.hanafn.com/assets/img/ko/ico-download.svg')",
        mic: "url('https://www.hanafn.com/assets/img/ko/ico-webcast-w.svg')",
        arrow: "url('https://www.hanafn.com/assets/img/ko/arrow-right.svg')",
        hana: "url('https://www.hanafn.com/assets/img/ko/main/bg-hanagroup.png')",
        global:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-global.png')",
        stock:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-shareprice-m.png')",
        blackMic: "url('https://www.hanafn.com/assets/img/ko/ico-webcast.svg')",
        recruit:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-recruit-m.png')",
        lgRecruit:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-recruit.png')",
        longWhiteArrow:
          "url('https://www.hanafn.com/assets/img/ko/arrow-right-long-w.svg')",
        longBlackArrow:
          "url('https://www.hanafn.com/assets/img/ko/arrow-right-long.svg')",
        hanaWhiteIcon:
          "url('https://www.hanafn.com/assets/img/ko/btn-network-w.svg')",
        hanaBlackIcon:
          "url('https://www.hanafn.com/assets/img/ko/btn-network.svg')",
        blackEarth:
          "url('https://www.hanafn.com/assets/img/ko/btn-language.svg')",
        whiteEarth:
          "url('https://www.hanafn.com/assets/img/ko/btn-language-w.svg')",
        whitePlus:
          "url('https://www.hanafn.com/assets/img/ko/btn-key-info-w.svg')",
        blackPlus:
          "url('https://www.hanafn.com/assets/img/ko/btn-key-info.svg')",
        whiteHamburger:
          "url('https://www.hanafn.com/assets/img/ko/btn-menu-w.svg')",
        blackHamburger:
          "url('https://www.hanafn.com/assets/img/ko/btn-menu.svg')",
        reportMic:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-result.png')",
      },
      backgroundPosition: {
        PosPill: "right 1.6rem center",
        PosGp: "right 1.8rem bottom 2.8rem",
        PosAnnounce: "right 2rem center",
        lgPosGp: "right 30px bottom 30px",
        lgPosRecruit: "50% center",
      },
      backgroundSize: {
        sizeStock: "20.8rem 13rem",
        sizeGroup: "7.2rem 7.2rem",
        lgSizeGp: "80px 80px",
        lgSizeStock: "240px 160px",
        lgSizeMic: "60px 88px",
      },
      colors: {
        darkGreen: "#228d55",
        earning: "rgba(32, 59, 60, .95)",
        main: "#f5fbfa",
      },
      boxShadow: {
        card: "-3px 4px 20px 0 rgba(177, 201, 201, .35)",
      },
    },
  },
  plugins: [],
};
