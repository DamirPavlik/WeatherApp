import React from "react";

type FormData = {
  city: string;
  setCity: (value: string) => void;
  getCurrentData: (value: string, e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ city, setCity, getCurrentData }: FormData) => {
  return (
    <>
      <form onSubmit={(e) => getCurrentData(city, e)}>
        <input
          value={city}
          name="city"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a City or Country"
        />
      </form>
    </>
  );
};

export default Form;
