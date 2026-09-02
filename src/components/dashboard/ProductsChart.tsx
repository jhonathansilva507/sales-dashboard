import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,

  radius: "70%",

  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle"
      }
    },
  },
};

const data: ChartData<"doughnut"> = {
  labels: ["Eletrônicos", "Periféricos", "Acessórios", "Outros"],
  datasets: [
    {
      label: "Produtos vendidos",
      data: [45, 25, 18, 12],
      backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"],
      borderWidth: 2,
    },
  ],
};

const ProductsChart = () => {
  return (
    <div className="w-full h-full flex items-center justify-start">
      <div className="w-full h-full flex items-center justify-center">
          <Doughnut data={data} options={options} />
      </div>

    </div>
  );
};

export default ProductsChart;
