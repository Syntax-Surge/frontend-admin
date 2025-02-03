import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditOrderStatus from "./EditOrderStatus";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "@material-tailwind/react";

const OrderItemTable = ({ orders = [],   fetchAllOrders }) => {
  const navigate = useNavigate();
  const [order, setOrder] = useState(orders);
  const [orderStatus, setOrderStatus] = useState();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setOrder([...orders]); // Spread to create a new array reference
  }, [orders]);
  
  
  console.log("orders" , orders)
  console.log('order ', order )

  const [editingOrderId, setEditingOrderId] = useState(null); // Track the order being edited

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrder((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const saveStatusUpdate = async (orderId) => {


    console.log("order Status", orderStatus)


    try {
      setLoading(true)
      console.log("ttttttttttttttttttttttttttttt")
      const res = await axios.put("http://localhost:3002/api/v1/orders/orders/updateOrderStatus", {
        orderId,
        status: orderStatus,
      }, { withCredentials: true }).then((response) => {
        console.log('response ', response )
      }).catch((error) => {
        console.log('error ', error )
      });

      console.log('res  ', res  )
      setEditingOrderId(null); // Exit edit mode after saving
      toast.success("Order status updated successfully!");
      await fetchAllOrders();
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
          {order.map((order) => (
            <tr key={order.id} className="hover:bg-gray-100">
              <td className="py-4 pl-2 border-b text-center">#{order.id}</td>
              <td className="py-4 border-b text-center">{order.items.length}</td>
              <td className="py-4 border-b text-center">Rs. {order.payment}</td>
              <td className="py-4 border-b text-center">{order.shippingMethod}</td>
              <td className="py-4 border-b flex justify-center items-center h-full ">
                {editingOrderId === order.id ? (
                  <div className="flex justify-center items-center">
                    <EditOrderStatus
                      orderId={order.id}
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
                {editingOrderId === order.id ? (
                  <Button
                    className="bg-[#3FAEAE] items-center  p-2 px-3 justify-center text-white border-2  border-[#1B786F] hover:bg-[#1B786F] mr-2"
                    onClick={() => saveStatusUpdate(order.id)}
                    loading={loading}
                  >
                    Save
                  </Button>
                ) : (
                  <>
                  <Button
                    className="bg-[#3FAEAE] items-center  p-2 px-3 justify-center text-white border-2  border-[#1B786F] hover:bg-[#1B786F]  mr-2"
                    onClick={() => setEditingOrderId(order.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className=" bg-white items-center  p-2 px-3 justify-center normal-case text-[#3FAEAE] border-2 border-[#1B786F] hover:border-[#1B786F] hover:bg-gray-300 transition duration-300 ease"
                    onClick={() => navigate(`/order/${order.id}`, { state: { order } })}
                    >
                    View
                  </Button>
                  </>
              )}
 
              </td>
            </tr>
          ))}

          
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemTable;
