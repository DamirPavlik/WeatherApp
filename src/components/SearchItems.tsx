import { SearchItemsProps } from "../types";

const SearchItems: React.FC<SearchItemsProps> = ({
  item,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        isSelected ? "bg-[#dcdfe3]" : "bg-[#eaecef] "
      } hover:bg-[#dcdfe3]  transition-all duration-300 ease-linear px-5 py-5 w-[88%] cursor-pointer`}
    >
      {`${item.name} - ${item.country}`}
    </div>
  );
};

export default SearchItems;
