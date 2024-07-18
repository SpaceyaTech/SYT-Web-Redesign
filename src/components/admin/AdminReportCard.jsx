import React from "react";
import { twMerge } from "tailwind-merge";
import { Area, AreaChart, ResponsiveContainer, XAxis } from "recharts";
import { ArrowUp } from "lucide-react";

// total sales card data
const totalSalesData = [
  { name: "Today", amount: "KES 2000" },
  { name: "This week", amount: "KES 4000" },
  { name: "This month", amount: "KES 10000" },
  { name: "This year", amount: "KES 40000" },
];

// total orders card data
const totalOrdersData = [
  { name: "Today", amount: "KES 20" },
  { name: "This week", amount: "KES 50" },
  { name: "This month", amount: "KES 100" },
  { name: "This year", amount: "KES 500" },
];

// total visits card data
const totalVisitsData = [
  { name: "Today", amount: "KES 200" },
  { name: "This week", amount: "KES 5000" },
  { name: "This month", amount: "KES 10000" },
  { name: "This year", amount: "KES 40000" },
];

// total vistis data One
const totalVisitInnerCardData = [
  { name: "MALE", number: 55000 },
  { name: "FEMALE", number: 35000 },
  { name: "OTHERS", number: 10000 },
];

// total vistis data Two
const totalVisitInnerCardDataTwo = [
  { name: "5-18 yrs", number: 5000 },
  { name: "18-35 yrs", number: 75000 },
  { name: "35 yrs+", number: 20000 },
];

