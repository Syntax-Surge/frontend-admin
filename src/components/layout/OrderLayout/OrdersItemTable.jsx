import axios from "axios";
import React, { useEffect, useState } from "react";

const OrdersTable = ({order}) => {
//   const [orders, setOrders] = useState();

//   const fetchOrders = async () => {
//     try {
//       console.log("hello");
//       const response = await axios.get(`http://localhost:3003/api/v1/users/getOrders?id=2`);
//       console.log("hello",response.data);
//       setOrders(response.data); 
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

console.log("Order", order?.orderId)

  return (
      <div>
        <table className="w-full text-left table-auto">
          <thead className='bg-gray-200'>
            <tr className="text-gray-900 uppercase text-md normal-case">
              <th className="py-4 pl-4 border-b max-w-[40px] text-center">Product ID</th>
              <th className="py-4 pl-8  border-b ">Product</th>
              <th className="py-3 border-b text-center">Price</th>
              <th className="py-3 border-b text-center">Quantity</th>
              {/* <th className="py-3 border-b text-center">Action</th> */}
            </tr>
          </thead>
          <tbody>
            {
              order.items?.map((item, idx) => (
                <tr key={item.productId} className="hover:bg-gray-100">
                  <td className="py-4 pl-2 border-b text-center">#{item.productId}</td>
                  <td className="pl-8  py-4 border-b flex items-center">
                    <img
                      src={item.pictureLocation}
                      alt={item.productName}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{item.productName}</p>
                    </div>
                  </td>
                  <td className="py-4 border-b text-center">Rs. {item.unitPrice}</td>
                  <td className="py-4 border-b text-center">{item.quantity}</td>
                  {/* <td className="py-4 border-b text-center">{order.status}</td> */}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
  );
};

export default OrdersTable;
