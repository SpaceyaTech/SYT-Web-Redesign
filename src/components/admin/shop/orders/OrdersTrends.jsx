import React from "react";
import { AreaChart, Area, CartesianGrid, Tooltip } from "recharts";
import { FaArrowUp } from "react-icons/fa";

const OrdersTrends = () => {
  const trends = [
    {
      metric: "All Orders",
      value: "4000",
    },
    {
      metric: "Orders This Week",
      value: "500",
    },
    {
      metric: "Orders This Month",
      value: "750",
    },
    {
      metric: "Orders This Year",
      value: "1000",
    },
  ];

  const data = [
    {
      name: "",
      orders: 0,
    },
    {
      name: "",
      orders: 450,
    },
    {
      name: "",
      orders: 200,
    },
    {
      name: "",
      orders: 750,
    },
  ];

  return (
    <div className="sm:mt-10 sm:mb-20 sm:ml-10">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-4">
        {trends.map((trend, index) => (
          <div
            className={`flex flex-row items-center gap-2 ${
              index !== trends.length - 1 && "border-b sm:border-r"
            } py-10 sm:px-5`}
          >
            <div key={index} className="flex flex-col justify-center my-4 px-2">
              <p className="text-base font-medium">{trend.metric}</p>
              <p className="text-4xl font-bold">{trend.value}</p>
              <div className="flex flex-row items-center gap-1 mt-6 -mb-4 text-sm">
                <FaArrowUp className="text-primary" />
                <p className="text-primary">10%</p>
                <p>vs last quarter</p>
              </div>
            </div>
            <div className="place-self-end">
              <AreaChart width={90} height={55} data={data}>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#00664E"
                  fill="#00664E"
                  fillOpacity={0.15}
                />
                <CartesianGrid vertical={false} strokeDasharray={[0.2, 2]} />
              </AreaChart>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersTrends;
