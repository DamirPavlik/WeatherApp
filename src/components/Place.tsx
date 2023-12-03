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

interface Place {
  weatherData: WeatherInfo | undefined;
  error: string | null;
}

const Place = ({ weatherData, error }: Place) => {
  return (
    <div>
      {weatherData ? <div>{weatherData.location.name}</div> : <p>{error}</p>}
    </div>
  );
};

export default Place;
