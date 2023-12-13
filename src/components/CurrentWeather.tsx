import { WeatherInfo } from "../types";

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
          {location.name} - {location.country}
        </h2>
        <p className="text-slate-500 mb-24">{condition.text}</p>
        <h2 className="text-[40px] font-extrabold leading-none">{temp_c}°</h2>
      </div>
    )}
    {icon && <img src={icon} alt="" className="h-full" />}
  </div>
);

export default CurrentWeather;
