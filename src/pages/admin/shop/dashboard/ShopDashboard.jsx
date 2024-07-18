import { Link } from "react-router-dom";
import columns from "@/components/admin/shop/dashboard/OrderPreviewColumns";
import OrdersPreviewTable from "@/components/admin/shop/dashboard/OrdersPreviewTable";
import AdminMain from "./AdminMain";

function ShopDashboard() {
  const data = [
    {
      id: "728ed52",
      email: "m@example.com",
      item: "SYT Jacket",
      cost: 100,
      status: "complete",
    },
    {
      id: "728d52f",
      email: "m@example.com",
      item: "SYT Jacket",
      cost: 100,
      status: "unfullfilled",
    },
    {
      id: "728ed2f",
      email: "m@example.com",
      item: "SYT Jacket",
      cost: 100,
      status: "pending",
    },
  ];

  return (
    <section className="container my-10">
      <div className="border rounded-xl">
        <div className="flex justify-between items-center w-full py-4 px-3 border-b">
          <h3 className="font-semibold">Orders</h3>
          <Link
            to="/admin/shop/orders"
            className="text-primary text-sm font-semibold"
          >
            View All
          </Link>
        </div>

        <OrdersPreviewTable columns={columns} data={data} />
      </div>
      <AdminMain />
    </section>
  );
}

export default ShopDashboard;
