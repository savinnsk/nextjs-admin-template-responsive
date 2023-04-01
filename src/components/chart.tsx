import dynamic from "next/dynamic";
import { theme } from "@chakra-ui/react";
const ApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: any = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-18T00:00:00.000Z",
      "2022-03-19T00:00:00.000Z",
      "2022-03-20T00:00:00.000Z",
      "2022-03-21T00:00:00.000Z",
      "2022-03-22T00:00:00.000Z",
      "2022-03-23T00:00:00.000Z",
    ],
  },

  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [{ name: "users", data: [31, 12, 10, 28, 18, 19] }];

interface ChartProps {
  type: "area";
  height: number;
  width: string;
}

export function Chart({ type, height, width }: ChartProps) {
  return (
    <ApexChart
      series={series}
      options={options}
      type={type}
      height={height}
      width={width}
    />
  );
}
