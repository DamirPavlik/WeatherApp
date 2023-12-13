import { WeatherInfo } from "../types";

const HourlyForecast = ({
  hourlyData,
}: {
  hourlyData: WeatherInfo["forecast"]["forecastday"][0]["day"]["hour"];
}) => (
  <div>
    {hourlyData.map((h, idx) => (
      <div key={idx}>
        {h.time}: {h.temp_c}°
      </div>
    ))}
  </div>
);

export default HourlyForecast;
