import React from "react";

interface HistoryCard {
  history: string[];
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRedirectHistory: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string
  ) => void;
}

const HistoryCard: React.FC<HistoryCard> = ({
  history,
  handleClear,
  handleRedirectHistory,
}) => {
  return (
    <>
      {history ? (
        history.map((item, idx) => (
          <div
            className="w-100 p-4 bg-[#eaecef] hover:bg-[#dcdfe3] transition-colors rounded-md drop-shadow-md mb-4 cursor-pointer"
            onClick={(e) => handleRedirectHistory(e, item)}
            key={idx}
          >
            {item}
          </div>
        ))
      ) : (
        <div>No History To Show</div>
      )}
      <div className="text-right">
        <button
          onClick={(e) => handleClear(e)}
          className="py-3 px-5 bg-black hover:bg-[#141414] transition-colors text-white rounded-md drop-shadow-md"
        >
          Clear All Data
        </button>
      </div>
    </>
  );
};

export default HistoryCard;
