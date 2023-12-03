import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const MainCard = () => {
  const [city, setCity] = useState<string>("");
  const [history, setHistory] = useState<string[]>(() => {
    const storedHistory = localStorage.getItem("history");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const [searchData, setSearchData] = useState();

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  let handleChange = async (value: string) => {
    setCity(value);
    try {
      let response = await axios.get(
        `http://api.weatherapi.com/v1/search.json?key=8df62f99baa2477a803121335230212&q=${city}`
      );
      let data = response.data;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  let redirectToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHistory((prevState) => [...prevState, city]);
    window.location.href = `/place/${city}`;
  };

  let handleSearchClick = (value: string) => {
    setHistory((prevState) => [...prevState, value]);
    window.location.href = `/place/${value}`;
  };

  let handleTest = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(history);
    console.log(localStorage.getItem("history"));
  };

  return (
    <div className="">
      <Form
        city={city}
        handleChange={handleChange}
        redirectToPage={redirectToPage}
        searchData={searchData}
        handleSearchClick={handleSearchClick}
      />
      <button onClick={(e) => handleTest(e)}>test</button>
    </div>
  );
};

export default MainCard;
