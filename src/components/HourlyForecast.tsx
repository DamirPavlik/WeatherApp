import React, { Fragment, useEffect, useRef } from "react";

const HourlyForecast: React.FC<any> = ({ hourlyData }) => {
  const curTimeRef = useRef<HTMLDivElement | null>(null);

  let curTime = new Date();
  curTime.setHours(curTime.getHours() + 1);
  curTime.setMinutes(0);

  let roundedTime = curTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  useEffect(() => {
    if (curTimeRef.current) {
      curTimeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <Fragment>
      <h4 className="text-xl ml-2 mb-4 font-bold">Hourly Forecast</h4>

      <div className="flex overflow-x-auto bg-[#eaecef] rounded-xl py-7">
        {hourlyData.map((hour: any, i: number) => {
          const formattedTime = new Date(hour.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const isCurTime = formattedTime === roundedTime;
          return (
            <div
              className={`px-[50px] py-1  whitespace-nowrap text-center border-l-2 ${
                i === 0 ? "" : "border-[#d8dbe0]"
              } ${formattedTime} ${isCurTime ? "bg-[#dcdee1] rounded-md" : ""}`}
              key={hour.time}
              ref={isCurTime ? curTimeRef : null}
            >
              <p className="text-md text-[#202b3b]">{formattedTime}</p>
              <img
                src={hour.condition.icon}
                alt=""
                className="block mx-auto w-full"
              />
              <p className="text-[#9399a2]">{hour.condition.text}</p>
              <h5 className="text-2xl text-[#202b3b] font-bold">
                {hour.temp_c}°C
              </h5>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default HourlyForecast;
