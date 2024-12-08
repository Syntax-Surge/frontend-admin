import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EditOrderStatus from "./EditOrderStatus";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";

const OrderItemTable = ({ orders,   fetchAllOrders }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(orders);
  const [orderStatus, setOrderStatus] = useState();
  const [loading, setLoading] = useState(true);

  console.log(order)

  const [editingOrderId, setEditingOrderId] = useState(null); // Track the order being edited

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrder((prevOrders) =>
      prevOrders?.orderItems?.map((order) =>
        order.orderId === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const saveStatusUpdate = async (orderId) => {


    console.log("order Status", orderStatus)


    try {
      setLoading(true)
      await axios.put("http://localhost:3005/api/v1/orders/updateOrderStatus", {
        orderId,
        status: orderStatus,
      });
      setEditingOrderId(null); // Exit edit mode after saving
      toast.success("Order status updated successfully!");
      fetchAllOrders();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update order status.");
    }finally{
      setLoading(false);
    }
  };

  return (

    <div>
      <table className="w-full text-left table-auto">
        <thead className="bg-gray-200">
          <tr className="text-gray-900 uppercase text-md normal-case">
            <th className="py-4 pl-4 border-b text-center">Order ID</th>
            <th className="py-3 border-b text-center">Item Quantity</th>
            <th className="py-3 border-b text-center">Payment</th>
            <th className="py-3 border-b text-center">Shipping Method</th>
            <th className="py-3 border-b text-center">Status</th>
            <th className="py-3 border-b text-center max-w-[150px] ">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.orderItems?.map((order) => (
            <tr key={order.orderId} className="hover:bg-gray-100">
              <td className="py-4 pl-2 border-b text-center">#{order.orderId}</td>
              <td className="py-4 border-b text-center">{order.items.length}</td>
              <td className="py-4 border-b text-center">Rs. {order.payment}</td>
              <td className="py-4 border-b text-center">{order.shippingMethod}</td>
              <td className="py-4 border-b flex justify-center items-center h-full ">
                {editingOrderId === order.orderId ? (
                  <div className="flex justify-center items-center">
                    <EditOrderStatus
                      orderId={order.orderId}
                      order={order}
                      orderStatus={orderStatus}
                      onStatusUpdate={handleStatusUpdate}
                      setOrderStatus={setOrderStatus}
                    />
                  </div>
                ) : (
                  order.status
                )}
              </td>
              <td className="py-3 border-b text-center  max-w-[150px] ">
                {editingOrderId === order.orderId ? (
                  <Button
                    className="bg-[#3FAEAE] items-center  p-2 px-3 justify-center text-white border-2  border-[#1B786F] hover:bg-[#1B786F] mr-2"
                    onClick={() => saveStatusUpdate(order.orderId)}
                    loading={loading}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    className="bg-[#3FAEAE] items-center  p-2 px-3 justify-center text-white border-2  border-[#1B786F] hover:bg-[#1B786F]  mr-2"
                    onClick={() => setEditingOrderId(order.orderId)}
                  >
                    Edit
                  </Button>
                )}
                <Button
                  className=" bg-white items-center  p-2 px-3 justify-center normal-case text-[#3FAEAE] border-2 border-[#1B786F] hover:border-[#1B786F] hover:bg-gray-300 transition duration-300 ease"
                  onClick={() => navigate(`/order/${order.orderId}`, { state: { order } })}
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemTable;
