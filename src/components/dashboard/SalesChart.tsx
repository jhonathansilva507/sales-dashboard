import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

import { Line } from "react-chartjs-2";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
);

const options = {
    plugins: {
        legend: {
            display: false
        }
    }
}

const data = {
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
      labels: "Vendas",
      data: [
        12000, 15000, 13000, 18000, 21000, 19000, 25000, 27000, 24000, 30000,
        32000, 35000,
      ],
      borderWidth: 2,
      tensio: 0.3,
      borderColor: '#00bfff',
      pointBorderColor: '#0080ff',
      pointBackgroundColor: 'fff'
    },
  ],
};

const SilesChart = () =>{
    return <Line data={data} options={options}/>
}
export default SilesChart