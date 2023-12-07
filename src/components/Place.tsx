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

const CurrentWeather = ({
  location,
  condition,
  temp_c,
  icon,
}: WeatherInfo["current"]) => (
  <div className="flex justify-between">
    {location && condition && (
      <div>
        <h2 className="text-[30px] font-extrabold leading-none">
          {location.name}
        </h2>
        <p className="text-slate-500 mb-24">{condition.text}</p>
        <h2 className="text-[40px] font-extrabold leading-none">{temp_c}°</h2>
      </div>
    )}
    {icon && <img src={icon} alt="" className="h-full" />}
  </div>
);

const HourlyForecast = ({
  hourlyData,
}: {
  hourlyData: WeatherInfo["forecast"]["forecastday"][0]["hour"];
}) => (
  <div>
    {hourlyData.map((h, idx) => (
      <div key={idx}>
        {h.time}: {h.temp_c}°
      </div>
    ))}
  </div>
);

const DailyForecast = ({
  dailyData,
}: {
  dailyData: WeatherInfo["forecast"]["forecastday"];
}) => (
  <div className="col-span-5">
    {dailyData.map((day, idx) => (
      <div key={idx}>
        {day.day.avgtemp_c} - {day.date}
      </div>
    ))}
  </div>
);

const Place = ({ weatherData, error }: Place) => {
  let currentDate = new Date().toISOString().split("T")[0];

  return (
    <div>
      {weatherData ? (
        <div className="grid grid-cols-12 gap-4 p-[30px]">
          <div className="col-span-7">
            <CurrentWeather {...weatherData.current} />
            <HourlyForecast
              hourlyData={
                weatherData.forecast.forecastday.find(
                  (day) => day.date === currentDate
                )?.day.hour || []
              }
            />
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
