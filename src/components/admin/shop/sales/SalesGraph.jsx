// import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import data from "./data";

export const SalesGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      {/* <XAxis dataKey={"name"} className='mt-4' /> */}
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="10%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={"name"} />
        <YAxis stroke="white" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          fillOpacity={1}
          fill="url(#colorPv)"
          strokeWidth={2}
          stroke="#00664E"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
