import React from "react";

const SideBar: React.FC<{}> = () => {
  return (
    <div className="bg-[#eaecef] rounded-lg h-full w-3/4 drop-shadow-lg">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-8">
          <a href="/">
            <img
              src="/src/assets/searchIcon.png"
              alt="Search Icon"
              className="w-6 block mx-auto"
            />
            <p className="text-sm">Search</p>
          </a>
        </div>
        <div className="text-center">
          <a href="/history">
            <img
              src="/src/assets/history.png"
              alt="History Icon"
              className="w-6 block mx-auto"
            />
            <p className="text-sm">History</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
