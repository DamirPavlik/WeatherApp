import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

interface SearchData {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}

const MainCard = () => {
  const [city, setCity] = useState<string>("");
  const [history, setHistory] = useState<string[]>(() => {
    const storedHistory = localStorage.getItem("history");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const [searchData, setSearchData] = useState<SearchData[]>([]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleChange = async (value: string) => {
    setCity(value);
    const apiUrl = `http://api.weatherapi.com/v1/search.json?key=8df62f99baa2477a803121335230212&q=${value}`;

    try {
      let response = await axios.get(apiUrl);
      console.log(response.data);
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

  return (
    <Fragment>
      <Form
        city={city}
        handleChange={handleChange}
        redirectToPage={redirectToPage}
        searchData={searchData}
        handleSearchClick={handleSearchClick}
      />
    </Fragment>
  );
};

export default MainCard;
