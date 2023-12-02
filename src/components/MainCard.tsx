import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import Card from "./Card";
import Form from "./Form";

interface WeatherInfo {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const MainCard = () => {
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<WeatherInfo>();
  const [error, setError] = useState<string | null>("");

  let getCurrentData = async (
    city: string,
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    console.log(navigator.geolocation.getCurrentPosition);
    try {
      let res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=8df62f99baa2477a803121335230212&q=${city}`
      );
      let data: WeatherInfo = res.data;
      setData(data);
      console.log(data);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setData(undefined);
      if (error.request.status === 400) {
        setError("This Country/City Doesn't Exist");
      }
    }
  };

  return (
    <div className="card-wrapper">
      <div
        className="card"
        style={{
          background: data?.current.condition.icon.includes("day")
            ? "url(src/assets/day.jpg)"
            : data?.current.condition.icon.includes("night")
            ? "url(src/assets/night.jpg)"
            : "",
        }}
      >
        <Form city={city} setCity={setCity} getCurrentData={getCurrentData} />
        <Card data={data} error={error} />
      </div>
    </div>
  );
};

export default MainCard;
