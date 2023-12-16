import axios from "axios";
import { useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import Place from "../../components/Place";
import { WeatherInfo } from "../../types";

const PlaceDashboard = () => {
  const { slug } = useParams();
  const [data, setData] = useState<WeatherInfo | undefined>();
  const [error, setError] = useState<string | null>("");

  let getCurrentData = async (): // e: React.FormEvent<HTMLFormElement>
  Promise<void> => {
    try {
      let res = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=8df62f99baa2477a803121335230212&q=${slug}&days=3`
      );
      let currentData: WeatherInfo = res.data;
      setData(currentData);
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
    <Fragment>
      <Place weatherData={data} error={error} />
    </Fragment>
  );
};

export default PlaceDashboard;
