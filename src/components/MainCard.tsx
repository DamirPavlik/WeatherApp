import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

import { SearchData } from "../types";

const MainCard = () => {
  const [city, setCity] = useState<string>("");
  const [history, setHistory] = useState<string[]>(() => {
    const storedHistory = localStorage.getItem("history");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const [searchData, setSearchData] = useState<SearchData[]>([]);
  const [rounded, setRounded] = useState<boolean>(true);
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    setRounded(searchData.length > 0 ? false : true);
  }, [searchData]);

  const handleChange = async (value: string) => {
    setCity(value);
    const apiUrl = `http://api.weatherapi.com/v1/search.json?key=8df62f99baa2477a803121335230212&q=${value}`;

    try {
      let response = await axios.get(apiUrl);
      setSearchData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const redirectToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedHistory = Array.from(new Set([...history, city]));
    setHistory(updatedHistory);
    window.location.href = `/place/${city}`;
  };

  const handleSearchClick = (value: SearchData) => {
    const updatedHistory = Array.from(new Set([...history, value.name]));
    setHistory(updatedHistory);
    window.location.href = `/place/${value.url}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setIdx((prevIdx) =>
        prevIdx === null ? 0 : Math.min(prevIdx + 1, searchData.length - 1)
      );
      console.log(idx);
    } else if (e.key === "ArrowUp") {
      setIdx((prevIdx) => (prevIdx === null ? 0 : Math.max(prevIdx - 1, 0)));
    } else if (e.key === "Enter" && idx !== null) {
      e.preventDefault();
      handleSearchClick(searchData[idx]);
    }
  };

  return (
    <Fragment>
      <Form
        city={city}
        handleChange={handleChange}
        redirectToPage={redirectToPage}
        searchData={searchData}
        handleSearchClick={handleSearchClick}
        rounded={rounded}
        handleKeyPress={handleKeyPress}
        idx={idx}
      />
    </Fragment>
  );
};

export default MainCard;
