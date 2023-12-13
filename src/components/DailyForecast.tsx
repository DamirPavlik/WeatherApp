import { Fragment } from "react";

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

const DailyForecast = ({
  dailyData,
}: {
  dailyData: WeatherInfo["forecast"]["forecastday"];
}) => (
  <div className="col-span-5">
    <div className="bg-[#eaecef] px-[30px] pt-[10px] drop-shadow-md rounded-md">
      <p className="mb-[20px] mt-[20px] text-[#202b3b]">
        Forecast for the next 7 days
      </p>
      <hr className="bg-[#cbcfd5] h-[3px] mb-[20px]" />
      {dailyData.map((day, idx, dailyData) => {
        return (
          <Fragment>
            <div
              key={idx}
              className="w-100 py-6 flex justify-between items-center px-3"
            >
              <div>
                <p className="text-[#9399a2]">
                  {new Date(day.date).toLocaleDateString("en-EN", {
                    weekday: "short",
                  })}
                </p>
              </div>
              <div className="flex items-center">
                <img src={day.day.condition.icon} alt="" className="w-[30px]" />

                <p className="text-[#202b3b]">{day.day.condition.text}</p>
              </div>
              <div>
                <p className="text-[#202b3b]">
                  {day.day.maxtemp_c}°/
                  <span className="text-[#9399a2]">{day.day.mintemp_c}°</span>
                </p>
              </div>
            </div>
            {idx === dailyData.length - 1 ? null : (
              <hr className="bg-[#cbcfd5] h-[2px] " />
            )}
          </Fragment>
        );
      })}
    </div>
  </div>
);

export default DailyForecast;
