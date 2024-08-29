<<<<<<< HEAD
import SalesPreviewTable from "@/components/admin/shop/sales/SalesPreviewTable";
import columns from "@/components/admin/shop/sales/SalesPreviewColumn";
import { Link } from "react-router-dom";
import data from "./data";
import ShopSalesTrends from "./ShopSalesTrends";
import { ChartComponent } from "@/components/admin/AdminReportCard";

function ShopSales() {

  return (
    <>
      <div className="container my-10">
        <section>
          <h1 className="text-2xl font-light mb-8">Sales Report</h1>
          <div className="border rounded-xl p-4">
            <p className="md:text-xl text-sm font-semibold mb-4">Trends In Sales</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-6">
            <ChartComponent title = "All Sales" number={4000} />
            <ChartComponent title = "Sales This Week" number={500} />
            <ChartComponent title = "Sales This Month" number={750} />
            <ChartComponent title = "Sales This Year" number={1000} />
          </div>

          <ShopSalesTrends className='mt-16' />
          </div>
        </section>

        <section className=" my-10">
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

            <SalesPreviewTable columns={columns} data={data} className='text-gray-500'/>
          </div>
        </section>

      </div>
    </>
=======
import { Link } from "react-router-dom";
import { ChartComponent } from "../../../../components/admin/AdminReportCard";
import columns from "../../../../components/admin/shop/sales/SalesPreviewColumn";
import SalesPreviewTable from "../../../../components/admin/shop/sales/SalesPreviewTable";
import data from "./data";
import ShopSalesTrends from "./ShopSalesTrends";

function ShopSales() {
  return (
    <div className="container my-10">
      <section>
        <h1 className="text-2xl font-light mb-8">Sales Report</h1>
        <div className="border rounded-xl p-4">
          <p className="md:text-xl text-sm font-semibold mb-4">
            Trends In Sales
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-6">
            <ChartComponent title="All Sales" number={4000} />
            <ChartComponent title="Sales This Week" number={500} />
            <ChartComponent title="Sales This Month" number={750} />
            <ChartComponent title="Sales This Year" number={1000} />
          </div>

          <ShopSalesTrends className="mt-16" />
        </div>
      </section>

      <section className=" my-10">
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

          <SalesPreviewTable
            columns={columns}
            data={data}
            className="text-gray-500"
          />
        </div>
      </section>
    </div>
>>>>>>> 2b09e140e1794032363f4b50c66a3b56fbf78506
  );
}

export default ShopSales;
