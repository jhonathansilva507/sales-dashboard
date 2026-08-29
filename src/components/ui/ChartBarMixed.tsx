import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A mixed bar chart";

const chartData = [
  { product: "smartphone", sales: 420, fill: "#3b82f6" },
  { product: "notebooks", sales: 380, fill: "#2563eb" },
  { product: "smartTvs", sales: 310, fill: "#1d4ed8" },
  { product: "fonesBluetooth", sales: 290, fill: "#1e40af" },
  { product: "consoles", sales: 240, fill: "#1e3a8a" },
  { product: "monitores", sales: 210, fill: "#0284c7" },
  { product: "smartwatches", sales: 180, fill: "#0369a1" },
  { product: "airFryers", sales: 160, fill: "#0c4a6e" },
  { product: "aspiradoresApoio", sales: 120, fill: "#0c4a6e" },
  { product: "cafeteiras", sales: 95, fill: "#030712" },
];

const chartConfig = {
  sales: {
    label: "Vendas",
  },
  smartphone: {
    label: "Smartphone",
    color: "#3b82f6",
  },
  notebooks: {
    label: "Notebooks",
    color: "#2563eb",
  },
  smartTvs: {
    label: "Smart TVs",
    color: "#1d4ed8",
  },
  fonesBluetooth: {
    label: "Fones Bluetooth",
    color: "#1e40af",
  },
  consoles: {
    label: "Consoles",
    color: "#1e3a8a",
  },
  monitores: {
    label: "Monitores",
    color: "#0284c7",
  },
  smartwatches: {
    label: "Smartwatches",
    color: "#0369a1",
  },
  airFryers: {
    label: "Air Fryers",
    color: "#0c4a6e",
  },
  aspiradoresApoio: {
    label: "Aspiradores Robô",
    color: "#0c4a6e",
  },
  cafeteiras: {
    label: "Cafeteiras Expressas",
    color: "#030712",
  },
} satisfies ChartConfig;

export function ChartBarMixed() {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Produtos Mais Vendidos</CardTitle>
        <CardDescription>Produtos com mais vendas no ano</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-full h-[300px]">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            className="text-start"
            margin={{
              left: 0,
            }}
          >
            <YAxis
              dataKey="product"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              width={120}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="sales" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sales" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground"></div>
      </CardFooter>
    </Card>
  );
}
