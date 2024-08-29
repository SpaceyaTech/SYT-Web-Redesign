const columns = [
<<<<<<< HEAD
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
  
=======
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
    cell: () => (
      <div>
        <button type="button" className="text-primary text-sm font-semibold">
          View
        </button>
      </div>
    ),
  },
];

export default columns;
>>>>>>> 2b09e140e1794032363f4b50c66a3b56fbf78506
