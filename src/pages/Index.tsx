import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { getWeather, getForecast } from "@/services/Service";
import { Skeleton } from "@/components/ui/skeleton";
import { WeatherGraph } from "@/components/dashboard/WeatherGraph";
import { CurrentWeather } from "@/components/dashboard/CurrentWeather";
import { ForecastList } from "@/components/dashboard/ForecastList";
import { Highlights } from "@/components/dashboard/Highlights";
import { SunInfo } from "@/components/dashboard/SunInfo";
import { weatherIcon } from "@/constants/weatherIcons";
import clear_day from "@/assets/weather/clear-day.svg";

const Index = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");

  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    isError: isErrorWeather,
  } = useQuery({
    queryKey: ["weather", search],
    queryFn: () => getWeather(search),
    enabled: !!search,
  });

  const { data: forecastData, isLoading: isLoadingForecast } = useQuery({
    queryKey: ["forecast", search],
    queryFn: () => getForecast(search),
    enabled: !!search,
  });

  useEffect(() => {
    if (isErrorWeather) {
      toast.error("City not found or API error");
    }
  }, [isErrorWeather]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(inputValue);
    }
  };

  console.log(forecastData);

  return (
    <div className="flex h-dvh w-full items-center justify-center overflow-hidden p-4 pb-8 md:p-6">
      <div className="grid h-full w-full grid-cols-1 gap-6 overflow-y-auto lg:max-h-screen lg:grid-cols-10 lg:overflow-hidden">
        {/* Section 1: Current Weather */}
        <CurrentWeather
          weatherData={weatherData}
          isLoading={isLoadingWeather}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          rainChance={forecastData?.list[0]?.pop}
        />

        {/* Section 2: Forecast & Highlights */}
        <div className="relative col-span-1 flex h-full flex-col gap-6 overflow-hidden rounded-[30px] border border-white/20 bg-[linear-gradient(142deg,rgba(255,255,255,0.1)_10%,rgba(153,153,153,0.1)_80%)] p-8 shadow-2xl backdrop-blur-md lg:col-span-7">
          {isLoadingForecast ? (
            <div className="h-full w-full flex flex-col gap-6">
              <Skeleton className="h-8 w-50 rounded-xl" />
              <div className="grid grid-cols-5">
                <Skeleton className="h-40 w-50 rounded-xl" />
                <Skeleton className="h-40 w-50 rounded-xl" />
                <Skeleton className="h-40 w-50 rounded-xl" />
                <Skeleton className="h-40 w-50 rounded-xl" />
                <Skeleton className="h-40 w-50 rounded-xl" />
              </div>
              <Skeleton className="h-8 w-50 rounded-xl" />
              <div className="grid grid-cols-4">
                <Skeleton className="h-20 w-70 rounded-xl" />
                <Skeleton className="h-20 w-70 rounded-xl" />
                <Skeleton className="h-20 w-70 rounded-xl" />
                <Skeleton className="h-20 w-70 rounded-xl" />
              </div>
              <div className="grid grid-cols-10 gap-4">
                <div className="col-span-7">
                  <Skeleton className="h-100 w-full rounded-xl" />
                </div>
                <div className="col-span-3 flex flex-col gap-4">
                  <Skeleton className="h-48 w-full rounded-xl" />
                  <Skeleton className="h-48 w-full rounded-xl" />
                </div>
              </div>
            </div>
          ) : forecastData ? (
            <>
              {/* Top: 5-Day Forecast */}
              <ForecastList forecastData={forecastData} />

              {/* Middle: Highlights */}
              <Highlights
                weatherData={weatherData}
                forecastData={forecastData}
              />

              {/* Bottom: Graph & Sun */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
                  <div className="lg:col-span-4 bg-[#262526] p-6 rounded-xl overflow-hidden flex flex-col justify-center">
                    <h2 className="text-xl font-bold mb-4">
                      Temperature Trend
                    </h2>
                    <WeatherGraph
                      data={forecastData.list.map((item) => ({
                        ...item,
                        iconUrl:
                          weatherIcon[
                            item.weather[0].icon as keyof typeof weatherIcon
                          ] || clear_day,
                      }))}
                    />
                  </div>

                  <SunInfo
                    sunrise={forecastData.city.sunrise}
                    sunset={forecastData.city.sunset}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center opacity-50">
              Forecast data will appear here
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
