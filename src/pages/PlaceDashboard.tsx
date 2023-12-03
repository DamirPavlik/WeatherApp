import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Place from "../components/Place";

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

const PlaceDashboard = () => {
  const { slug } = useParams();
  const [data, setData] = useState<WeatherInfo | undefined>();
  const [error, setError] = useState<string | null>("");

  let getCurrentData = async (): // e: React.FormEvent<HTMLFormElement>
  Promise<void> => {
    try {
      let res = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=8df62f99baa2477a803121335230212&q=${slug}`
      );
      let currentData: WeatherInfo = res.data;
      setData(currentData);
      console.log(currentData);
      setError(null);
    } catch (error: any) {
      setError(error.message);
      setData(undefined);
      if (error.request.status === 400) {
        setError("This Country/City Doesn't Exist");
      }
    }
  };

  useEffect(() => {
    getCurrentData();
  }, [slug]);

  return (
    <>
      <Place weatherData={data} error={error} />
    </>
  );
};

export default PlaceDashboard;
