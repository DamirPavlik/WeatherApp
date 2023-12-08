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

export default DailyForecast;
