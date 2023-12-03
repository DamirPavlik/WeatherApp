import React from "react";

type FormData = {
  city: string;
  redirectToPage: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (value: string) => void;
  searchData: any;
  handleSearchClick: (city: string) => void;
};

const Form = ({
  city,
  redirectToPage,
  handleChange,
  searchData,
  handleSearchClick,
}: FormData) => {
  return (
    <>
      <form onSubmit={(e) => redirectToPage(e)}>
        <div className="flex">
          <input
            className="w-[70%] text-[16px] py-[5px] px-[10px] rounded-md focus:outline-none"
            value={city}
            name="city"
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter a City or Country"
          />
          <button className="w-[25%] ml-auto block">Search</button>
        </div>
        <div className="">
          {searchData?.map((item: any) => (
            <div key={item.name} onClick={() => handleSearchClick(item.name)}>
              {item.name} - {item.country}
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default Form;
