import { Fragment } from "react";
import { DailyForecastProps } from "../types";

const DailyForecast: React.FC<DailyForecastProps> = ({ dailyData }) => {
  return (
    <div className="col-span-5">
      <div className="bg-[#eaecef] px-[30px] pt-[10px] drop-shadow-md rounded-md">
        <p className="mb-[20px] mt-[20px] text-[#202b3b]">
          Forecast for the next 7 days
        </p>
        <hr className="bg-[#cbcfd5] h-[3px] mb-[20px]" />
        {dailyData.map((day, idx, dailyData) => {
          return (
            <div key={idx}>
              <div className="w-100 py-6 flex justify-between items-center px-3">
                <div>
                  <p className="text-[#9399a2]">
                    {new Date(day.date).toLocaleDateString("en-EN", {
                      weekday: "short",
                    })}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={day.day.condition.icon}
                    alt=""
                    className="w-[30px]"
                  />

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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DailyForecast;
