import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "",
    orders: 440,
  },
  {
    name: "Jan",
    orders: 640,
  },
  {
    name: "Feb",
    orders: 710,
  },
  {
    name: "Mar",
    orders: 890,
  },
  {
    name: "Apr",
    orders: 1500,
  },
  {
    name: "May",
    orders: 1001,
  },
  {
    name: "Jun",
    orders: 1300,
  },
  {
    name: "Jul",
    orders: 2210,
  },
  {
    name: "Aug",
    orders: 1900,
  },
  {
    name: "Sep",
    orders: 1700,
  },
  {
    name: "Oct",
    orders: 2390,
  },
  {
    name: "Nov",
    orders: 2781,
  },
  {
    name: "Dec",
    orders: 2501,
  },
  {
    name: "",
    orders: 2401,
  },
];

export default function OrdersChart() {
  return (
    <div className="sm:block hidden">
      <AreaChart
        width={1250}
        height={200}
        data={data}
        style={{ margin: "20px auto", maxWidth: "100%" }}
      >
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="orders"
          stroke="#00664E"
          fill="url(#colorUv)"
        />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#009975" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#009975" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} strokeDasharray={[0.2, 2]} />
      </AreaChart>
    </div>
  );
}
