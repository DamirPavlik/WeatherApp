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

const CurrentWeather = ({
  location,
  condition,
  temp_c,
  icon,
}: {
  location: WeatherInfo["location"];
  condition: WeatherInfo["current"]["condition"];
  temp_c: number;
  icon: string;
}) => (
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

export default CurrentWeather;
