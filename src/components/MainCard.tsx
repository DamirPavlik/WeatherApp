import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

const MainCard = () => {
  const [city, setCity] = useState<string>("");
  const [history, setHistory] = useState<string[]>(() => {
    const storedHistory = localStorage.getItem("history");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  const [searchData, setSearchData] = useState<any[]>([]);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  const handleChange = async (value: string) => {
    setCity(value);
    try {
      let response = await axios.get(
        `http://api.weatherapi.com/v1/search.json?key=8df62f99baa2477a803121335230212&q=${value}`
      );
      let data = response.data;
      setSearchData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const redirectToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setHistory((prevState) => [...prevState, city]);
    setHistory((prevState) => {
      const uniqueArray = [...new Set([...prevState, city])];
      return uniqueArray;
    });
    window.location.href = `/place/${city}`;
  };

  const handleSearchClick = (value: string) => {
    setHistory((prevState) => {
      const uniqueArray = [...new Set([...prevState, value])];
      return uniqueArray;
    });
    window.location.href = `/place/${value}`;
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
    </div>
  );
};

export default MainCard;
