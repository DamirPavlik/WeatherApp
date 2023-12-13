import { SearchItemsProps } from "../types";
const SearchItems: React.FC<SearchItemsProps> = ({
  item,
  onClick,
  isSelected,
}) => (
  <div
    onClick={onClick}
    className={`bg-[#eaecef] hover:bg-[#dcdfe3]  transition-all duration-300 ease-linear px-5 py-5 w-[88%] cursor-pointer ${
      isSelected ? "bg-[#dcdfe3]" : ""
    }`}
  >
    {`${item.name} - ${item.country}`}
  </div>
);

export default SearchItems;
