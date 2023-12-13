import React, { Fragment, useEffect, useState } from "react";

interface SearchData {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

type FormData = {
  city: string;
  redirectToPage: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (value: string) => void;
  searchData: SearchData[];
  handleSearchClick: (city: SearchData) => void;
};

const Form: React.FC<FormData> = ({
  city,
  redirectToPage,
  handleChange,
  searchData,
  handleSearchClick,
}) => {
  const [rounded, setRounded] = useState<boolean>(true);

  useEffect(() => {
    setRounded(searchData.length > 0 ? false : true);
  }, [searchData]);

  return (
    <Fragment>
      <form onSubmit={(e) => redirectToPage(e)}>
        <div className="flex">
          <input
            className={`w-[88%] text-[16px] drop-shadow-md focus:outline-none bg-[#eaecef] py-3 pl-5 ${
              rounded ? "rounded-[30px]" : "rounded-t-[30px]"
            }`}
            value={city}
            name="city"
            onChange={(e) => handleChange(e.currentTarget.value)}
            placeholder="Enter a City or Country"
          />
          <button className="w-[11.5%] drop-shadow-md ml-auto block bg-[#eaecef] rounded-md">
            Search
          </button>
        </div>
        <div className="">
          {searchData?.map((item: SearchData) => (
            <div
              key={item.id}
              onClick={() => handleSearchClick(item)}
              className="bg-[#eaecef] hover:bg-[#dcdfe3] transition-all duration-300 ease-linear px-5 py-5 w-[88%] cursor-pointer"
            >
              {`${item.name} - ${item.country}`}
            </div>
          ))}
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
