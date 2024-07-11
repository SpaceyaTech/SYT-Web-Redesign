import SalesPreviewTable from "@/components/admin/shop/sales/SalesPreviewTable";
import columns from "@/components/admin/shop/sales/SalesPreviewColumn";
import { Link } from "react-router-dom";
import data from "./data";
import ShopSalesTrends from "./ShopSalesTrends";

function ShopSales() {

  return (
    <>
      <div className="container my-10">
        <section>
          <h1 className="text-2xl font-light">Sales</h1>
          <div className="border rounded-xl p-4">
            <p className="text-sm font-light mb-4">Dashboard</p>
            <ShopSalesTrends />
          </div>
        </section>

        <section className="container my-10">
          <div className="border rounded-xl">
            <div className="flex justify-between items-center w-full py-4 px-3 border-b">
              <h3 className="font-semibold">Shop</h3>
              <Link
                to="/admin/shop/sales"
                className="text-primary text-sm font-semibold"
              >
                View All
              </Link>
            </div>

            <SalesPreviewTable columns={columns} data={data} />
          </div>
        </section>

      </div>
    </>
  );
}

export default ShopSales;
