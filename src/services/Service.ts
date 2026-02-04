import axios from "axios";
import type { WeatherResponse, ForecastResponse } from "@/types/weather";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getWeather = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
};

export const getForecast = async (city: string): Promise<ForecastResponse> => {
  const response = await axios.get<ForecastResponse>(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
  );
  return response.data;
};
