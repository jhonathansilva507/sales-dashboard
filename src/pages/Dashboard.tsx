import SalesChart from "@/components/dashboard/SalesChart";
import Card from "@/components/dashboard/Card";
import ProductsChart from "@/components/dashboard/ProductsChart";
import { ChartBarMixed } from "@/components/ui/ChartBarMixed";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card title="Faturamento" value="" bgColor="bg-green-500" />
        <Card title="Vendas" value="" bgColor="bg-blue-500" />
        <Card title="Clientes" value="" bgColor="bg-amber-500" />
        <Card title="Pedidos" value="" bgColor="bg-amber-500" />
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-3 flex-1 w-full min-h-0 mt-4 gap-6 items-start ">
        
        <div className="col-span-1 row-span-1 lg:row-span-2 lg:col-span-2 flex flex-col w-full h-full min-h-0 text-center md:start p-4 shadow-md rounded-lg bg-white">
          <h3 className="font-bold border-b pb-3 m-3">Faturamento mensal</h3>
          <div className="flex-1 min-h-0 w-full relative">
            <SalesChart />
          </div>
        </div>

        <div className="col-span-1 row-span-2 flex flex-col gap-6 min-h-0">
          <div className="col-span-1 row-span-1 w-full h-full min-h-0 bg-white rounded-lg p-4 shadow-md text-center">
            <h3>Categorias mais vendidas</h3>
            <div className="flex-1 min-h-0 relative">
              <ProductsChart />
            </div>
          </div>

          <div className="col-span-1 row-span-1 min-h-0">
            <div className="text-center md:text-start relative ">
              <ChartBarMixed />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
