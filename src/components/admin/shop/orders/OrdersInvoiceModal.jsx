import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

export default function OrdersInvoiceModal({ orderId, onClose }) {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/orders/${orderId}`)
      .then((response) => {
        setOrderDetails(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error("Error fetching order details", error);
      });
  }, [orderId]);

  // const downloadInvoice = () => {
  //   const input = document.getElementById("invoice");

  //   html2canvas(input).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, "PNG", 0, 0);
  //     pdf.save(`invoice-${orderId}.pdf`);
  //   });
  // };

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-1/3">
        <div id="invoice">
          <div className="mt-6 flex justify-between">
            <p>{orderDetails.status}</p>
            <button
              type="button"
              onClick={onClose}
              className="text-5xl"
              aria-label="Close"
            >
              <IoCloseOutline />
            </button>
          </div>
          <h2 className="text-2xl font-bold mb-4">{orderId}</h2>
          <hr />
          <h3 className="text-xl font-semibold my-4">Item Information</h3>
          <div className="w-full flex flex-col gap-2 gap-x-4">
            <div className="flex flex-col">
              <span className="text-grey-neutral">Name</span>
              {/* {orderDetails.items.map((item) => (
                <div key={item.id} className="mt-2">
                  {item.product.name}
                </div>
              ))} */}
            </div>
            <div className="flex flex-col">
              <span className="text-grey-neutral">Quantity</span>
              {/* {orderDetails.items.map((item) => (
                 <div key={item.id} className="mt-2">{item.quantity}</div>
              ))} */}
            </div>
            <div className="flex flex-col">
              <span className="text-grey-neutral">Unit Cost</span>
              {/* {orderDetails.items.map((item) => (
                  <div key={item.id} className="mt-2">${item.product.price}</div>
              ))} */}
            </div>
            <hr />
            <div className="flex flex-col">
              <span className="text-grey-neutral">Subtotal</span>
              {/* {orderDetails.items.map((item) => (
                  <div key={item.id} className="mt-2">${item.total_price}</div>
               ))} */}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex justify-between">
              <p className="text-grey-neutral">Offer</p>
              <p className="text-grey-neutral">KES {orderDetails.offer || 0}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-grey-neutral">Discount</p>
              <p className="text-grey-neutral">
                KES {orderDetails.discount || 0}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-grey-neutral">V.A.T</p>
              <p className="text-grey-neutral">KES {orderDetails.vat || 0}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-grey-neutral text-xl">TOTAL</p>
              <p className="text-grey-neutral text-xl">
                KES {orderDetails.total_price_of_orders || 0}
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mt-4">Customer Information</h3>
        {/* <p>Name: {orderDetails.user.name}</p>
          <p>Email: {orderDetails.user.email}</p>
          <p>Phone: {orderDetails.user.phone}</p>
          <p>Payment Mode: {orderDetails.user.payment_mode}</p>
          <p>Order Date: {new Date(orderDetails.created_at).toLocaleDateString()}</p> */}
        <div className=" bottom-0 right-0 flex flex-col justify-end items-end py-6">
          <button
            type="button"
            // onClick={downloadInvoice}
            className="w-fit border-2 border-primary text-primary text-xs font-semibold rounded-lg px-8 py-3"
          >
            DOWNLOAD INVOICE
          </button>
        </div>
      </div>
    </div>
  );
}

OrdersInvoiceModal.propTypes = {
  orderId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
