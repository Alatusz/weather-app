// Assets
import clear_day from "@/assets/weather/clear-day.svg";

// Constants
import { weatherIcon } from "@/constants/weatherIcons";

// Types
import type { ForecastResponse, List } from "@/types/weather";

type ForecastListProps = {
  forecastData: ForecastResponse | undefined;
};

export const ForecastList = ({ forecastData }: ForecastListProps) => {
  if (!forecastData) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">5-Days Forecast</h2>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastData.list
          .filter((_: List, i: number) => i % 8 === 0)
          .map((item: List, index: number) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between bg-[#262526] p-4 rounded-xl"
            >
              <p className="opacity-70 text-sm">
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                  day: "numeric",
                })}
              </p>
              <img
                src={
                  weatherIcon[
                    item.weather[0].icon as keyof typeof weatherIcon
                  ] || clear_day
                }
                alt={item.weather[0].description}
                className="w-10 h-10 my-2"
              />
              <p className="font-bold">{Math.round(item.main.temp)}°C</p>
            </div>
          ))}
      </div>
    </div>
  );
};
