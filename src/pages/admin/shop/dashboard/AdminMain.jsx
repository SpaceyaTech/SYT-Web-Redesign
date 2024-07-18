import React from "react";
import AdminReportCard, {
  HighDemandCard,
  TotalVisitsCustomCard,
  ChartComponent,
  BigChartComponent,
  InvenOrderCard,
  InvenOrderCardTwo,
  totalSalesData,
  totalOrdersData,
  totalVisitsData,
  totalVisitInnerCardData,
  totalVisitInnerCardDataTwo,
} from "../../../../components/admin/AdminReportCard";

const AdminMain = () => {
  return (
    <div className=" container-xl mx-auto grid px-[20px] sm:px-[40px] pt-[20px] gap-[24px] mb-20">
      <div className="grid  w-full sm:grid-cols-2 md:grid-cols-3 gap-[24px] items-center ">
        <AdminReportCard name="sales" amount={80000} data={totalSalesData} />
        <AdminReportCard name="orders" amount={400} data={totalOrdersData} />
        <AdminReportCard name="visits" amount={10000} data={totalVisitsData} />
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[24px]">
        <HighDemandCard
          dataOne={totalVisitInnerCardData}
          name="Top 5 Places with Highest Demand for SYT Products"
        />
        <HighDemandCard
          dataTwo={totalVisitInnerCardDataTwo}
          name="Top 5 Countries with Highest Demand for SYT Products"
        />
        <TotalVisitsCustomCard />
      </div>

      <div className=" grid  rounded-[12px]  w-full border-[1px] border-[#EAECF0] p-[24px] font-poppins  ">
        <div className="flex p-[12px] text-[16px] font-[500] border-b-[1px] border-[#D0D0D0]">
          <span>Trends in Sales</span>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 space-x-6">
          <ChartComponent number={4000} />
          <ChartComponent number={500} />
          <ChartComponent number={750} />
          <ChartComponent number={1000} />
        </div>
        <div className="mt-[48px]">
          <BigChartComponent />
        </div>
      </div>

      <div className="grid sm:grid-cols-2  gap-[24px]">
        <HighDemandCard name="Top 5 Fastest Selling Items" />
        <HighDemandCard bigCard={true} name="Top 5 Best Grossing Items" />
      </div>

      <div className="flex overflow-x-auto">
        <InvenOrderCard name="Inventory" />
      </div>

      <div className="flex overflow-x-auto">
        <InvenOrderCardTwo name="Orders" />
      </div>
    </div>
  );
};

export default AdminMain;
