export type SearchData = {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
};

export type WeatherInfo = {
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
        hour: Array<{
          time: string;
          temp_c: number;
          condition: {
            icon: string;
            text: string;
          }
        }>
      }>;
    };
}

export type PlaceProps =  {
    weatherData: WeatherInfo | undefined;
    error: string | null;
}

export interface HistoryCardProps {
    history: string[];
    handleClear: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    handleRedirectHistory: (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>,
      item: string
    ) => void;
}

export interface SearchItemsProps {
    item: SearchData;
    onClick: () => void;
    isSelected: boolean;
}

export type FormProps = {
    city: string;
    rounded: boolean;
    idx: number | null;
    searchData: SearchData[];
    handleChange: (value: string) => void;
    redirectToPage: (e: React.FormEvent<HTMLFormElement>) => void;
    handleSearchClick: (city: SearchData) => void;
    handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export type CurrentWeatherProps = {
  location: WeatherInfo["location"];
  condition: WeatherInfo["current"]["condition"];
  temp_c: number;
  icon: string;
}

export type DailyForecastProps = {
  dailyData: WeatherInfo["forecast"]["forecastday"];
}