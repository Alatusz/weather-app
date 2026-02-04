// Assets
import clear_day from "@/assets/weather/clear-day.svg";
import clear_night from "@/assets/weather/clear-night.svg";

// Types
import type { SunInfoProps } from "@/types/weather";

export const SunInfo = ({ sunrise, sunset }: SunInfoProps) => {
  const sunTimes = [
    {
      title: "Sunrise",
      value: sunrise,
      icon: clear_day,
    },
    {
      title: "Sunset",
      value: sunset,
      icon: clear_night,
    },
  ];

  return (
    <div className="lg:col-span-1 flex flex-col gap-4 h-full">
      {sunTimes.map((item, index) => (
        <div
          key={index}
          className="bg-[#262526] p-4 rounded-xl overflow-hidden flex-1 flex flex-col justify-center items-center"
        >
          <p className="text-sm opacity-70 mb-1">{item.title}</p>
          <img src={item.icon} alt={item.title} className="w-12 h-12 mb-2" />
          <p className="text-xl font-bold">
            {new Date(item.value * 1000).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
      ))}
    </div>
  );
};
