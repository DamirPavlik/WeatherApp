import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import { PlaceProps } from "../types";

const Place = ({ weatherData, error }: PlaceProps) => {
  return (
    <div>
      {weatherData ? (
        <div>
          <div className="grid grid-cols-12 content-center gap-4 p-[30px]  mb-[110px]">
            <div className="col-span-7">
              <CurrentWeather
                location={weatherData.location}
                condition={weatherData.current.condition}
                temp_c={weatherData.current.temp_c}
                icon={weatherData.current.condition.icon}
              />
            </div>
            <div className="col-span-5">
              <DailyForecast dailyData={weatherData.forecast.forecastday} />
            </div>
          </div>
          <HourlyForecast
            hourlyData={weatherData?.forecast.forecastday[0].hour}
          />
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Place;
