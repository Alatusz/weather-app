import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ThermometerSnowflake, ThermometerSun } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock } from "@/components/dashboard/Clock";
import { weatherIcon } from "@/constants/weatherIcons";
import clear_day from "@/assets/weather/clear-day.svg";
import thermometer from "@/assets/weather/thermometer.svg";
import raindrops from "@/assets/weather/raindrops.svg";
import type { CurrentWeatherProps } from "@/types/weather";

export const CurrentWeather = ({
  weatherData,
  isLoading,
  inputValue,
  setInputValue,
  handleKeyDown,
  rainChance,
}: CurrentWeatherProps) => {
  return (
    <div className="col-span-1 lg:col-span-3 bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_10%,rgba(153,153,153,0.1)_80%)] backdrop-blur-xl border border-white/20 h-full rounded-[30px] p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 shadow-2xl">
      <Field>
        <Input
          id="search"
          placeholder="Search..."
          className="w-full rounded-full text-white"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Field>

      {isLoading ? (
        <div className="space-y-4 mt-8">
          <Skeleton className="h-[370px] w-[370px] rounded-full mx-auto" />
          <Skeleton className="h-[72px] w-[72px] mx-auto" />
          <Skeleton className="h-[24px] w-full" />
          <Skeleton className="h-[24px] w-full" />
          <Skeleton className="h-[24px] w-full" />
          <Skeleton className="h-[80px] w-full" />
        </div>
      ) : weatherData ? (
        <>
          <img
            src={
              weatherIcon[
                weatherData.weather[0].icon as keyof typeof weatherIcon
              ] || clear_day
            }
            alt=""
            className="mx-auto w-full max-w-[250px] md:max-w-[350px]"
          />
          <h1 className="text-center text-6xl md:text-7xl lg:text-8xl font-bold">
            {Math.round(weatherData?.main?.temp)}°C
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-base md:text-2xl font-semibold">
              {weatherData?.name}
            </p>
            <Clock />
          </div>
          <hr className="border-t border-[#C2D4D3] my-4" />

          <div className="flex flex-col gap-[10px]">
            <div className="flex items-center gap-[10px]">
              <ThermometerSnowflake />
              <div className="text-center ml-2">
                <p>
                  Min Temperature {Math.round(weatherData?.main?.temp_min)}
                  °C
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <ThermometerSun />
              <div className="text-center ml-2">
                <p>
                  Max Temperature {Math.round(weatherData?.main?.temp_max)}
                  °C
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between bg-[#262526] p-4 rounded-xl mt-6">
            <div className="flex items-center">
              <img src={thermometer} alt="" className="w-15 h-15" />
              <div className="flex flex-col items-start ml-2">
                <p className="text-2xl">
                  {Math.round(weatherData?.main?.feels_like)}°C
                </p>
                <p className="text-lg">Feels Like</p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={raindrops} alt="" className="w-15 h-15" />
              <div className="flex flex-col items-center ml-2">
                <p className="text-xl">
                  {Math.round((rainChance || 0) * 100)}%
                </p>
                <p className="text-lg">Rain Chance</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="mt-10 text-center opacity-50">Search for a city</div>
      )}
    </div>
  );
};
