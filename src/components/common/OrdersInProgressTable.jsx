import React, { useState } from "react";
import OrdersCompletedTable from "./OrdersCompletedTable";
import { useNavigate } from "react-router-dom";

const OrdersInProgressTable = () => {

  const [view, setView] = useState("inProgress"); // State to track the current view
  const navigate = useNavigate();


  const products = [
    {
      id: 1,
      name: "Sathsara",
      orders: 8232,
      status: "Shipping",
      payment: "Done",
      unitAmount: "$130.992",
      availableUnit: "$9.500",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Cactus",
      orders: 1821,
      status: "Shipping",
      payment: "Done",
      unitAmount: "$80.250",
      availableUnit: "$4.200",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Table Roses",
      orders: 2421,
      status: "Delivered",
      payment: "Done",
      unitAmount: "$40.600",
      availableUnit: "$9.430",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Aloe vera",
      orders: 5921,
      status: "Shipping",
      payment: "Done",
      unitAmount: "$91.300",
      availableUnit: "$7.364",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Strelitzia nicolai",
      orders: 921,
      status: "Delivered",
      payment: "Done",
      unitAmount: "$140.925",
      availableUnit: "$20.531",
      image: "https://via.placeholder.com/50",
    },
  ];

  const handleOrderInfoClick = (productId) => {
    navigate(`/order-information/${productId}`);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      {/* Filter Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded-full border w-[160px] h-[38px] flex items-center justify-center ${
              view === "inProgress"
                ? "bg-green-200 text-green-700 border-green-500 hover:bg-green-300"
                : "bg-white text-green-700 border-green-500 hover:bg-green-100"
            }`}
            onClick={() => setView("inProgress")}
          >
            In Progress
          </button>
          <button
            className={`px-4 py-2 rounded-full border w-[160px] h-[38px] flex items-center justify-center ${
              view === "completed"
                ? "bg-green-200 text-green-700 border-green-500 hover:bg-green-300"
                : "bg-white text-green-700 border-green-500 hover:bg-green-100"
            }`}
            onClick={() => setView("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Product Table */}
      {view === "inProgress" ? (
        <div>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="text-gray-600 uppercase text-sm">
                <th className="py-3 border-b">Ordered Person</th>
                <th className="py-3 border-b">Status</th>
                <th className="py-3 border-b">Payment</th>
                <th className="py-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="py-4 border-b flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-gray-500 text-sm">
                        {product.orders} orders
                      </p>
                    </div>
                  </td>
                  <td className="py-4 border-b">{product.status}</td>
                  <td className="py-4 border-b">{product.payment}</td>
                  <td className="py-4 border-b text-center">
                    {/* Edit Button */}
                    <button
                      className="text-green-500 mr-2 hover:text-green-700"
                      onClick={() => handleOrderInfoClick(product.id)}
                    >
                      View
                    </button>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <OrdersCompletedTable />
      )}

    </div>
  );
};

export default OrdersInProgressTable;
