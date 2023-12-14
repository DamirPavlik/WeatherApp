import React, { Fragment } from "react";
import { HistoryCardProps } from "../types";

const HistoryCard: React.FC<HistoryCardProps> = ({
  history,
  handleClear,
  handleRedirectHistory,
}) => {
  return (
    <Fragment>
      {history ? (
        <Fragment>
          {history.map((item, idx) => (
            <div
              className="w-100 p-4 bg-[#eaecef] hover:bg-[#dcdfe3] transition-all duration-300 ease-linear rounded-md drop-shadow-md mb-4 cursor-pointer"
              onClick={(e) => handleRedirectHistory(e, item)}
              key={idx}
            >
              {item}
            </div>
          ))}
          <div className="text-right">
            <button
              onClick={(e) => handleClear(e)}
              className="py-3 px-5 bg-black hover:bg-[#2a2a2a] transition-all duration-300 ease-linear text-white rounded-md drop-shadow-md"
            >
              Clear All Data
            </button>
          </div>
        </Fragment>
      ) : (
        <div>No History To Show</div>
      )}
    </Fragment>
  );
};

export default HistoryCard;
