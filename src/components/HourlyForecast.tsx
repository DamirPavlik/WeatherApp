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
      <div className="flex overflow-x-auto">
        {hourlyData.map((hour: any) => {
          const formattedTime = new Date(hour.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const isCurTime = formattedTime === roundedTime;
          return (
            <div
              className={`px-[30px] whitespace-nowrap ${formattedTime} ${
                isCurTime ? "bg-red-400" : ""
              }`}
              key={hour.time}
              ref={isCurTime ? curTimeRef : null}
            >
              <p>{formattedTime}</p>
              <img src={hour.condition.icon} alt="" />
              <p>{hour.condition.text}</p>
              <h5>{hour.temp_c}</h5>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default HourlyForecast;
