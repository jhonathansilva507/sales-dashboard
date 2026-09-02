import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";

import { Line } from "react-chartjs-2";
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.raw as number;

          return `R$ ${value.toLocaleString("pt-br")}`;
        },
      },
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        callback: (value) => `R$ ${Number(value) / 1000} mil`,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const data: ChartData<"line"> = {
  labels: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "Faturamento",
      data: [
        12000, 15000, 13000, 18000, 21000, 19000, 25000, 27000, 24000, 30000,
        32000, 35000,
      ],
      borderWidth: 2,
      tension: 0.3,

      borderColor: "#00bfff",
      backgroundColor: "rgba(0, 191, 255, 0.17",

      pointRadius: 4,
      pointHoverRadius: 6,

      pointBorderColor: "#0080ff",
      pointBackgroundColor: "fff",

      fill: true,
    },
  ],
};

const SilesChart = () => {
  return (
    <div className="w-full h-full">
      <Line data={data} options={options} />
    </div>
  );
};
export default SilesChart;
