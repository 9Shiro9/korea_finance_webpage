import { Link } from "react-router-dom";

const GroupLink = ({
  linkText,
  isReport = false,
}: {
  linkText: string;
  isReport?: boolean;
}) => {
  return (
    <div
      className={`${
        isReport ? "" : "border-b border-[##eee]"
      } flex h-[6rem] items-center px-[3rem] lg:min-h-[60px] lg:px-[30px]`}
    >
      <Link
        to={"/"}
        className="w-full bg-arrow bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default GroupLink;