const AdminReportCard = ({
  name = "Sales",
  amount = 80000,
  data = totalSalesData,
}) => {
  return (
    // card layout
    <div className="grid w-full  border-[1px] border-[#D0D0D0]  rounded-[12px] p-[20px] font-poppins">
      <div className="grid justify-start items-center w-full ">
        <span className="font-[500] uppercase text-[#7E8180]">
          Total {name}
        </span>
        <span className="text-[#009975] flex w-fit  text-[32px] font-[600] uppercase">
          KES {amount}
        </span>
      </div>
      <div className=" grid gap-[26px] mt-4">
        {data.map((e, index) => (
          <div
            key={index}
            className={twMerge(
              "flex justify-between items-start text-[16px] h-[36px] border-b-[1px] border-[#D0D0D0]",
              e.name == "This year" ? "border-b-0" : "border-b-[1px]"
            )}
          >
            <span className="font-[500] text-[#7E8180]  leading-[24px]">
              {e.name}
            </span>
            <span className="text-[#4C4D4D] font-[600]">{e.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const firstHighDemandData = [
  { city: "Nairobi", items: 3500, cost: 350, sales: 1225000 },
  { city: "Nakuru", items: 2500, cost: 100, sales: 250000 },
  { city: "Dodoma", items: 1500, cost: 200, sales: 240000 },
  { city: "Lagos", items: 1000, cost: 500, sales: 250000 },
  { city: "Mombasa", items: 500, cost: 100, sales: 100000 },
];

const HighDemandCard = ({
  hignDemandData = firstHighDemandData,
  bigCard = false,
  name,
}) => {
  const dataTableData = {
    Name: "Name",
    ItemsSold: "Items Sold",
    UnitCost: "UNIT COST(KES)",
    TotalCost: "TOTAL SALES(KES)",
  };
  return (
    <>
      <div className="grid w-full  border-[1px] border-[#D0D0D0] rounded-[12px]  font-poppins overflow-x-auto">
        <div className="font-[600] px-[12px] text-[16px] text-[#4C4D4D] h-[72px]  flex justify-start w-full items-center ">
          <span className="">{name}</span>
        </div>
        <div className="flex items-center justify-center h-[44px]  bg-[#F9FAFB] uppercase border-y-[1px] font-[400] text-[13px] text-[#6B7280] ">
          <span className="w-1/2 px-[24px]">{dataTableData.Name}</span>
          <span className="w-1/2 px-[24px]">{dataTableData.ItemsSold}</span>
          {bigCard === true && (
            <>
              <span className="w-1/2 px-[24px]">{dataTableData.UnitCost}</span>
              <span className="w-1/2 px-[24px]">{dataTableData.TotalCost}</span>
            </>
          )}
        </div>
        {hignDemandData.map((e, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-[52px]  even:bg-[#F9FAFB] uppercase  font-[500] text-[14px] text-[#6B7280]"
          >
            <span className="w-1/2 px-[24px]">{e.city}</span>
            <span
              className={twMerge(
                "w-1/2 px-[24px] font-[600] text-[#4C4D4D]",
                bigCard && "font-[500]"
              )}
            >
              {e.items}
            </span>
            {bigCard === true && (
              <>
                <span className="w-1/2 px-[24px]">{e.cost}</span>
                <span className="w-1/2 px-[24px]">{e.sales}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const TotalVisitsCustomCard = ({
  dataOne = totalVisitInnerCardData,
  dataTwo = totalVisitInnerCardDataTwo,
}) => {
  return (
    <>
      <div className="grid w-full  border-[1px] border-[#D0D0D0]  rounded-[12px] p-[20px] font-poppins">
        <div className="flex justify-start ">
          <div className="grid h-[97px]  justify-center items-center ">
            <span className="font-[500] uppercase text-[#7E8180] ">
              TOTAL VISITS
            </span>
            <span className="text-[#4C4D4D] flex  text-[32px] font-[600]  uppercase">
              100,000
            </span>
          </div>
        </div>
        {/* border */}
        <div className="h-[1px] bg-[#D0D0D0] w-full"></div>
        {/* inner cards */}
        <div className="grid  justify-center grid-cols-3 gap-[32px] items-center py-[8px] ">
          {dataOne.map((e, index) => (
            <div
              key={index}
              className=" h-[60px] w-[84px] text-start    grid items-center justify-center text-[14px] font-[500] text-[#7E8180]"
            >
              <span className="tracking-wider">{e.name}</span>
              <span className="font-[600] text-[#4C4D4D] text-[24px]">
                {e.number}
              </span>
            </div>
          ))}
        </div>
        {/* border */}
        <div className="h-[1px] bg-[#D0D0D0] w-full"></div>
        {/* inner cards */}
        <div className="grid  justify-center grid-cols-3 gap-[32px] items-center  py-[8px]">
          {dataTwo.map((e, index) => (
            <div
              key={index}
              className=" h-[60px] w-[84px]  text-start    grid items-center justify-center text-[14px] font-[500] text-[#7E8180]"
            >
              <span className="tracking-wider">{e.name}</span>
              <span className="font-[600] text-[#4C4D4D] text-[24px]">
                {e.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ChartComponent = ({
  title = "All Orders",
  number = 500,
  persontage = "10%",
}) => {
  const data = [
    { name: "Page A", uv: 0, amt: 0 },
    { name: "Page b", uv: 15, amt: 15 },
    { name: "Page b", uv: 9.5, amt: 10 },
    { name: "Page b", uv: 35, amt: 30 },
    { name: "Page b", uv: 39, amt: 40 },
  ];
  return (
    <>
      <div className="flex  mt-5 ">
        <div className="flex w-full  p-[12px] ">
          <div className="flex w-full border-r-[1px] border-[#CBCDCC] pr-[12px]">
            <div className="grid w-full justify-start font-[600]">
              <span className=" text-[16px]">{title}</span>
              <span className="text-[36px] -mt-1">{number}</span>
              <div className="grid w-full  items-center pt-[10px]">
                <div className="flex items-center">
                  <span className="text-[#027A48]">
                    <ArrowUp />
                  </span>
                  <span className="text-[#027A48] text-[14px] font-[500]">
                    {persontage}
                  </span>
                </div>
                <span className=" text-[#4C4D4D] text-center w-auto text-[14px] font-[500]">
                  vs last quater
                </span>
              </div>
            </div>
            <div className="grid  items-end">
              <AreaChart width={100} height={64} data={data} className="">
                <Area
                  type="natural"
                  strokeWidth={2}
                  dataKey="uv"
                  stroke="#00664E"
                  fill="#bce0d8"
                  fillOpacity={0.4}
                />
              </AreaChart>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BigChartComponent = () => {
  const data = [
    { name: "J", uv: 10 },
    { name: "Feb", uv: 13 },
    { name: "Mar", uv: 10 },
    { name: "Apr", uv: 13 },
    { name: "May", uv: 10 },
    { name: "Jun", uv: 13 },
    { name: "July", uv: 10 },
    { name: "Aug", uv: 13 },
    { name: "Sep", uv: 10 },
    { name: "Oct", uv: 13 },
    { name: "Nov", uv: 10 },
    { name: "Dec", uv: 13 },
  ];
  return (
    <>
      <div className="grid  items-end">
        <ResponsiveContainer width="100%" height={240}>
          <AreaChart data={data}>
            <XAxis dataKey={"name"} className="mt-4" />
            <Area
              type="natural"
              strokeWidth={2}
              dataKey="uv"
              stroke="#00664E"
              fill="#bce0d8"
              fillOpacity={0.4}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const InventoryData = [
  {
    id: "ITM-101",
    name: "SYT Beanie",
    totalItems: 400,
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    totalSales: 1225000,
    itemsRemaining: 50,
  },
  {
    id: "ITM-102",
    name: "SYT Hoodie",
    totalItems: 50,
    noOfId: "No. of items: 5",
    unitCost: "Unit Cost: KES 1000",
    totalSales: 5000,
    itemsRemaining: 40,
  },
  {
    id: "ITM-103",
    name: "SYT Beanie",
    totalItems: 400,
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    totalSales: 1225000,
    itemsRemaining: 500,
  },
  {
    id: "ITM-104",
    name: "SYT Beanie",
    totalItems: 400,
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    totalSales: 1225000,
    itemsRemaining: 30,
  },
  {
    id: "ITM-105",
    name: "SYT Beanie",
    totalItems: 400,
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    totalSales: 1225000,
    itemsRemaining: 20,
  },
  {
    id: "ITM-106",
    name: "SYT Beanie",
    totalItems: 400,
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    totalSales: 1225000,
    itemsRemaining: 50,
  },
];

const InvenOrderCard = ({ name = "Inventory" }) => {
  const dataTableData = [
    { text: "ID" },
    { text: "NAME" },
    { text: "TOTAL ITEMS" },
    { text: "ITEMS SOLD" },
    { text: "TOTAL SALES(KES)" },
    { text: "ITEMS REMAINING" },
  ];
  return (
    <>
      <div className="grid w-full  border-[1px] border-[#D0D0D0] rounded-[12px] overflow-auto font-poppins ">
        <div className="font-[600] px-[12px] text-[16px] text-[#4C4D4D] h-[48px]  flex justify-between  items-center ">
          <span>{name}</span>
          <span className="text-[#009975] cursor-pointer">View All</span>
        </div>
        <>
          <div className="w-full">
            <div className=" flex flex-col min-w-0 break-words w-full   ">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      {dataTableData.map((e) => (
                        <th className="font-[400] text-[13px] text-[#6B7280] px-6 h-[44px] bg-[#F9FAFB] align-middle uppercase whitespace-nowrap  text-left">
                          {e.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="">
                    {InventoryData.map((e, index) => (
                      <>
                        <tr className=" text-[14px] text-[#7E8180] font-[500] align-middle even:bg-[#F9FAFB]">
                          <th key={index} className="h-[52px] font-[500] px-6 ">
                            {e.id}
                          </th>
                          <td className="h-[52px] px-6 ">{e.name}</td>
                          <td className="h-[52px] px-6 ">{e.totalItems}</td>
                          <td className="h-[52px] w-full text-nowrap px-6 flex items-center">
                            <span>{e.noOfId}</span>
                            <span className="font-[600] pl-1">
                              | {e.unitCost}
                            </span>
                          </td>
                          <td className="h-[52px] px-6 ">{e.totalSales}</td>
                          <td className="h-[52px] px-6  ">
                            {e.itemsRemaining}
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

const InventoryDataTwo = [
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    status: "Complete",
  },
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 5",
    unitCost: "Unit Cost: KES 1000",
    status: "Unfulfilled",
  },
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    status: "Pending",
  },
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    status: "Complete",
  },
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    status: "Pending",
  },
  {
    id: "ORD-101",
    email: "ian@gmail.com",
    item: "SYT Beanie",
    noOfId: "No. of items: 350",
    unitCost: "Unit Cost: KES 350",
    status: "Complete",
  },
];

const InvenOrderCardTwo = ({ name = "Inventory" }) => {
  const dataTableData = [
    { text: "ORDER ID" },
    { text: "CUSTOMER EMAIL" },
    { text: "ITEMS" },
    { text: "COST OF ORDER(KES)" },
    { text: "STATUS" },
    { text: "" },
  ];
  return (
    <>
      <div className="grid w-full  border-[1px] border-[#D0D0D0] rounded-[12px] overflow-auto font-poppins ">
        <div className="font-[600] px-[12px] text-[16px] text-[#4C4D4D] h-[48px]  flex justify-between  items-center ">
          <span>{name}</span>
          <span className="text-[#009975] cursor-pointer">View All</span>
        </div>
        <>
          <div className="w-full">
            <div className=" flex flex-col min-w-0 break-words w-full   ">
              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead className="w-full">
                    <tr>
                      {dataTableData.map((e) => (
                        <th className="font-[400]  text-[13px] text-[#6B7280] px-6 h-[44px] bg-[#F9FAFB] align-middle uppercase whitespace-nowrap  text-left">
                          {e.text}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="">
                    {InventoryDataTwo.map((e, index) => (
                      <>
                        <tr className=" text-[14px] text-[#7E8180] font-[500] align-middle even:bg-[#F9FAFB]">
                          <th key={index} className="h-[52px] font-[500] px-6 ">
                            {e.id}
                          </th>
                          <td className="h-[52px] px-6 ">{e.email}</td>
                          <td className="h-[52px] px-6 ">{e.item}</td>
                          <td className="h-[52px] w-full text-nowrap px-6 flex items-center">
                            <span>{e.noOfId}</span>
                            <span className="font-[600] pl-1">
                              | {e.unitCost}
                            </span>
                          </td>
                          <td className="h-[52px] px-6 text-[12px] font-[500px]">
                            <span
                              className={twMerge(
                                "bg-transparent py-[2px] px-[10px] rounded-[10px]",
                                e.status === "Complete" &&
                                  "bg-[#D1FAE5] text-[#065F46]",
                                e.status === "Unfulfilled" &&
                                  "bg-[#FEE2E2] text-[#991B1B]",
                                e.status === "Pending" &&
                                  "bg-[#FEF3C7] text-[#92400E]"
                              )}
                            >
                              {e.status}
                            </span>
                          </td>
                          <td className="h-[52px] px-6 text-right ">
                            <span className="text-[#009975] cursor-pointer">
                              View{" "}
                            </span>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
export {
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
};
export default AdminReportCard;
