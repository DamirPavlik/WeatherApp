import CurrentWeather from "./CurrentWeather";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

interface WeatherInfo {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        avgtemp_c: number;
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        hour: {
          time: string;
          temp_c: number;
        }[];
      };
    }>;
  };
}

interface Place {
  weatherData: WeatherInfo | undefined;
  error: string | null;
}

const Place = ({ weatherData, error }: Place) => {
  let findHourlyData = (
    weatherData: WeatherInfo | undefined
  ): { time: string; temp_c: number }[] => {
    const currentDate = new Date().toISOString().split("T")[0];
    const hourlyData =
      weatherData?.forecast.forecastday.find((day) => day.date === currentDate)
        ?.day.hour || [];
    return hourlyData as { time: string; temp_c: number }[];
  };

  const hourlyData = findHourlyData(weatherData);

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
