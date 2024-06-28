/* eslint-disable linebreak-style */
import React from "react";
import { IoFilter } from "react-icons/io5";
import columns from "../../../components/admin/shop/orders/Columns";
import Orders from "../../../components/admin/shop/orders/Orders";
import OrdersChart from "../../../components/admin/shop/orders/OrdersChart";
import OrdersTrends from "../../../components/admin/shop/orders/OrdersTrends";

function OrdersPage() {
  const data = [
    {
      id: "ORD-101",
      email: "ian@gmail.com",
      date: "12-02-2023",
      number: 2,
      cost: 1000,
      status: "Complete",
    },
    {
      id: "ORD-102",
      email: "pam@gmail.com",
      date: "12-02-2023",
      number: 1,
      cost: 500,
      status: "Unfulfilled",
    },
    {
      id: "ORD-103",
      email: "fred@gmail.com",
      date: "12-02-2023",
      number: 3,
      cost: 1500,
      status: "Unfulfilled",
    },
    {
      id: "ORD-104",
      email: "kelly@gmail.com",
      date: "12-02-2023",
      number: 5,
      cost: 2500,
      status: "Pending",
    },
    {
      id: "ORD-105",
      email: "emmy@gmail.com",
      date: "12-02-2023",
      number: 2,
      cost: 100,
      status: "Pending",
    },
    {
      id: "ORD-106",
      email: "sonia@gmail.com",
      date: "12-02-2023",
      number: 1,
      cost: 350,
      status: "Complete",
    },
    {
      id: "ORD-107",
      email: "emmy@gmail.com",
      date: "12-02-2023",
      number: 2,
      cost: 100,
      status: "Pending",
    },
    {
      id: "ORD-108",
      email: "sonia@gmail.com",
      date: "12-02-2023",
      number: 1,
      cost: 350,
      status: "Complete",
    },
    {
      id: "ORD-109",
      email: "emmy@gmail.com",
      date: "12-02-2023",
      number: 2,
      cost: 100,
      status: "Unfulfilled",
    },
    {
      id: "ORD-110",
      email: "bridgit@gmail.com",
      date: "12-02-2023",
      number: 1,
      cost: 350,
      status: "Complete",
    },
  ];

  return (
    <section className="container my-10">
      <h1 className="text-2xl my-10">Orders Report</h1>
      <div className="border rounded-xl my-10">
        <h3 className="text-xl font-bold m-4">Trends in Orders</h3>
        <OrdersTrends />
        <OrdersChart />
      </div>
      <div className="border rounded-xl">
        <div className="flex justify-between items-center w-full py-4 px-3 border-b">
          <h3 className="text-xl font-semibold -mr-2">Orders</h3>
          <div className="flex flex-row gap-4 py-2 px-4 w-fit border rounded-lg">
            <button type="button" className="text-sm font-semibold">
              Filter
            </button>
            <IoFilter />
          </div>
        </div>
        <Orders columns={columns} data={data} />
        <hr />
        <div className="flex justify-between items-center w-full py-4 px-3 border-b">
          <h3>Showing 1 to 10 of 20 results</h3>
          <div className="flex flex-row gap-4">
            <button
              type="button"
              className="text-sm font-semibold py-2 px-4 w-fit border rounded-lg"
            >
              Previous
            </button>
            <button
              type="button"
              className="text-sm font-semibold py-2 px-4 w-fit border rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrdersPage;
