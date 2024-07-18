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
    accessorKey: "item",
    header: "Item",
  },
  {
    accessorKey: "cost",
    header: "Cost of Order (KES)",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("cost"));

      return (
        <div className="text-left font-medium">
          {new Intl.NumberFormat("sw-KE", {
            style: "currency",
            currency: "KES",
          }).format(amount)}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div>
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              row.original.status === "complete"
                ? "bg-[#D1FAE5] text-[#065F46]"
                : row.original.status === "unfullfilled"
                  ? "bg-[#FEE2E2] text-[#991B1B]"
                  : "bg-[#FEF3C7] text-[#92400E]"
            }`}
          >
            {row.original.status}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const orderInfo = row.original;

      return (
        <div>
          <button type="button" className="text-primary text-sm font-semibold">
            View
          </button>
        </div>
      );
    },
  },
];

export default columns;
