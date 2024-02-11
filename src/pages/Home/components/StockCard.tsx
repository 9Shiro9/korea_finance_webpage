
const StockCard = () => {
  return (
    <>
      <p className="text-[1.6rem] text-[#666]">Hana Financial Group (086790)</p>
      <p className="mt-[0.8rem]">
        <strong>
          <span className="text-[4.4rem]">54,300</span>
          <span> KRW</span>
        </strong>
      </p>
      <p className="text-[#666] mt-6">
        Compared to the previous day -900 won (-1.63%)
        <span className="relative ml-[1.2rem] before:mt-1 before:absolute before:left-0 before:top-[20%] before:block before:border-l-[0.7rem] before:border-r-[0.7rem] before:border-t-[1rem] before:border-[#1c8ff0] before:border-l-transparent before:border-r-transparent" />
      </p>
    </>
  );
};

export default StockCard;
