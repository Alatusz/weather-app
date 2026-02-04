// UI Components
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Types
import type { CustomTickProps, WeatherGraphProps } from "@/types/weather";

const chartConfig = {
  temp: {
    label: "Temperature",
    color: "#ffffff",
  },
} satisfies ChartConfig;

const CustomTick = ({ x, y, payload, chartData }: CustomTickProps) => {
  if (x === undefined || y === undefined || !payload) return null;

  const dataPoint = chartData.find((d) => d.time === payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={-5}
        y={0}
        dy={16}
        textAnchor="middle"
        fill="#ffffff"
        fontSize={12}
      >
        {payload.value}
      </text>
      {dataPoint?.icon && (
        <image x={-15} y={20} href={dataPoint.icon} height="30" width="30" />
      )}
    </g>
  );
};

export const WeatherGraph = ({ data }: WeatherGraphProps) => {
  const chartData = data.slice(0, 8).map((item) => ({
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    }),
    temp: Math.round(item.main.temp),
    icon: item.iconUrl,
  }));

  return (
    <ChartContainer
      config={chartConfig}
      className="w-full h-[350px] aspect-auto"
    >
      <AreaChart accessibilityLayer data={chartData} margin={{ right: 10 }}>
        <defs>
          <linearGradient id="fillTemp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-temp)" stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor="var(--color-temp)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="time"
          stroke="#ffffff"
          tick={<CustomTick chartData={chartData} />}
          interval={0}
          height={60}
          tickLine={false}
          axisLine={false}
        />
        <YAxis domain={["dataMin - 2", "dataMax + 2"]} />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              hideLabel
              className="w-[120px] bg-black/60 backdrop-blur-md border-white/10 text-white"
            />
          }
        />
        <Area
          dataKey="temp"
          type="monotone"
          fill="url(#fillTemp)"
          fillOpacity={0.4}
          stroke="var(--color-temp)"
        />
      </AreaChart>
    </ChartContainer>
  );
};
