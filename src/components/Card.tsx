import React from "react";

interface WeatherInfo {
  location: {
    name: string;
    region: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Card: React.FC<{
  data: WeatherInfo | undefined;
  error: string | null;
}> = ({ data, error }) => {
  return (
    <div className="innerCard">
      {data == undefined ? (
        <div className="error-message">{error}</div>
      ) : (
        <div>
          <h3 className="cardTemp">{data.current.temp_c}°C</h3>
          <div className="cardCondition">
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
              className="cardConditionIcon"
            />
            <p className="cardConditionText">{data.current.condition.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
