// Icons
import { Eye, Waves, Wind, ThermometerSun } from "lucide-react";

// Types
import type { HighlightsProps } from "@/types/weather";

export const Highlights = ({ weatherData, forecastData }: HighlightsProps) => {
  const visibility = weatherData?.visibility
    ? weatherData.visibility / 1000
    : forecastData?.list[0].visibility
      ? forecastData.list[0].visibility / 1000
      : 0;

  // const windDeg = weatherData?.wind?.deg ?? forecastData?.list[0].wind.deg ?? 0;
  // const feelsLike = weatherData?.main?.feels_like ?? forecastData?.list[0].main.feels_like ?? 0;
  const humidity =
    weatherData?.main?.humidity ?? forecastData?.list[0].main.humidity ?? 0;
  const pressure =
    weatherData?.main?.pressure ?? forecastData?.list[0].main.pressure ?? 0;

  const highlightCards = [
    {
      title: "Visibility",
      value: visibility.toFixed(1),
      unit: "km",
      icon: Eye,
      iconColor: "text-blue-300",
    },
    {
      title: "Humidity",
      value: humidity,
      unit: "%",
      icon: Waves,
      iconColor: "text-cyan-300",
    },
    {
      title: "Wind Speed",
      value: weatherData?.wind?.speed ?? 0,
      unit: "km/h",
      icon: Wind,
      iconColor: "text-green-300",
    },
    {
      title: "Pressure",
      value: pressure,
      unit: "hPa",
      icon: ThermometerSun,
      iconColor: "text-orange-300",
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Today's Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlightCards.map((item, index) => (
          <div
            key={index}
            className="bg-[#262526] p-4 rounded-xl flex flex-col justify-between overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <p className="text-sm opacity-70">{item.title}</p>
              <item.icon
                className={`w-5 h-5 ${item.iconColor || "text-blue-300"}`}
              />
            </div>
            <p className="text-2xl font-bold mt-2">
              {item.value}{" "}
              <span className="text-sm font-normal">{item.unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
