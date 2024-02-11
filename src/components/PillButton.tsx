import { Link } from "react-router-dom";

const PillButton = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <>
      <Link
        to={"/"}
        className={`${className} flex items-center bg-PosPill text-[1.3rem] min-h-[4rem] justify-between rounded-[2rem] bg-no-repeat pl-[2rem] pr-[3.8rem]`}
      >
        {label}
      </Link>
    </>
  );
};

export default PillButton;
