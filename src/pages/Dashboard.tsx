import SalesChart from "@/components/dashboard/SalesChart";
import Card from "@/components/dashboard/Card";
import ProductsChart from "@/components/dashboard/ProductsChart";
import { ChartBarMixed } from "@/components/ui/ChartBarMixed";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        <Card title="Faturamento" value="" bgColor="bg-green-500" />
        <Card title="Vendas" value="" bgColor="bg-blue-500" />
        <Card title="Clientes" value="" bgColor="bg-amber-500" />
        <Card title="Pedidos" value="" bgColor="bg-amber-500" />
      </div>

      <section className="mt-4 grid grid-cols-3 gap-6 items-center w-full ">
        <div className="col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-lg p-4 w-full h-full shadow-md text-center">
            <h3>Faturamento mensal</h3>
            <SalesChart />
          </div>
          <div className="bg-white rounded-lg p-4 w-full h-full shadow-md text-center">
            <h3>Categorias mais vendidas</h3>
            <ProductsChart />
          </div>
        </div>
        <div className="">
          <ChartBarMixed />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
