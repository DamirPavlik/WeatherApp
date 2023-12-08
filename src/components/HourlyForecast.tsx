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
