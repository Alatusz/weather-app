// ICON
import clear_day from "@/assets/weather/clear-day.svg";
import clear_night from "@/assets/weather/clear-night.svg";
import partly_cloudy_day_rain from "@/assets/weather/partly-cloudy-day-rain.svg";
import partly_cloudy_night_rain from "@/assets/weather/partly-cloudy-night-rain.svg";
import partly_cloudy_day from "@/assets/weather/partly-cloudy-day.svg";
import partly_cloudy_night from "@/assets/weather/partly-cloudy-night.svg";
import overcast_day from "@/assets/weather/overcast-day.svg";
import overcast_night from "@/assets/weather/overcast-night.svg";
import cloudy from "@/assets/weather/cloudy.svg";
import overcast_day_rain from "@/assets/weather/overcast-day-rain.svg";
import overcast_night_rain from "@/assets/weather/overcast-night-rain.svg";
import thunderstorms_day_overcast_rain from "@/assets/weather/thunderstorms-day-overcast-rain.svg";
import thunderstorms_night_overcast_rain from "@/assets/weather/thunderstorms-night-overcast-rain.svg";
import partly_cloudy_day_snow from "@/assets/weather/partly-cloudy-day-snow.svg";
import partly_cloudy_night_snow from "@/assets/weather/partly-cloudy-night-snow.svg";
import mist from "@/assets/weather/mist.svg";

export const weatherIcon: Record<string, string> = {
  "01d": clear_day,
  "01n": clear_night,
  "02d": partly_cloudy_day,
  "02n": partly_cloudy_night,
  "03d": cloudy,
  "03n": cloudy,
  "04d": overcast_day,
  "04n": overcast_night,
  "09d": overcast_day_rain,
  "09n": overcast_night_rain,
  "10d": partly_cloudy_day_rain,
  "10n": partly_cloudy_night_rain,
  "11d": thunderstorms_day_overcast_rain,
  "11n": thunderstorms_night_overcast_rain,
  "13d": partly_cloudy_day_snow,
  "13n": partly_cloudy_night_snow,
  "50d": mist,
  "50n": mist,
};
