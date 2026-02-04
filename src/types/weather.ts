export type WeatherResponse = {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type ForecastResponse = {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
};

export type City = {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type List = {
  dt: number;
  main: Main2;
  weather: Weather2[];
  clouds: Clouds2;
  wind: Wind2;
  visibility: number;
  pop: number;
  sys: Sys2;
  dt_txt: string;
  rain?: Rain;
};

export type Main2 = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
};

export type Weather2 = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Clouds2 = {
  all: number;
};

export type Wind2 = {
  speed: number;
  deg: number;
  gust: number;
};

export type Sys2 = {
  pod: string;
};

export type Rain = {
  "3h": number;
};
export type Coord = {
  lon: number;
  lat: number;
};

export type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type Main = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust?: number;
};

export type Clouds = {
  all: number;
};

export type Sys = {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherGraphProps = {
  data: (List & { iconUrl?: string })[];
};

export type ChartDataPoint = {
  time: string;
  temp: number;
  icon?: string;
};

export type CustomTickProps = {
  x?: number;
  y?: number;
  payload?: {
    value: string;
  };
  chartData: ChartDataPoint[];
};

export type CurrentWeatherProps = {
  weatherData: WeatherResponse | undefined;
  isLoading: boolean;
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  rainChance?: number;
};

export type SunInfoProps = {
  sunrise: number;
  sunset: number;
};

export type HighlightsProps = {
  weatherData: WeatherResponse | undefined;
  forecastData: ForecastResponse | undefined;
};
