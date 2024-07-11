const columns = [
    {
      accessorKey: "id",
      header: "Item ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "items-sold",
      header: "Items Sold",
    },
    {
      accessorKey: "items-remaining",
      header: "Items Remaining",
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
  