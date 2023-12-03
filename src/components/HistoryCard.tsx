import React from "react";

interface HistoryCard {
  history: string[];
  handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const HistoryCard = ({ history, handleClear }: HistoryCard) => {
  return (
    <>
      {history ? (
        history.map((item) => <div>{item}</div>)
      ) : (
        <div>No History To Show</div>
      )}
      <button onClick={(e) => handleClear(e)}>Clear</button>
    </>
  );
};

export default HistoryCard;
