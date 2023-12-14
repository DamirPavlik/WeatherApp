import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { PlaceProps } from "../types";

const Place = ({ weatherData, error }: PlaceProps) => {
  const curDay = new Date().toISOString().split("T")[0];
  const findDay = weatherData?.forecast.forecastday.find(
    (day) => day.date === curDay
  );
  const hourlyData = findDay?.hour.filter((_, i) => i % 3 === 2);

  return (
    <div>
      {weatherData ? (
        <div className="grid grid-cols-12 content-center gap-4 p-[30px]">
          <div className="col-span-7">
            <CurrentWeather
              location={weatherData.location}
              condition={weatherData.current.condition}
              temp_c={weatherData.current.temp_c}
              icon={weatherData.current.condition.icon}
            />
            <HourlyForecast hourlyData={hourlyData} />
          </div>
          <DailyForecast dailyData={weatherData.forecast.forecastday} />
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Place;
