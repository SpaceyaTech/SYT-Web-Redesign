import { useState } from "react";
import { IoFilterOutline } from "react-icons/io5";
import InventoryCardComponent from "../../../../components/admin/shop/inventory/InventoryCardComponent";
import columns from "../../../../components/admin/shop/inventory/InventoryPreviewColumn";
import InventoryPreviewTable from "../../../../components/admin/shop/inventory/InventoryPreviewTable";
import Modal from "../../../../components/admin/shop/inventory/Modal";
import data from "./data";

function InventoryReport() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="container my-10">
      <section>
        <div className=" flex justify-between mb-8">
          <h1 className="text-2xl font-poppins text-[#323433] ">
            Inventory Report
          </h1>
          <button
            type="button"
            onClick={handleClick}
            className="  bg-primary text-white rounded-lg pl-4 pr-4 pt-2 pb-2 text-lg"
          >
            {" "}
            ADD ITEM
          </button>
        </div>
        <div className="border   rounded-xl p-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 space-x-6">
            <InventoryCardComponent
              title="Total Items"
              number={4000}
              categories={8}
            />
            <InventoryCardComponent title="Items Sold" number={500} />
            <InventoryCardComponent title="Items in stock" number={750} />
          </div>
        </div>
      </section>

      <section className=" my-10">
        <div className="border border-[#D0D0D0] rounded-xl">
          <div className="flex justify-between items-center w-full py-4 px-3 border-b">
            <h3 className="font-semibold  text-[#4C4D4D]">Inventory</h3>
            <button
              type="button"
              className="text-[#475467] flex gap-2 text-sm font-semibold  border-2 border-[#D0D0D0] rounded-lg pt-2 pb-2 pl-4 pr-4"
            >
              <p>Filter</p>
              <IoFilterOutline className="text-[#475467] size-5" />
            </button>
          </div>

          <InventoryPreviewTable
            columns={columns}
            data={data}
            className="text-gray-500"
          />
        </div>
      </section>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} showModal={showModal} />
      )}
    </div>
  );
}

export default InventoryReport;
