import { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-end my-1 gap-0.5 whitespace-nowrap text-xs font-semibold md:my-4 md:gap-2 md:text-xl">
      <p>
        {time.toLocaleDateString("en-US", {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>
      <p>
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};
