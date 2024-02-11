import { useEffect, useState } from "react";

const ProgressBar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={` ${
        isScrolled
          ? "bg-white"
          : "border-b-[0.2px] bg-transparent border-[#ededed33]"
      }`}
    >
      <div
        style={{ width: `${scrollPercent}%` }}
        className={`h-[2.5px] bg-[#009178]`}
      />
    </div>
  );
};

export default ProgressBar;
