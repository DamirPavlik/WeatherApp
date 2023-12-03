import React from "react";
import HistoryCard from "../components/HistoryCard";

const History = () => {
  const storedHistory = localStorage.getItem("history");
  const parsedHistory = storedHistory ? JSON.parse(storedHistory) : null;

  //   if (parsedHistory !== null) {
  //     console.log(parsedHistory);
  //   }

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = "/history";
    localStorage.clear();
  };
  return (
    <>
      <HistoryCard history={parsedHistory} handleClear={handleClear} />
    </>
  );
};

export default History;
