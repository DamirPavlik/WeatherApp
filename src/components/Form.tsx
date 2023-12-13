import React, { Fragment } from "react";
import SearchItems from "./SearchItems";
import { SearchData, FormProps } from "../types";

const Form: React.FC<FormProps> = ({
  city,
  redirectToPage,
  handleChange,
  searchData,
  handleSearchClick,
  rounded,
  handleKeyPress,
  idx,
}) => {
  return (
    <Fragment>
      <form onSubmit={(e) => redirectToPage(e)}>
        <div className="flex">
          <input
            autoComplete="off"
            className={`w-[88%] text-[16px] drop-shadow-md focus:outline-none bg-[#eaecef] py-3 pl-5 ${
              rounded ? "rounded-[30px]" : "rounded-t-[30px]"
            }`}
            value={city}
            name="city"
            onChange={(e) => handleChange(e.currentTarget.value)}
            onKeyDown={(e) => handleKeyPress(e)}
            placeholder="Enter a City or Country"
          />
          <button className="w-[11.5%] drop-shadow-md ml-auto block bg-[#eaecef] rounded-md">
            Search
          </button>
        </div>
        <div className="">
          {searchData?.map((item: SearchData, index: number) => (
            <SearchItems
              key={item.id}
              item={item}
              onClick={() => handleSearchClick(item)}
              isSelected={idx === index}
            />
          ))}
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
