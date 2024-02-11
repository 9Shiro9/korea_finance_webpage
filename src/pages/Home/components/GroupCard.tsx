const GroupCard = ({
  className,
  linkComponent,
  bodyComponent,
  isReport = false,
}: {
  className?: string;
  linkComponent: JSX.Element;
  bodyComponent: JSX.Element;
  isReport?: boolean;
}) => {
  return (
    <li
      className={`${
        isReport ? "" : "rounded-[1rem]"
      } bg-no-repeat lg:flex lg:h-[280px] lg:flex-1 lg:flex-col ${className}`}
    >
      {linkComponent}
      {bodyComponent}
    </li>
  );
};

export default GroupCard;
