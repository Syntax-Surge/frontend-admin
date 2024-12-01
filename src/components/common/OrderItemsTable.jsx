import React from "react";

const OrderItemsTable = () => {
  const products = [
    {
      id: 1,
      name: "Sathsara",
      orders: 8232,
      status: "Shipping",
      payment: "Done",
      quantity: 5,
      unitAmount: 130,
      availableUnit: "$9.500",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Cactus",
      orders: 1821,
      status: "Shipping",
      quantity: 7,
      payment: "Done",
      unitAmount: 200,
      availableUnit: "$4.200",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Table Roses",
      orders: 2421,
      status: "Delivered",
      quantity: 4,
      payment: "Done",
      unitAmount: 200,
      availableUnit: "$9.430",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Aloe vera",
      orders: 5921,
      status: "Shipping",
      quantity: 6,
      payment: "Done",
      unitAmount: 180,
      availableUnit: "$7.364",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Strelitzia nicolai",
      orders: 921,
      status: "Delivered",
      payment: "Done",
      unitAmount: 50,
      quantity: 12,
      availableUnit: "$20.531",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-600 uppercase text-sm">
              <th className="py-3 border-b">Product</th>
              <th className="py-3 border-b">Unit Price</th>
              <th className="py-3 border-b">Quantity</th>
              <th className="py-3 border-b text-center">Total</th>
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
                <td className="py-4 border-b">{product.unitAmount}</td>
                <td className="py-4 border-b">{product.quantity}</td>
                <td className="py-4 border-b" >${product.unitAmount * product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderItemsTable;
