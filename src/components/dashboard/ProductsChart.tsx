import {
  Chart,
  ArcElement,
  Tooltip,
  type ChartOptions,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const data = {
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
      <div className="w-1/2 h-full flex items-center justify-center">
          <Doughnut data={data} options={options} />
      </div>

      <div className="grid grid-cols-4 gap-x-4 gap-y-3">
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3b82f6]" />
            <span className="text-sm font-medium text-gray-600">Eletrônicos</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
            <span className="text-sm font-medium text-gray-600">Eletrônicos</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <span className="text-sm font-medium text-gray-600">Eletrônicos</span>
        </div>

        <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
            <span className="text-sm font-medium text-gray-600">Eletrônicos</span>
        </div>
      </div>
    </div>
  );
};

export default ProductsChart;
