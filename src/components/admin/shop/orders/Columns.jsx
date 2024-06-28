/* eslint-disable linebreak-style */
/* eslint-disable no-nested-ternary */
const columns = [
    {
      accessorKey: "id",
      header: "Order ID",
    },
    {
      accessorKey: "email",
      header: "Customer Email",
    },
    {
      accessorKey: "date",
      header: "Date Ordered",
    },
    {
      accessorKey: "items",
      header: "Items",
      cell: ({ row }) => (
        <div className="text-left flex flex-row gap-1">
            {`No. of items: ${row.original.number} | `}
          <div className="font-medium">
            {` Total Cost: KES ${row.original.cost}`}
          </div>
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div>
          <span
            className={`px-3 py-1 text-xs font-bold rounded-full ${
              row.original.status === "Complete"
                ? "bg-[#D1FAE5] text-[#065F46]"
                : row.original.status === "Unfulfilled"
                  ? "bg-[#FEE2E2] text-[#991B1B]"
                  : "bg-[#FEF3C7] text-[#92400E]"
            }`}
          >
            {row.original.status}
          </span>
        </div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const orderInfo = row.original;
  
        return (
          <div>
            <button type="button" className="text-primary text-sm font-semibold">
              View {orderInfo.id}
            </button>
          </div>
        );
      },
    },
  ];
  
  export default columns;
  