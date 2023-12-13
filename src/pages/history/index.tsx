import React, { Fragment } from "react";
import HistoryCard from "../../components/HistoryCard";

const History = () => {
  const storedHistory = localStorage.getItem("history");
  const parsedHistory = storedHistory ? JSON.parse(storedHistory) : null;

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = "/history";
    localStorage.clear();
  };

  const handleRedirectHistory = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: string
  ) => {
    e.preventDefault();
    window.location.href = `/place/${item}`;
  };

  return (
    <Fragment>
      {Array.isArray(parsedHistory) ? (
        <HistoryCard
          history={parsedHistory}
          handleClear={handleClear}
          handleRedirectHistory={handleRedirectHistory}
        />
      ) : (
        <div>No History To Show</div>
      )}
    </Fragment>
  );
};

export default History;
