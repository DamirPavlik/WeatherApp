import React from "react";
import { WeatherInfo } from "../types";

const HourlyForecast: React.FC<any> = ({ hourlyData }) => {
  console.log(hourlyData);
  return (
    <>
      {hourlyData.map((hour: any) => (
        <div>{hour.time}</div>
      ))}
    </>
  );
};

export default HourlyForecast;
