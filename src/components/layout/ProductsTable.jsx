import React, { useState } from "react";
import Modal from '../common/Modal'; // Assuming the Modal component is correctly imported
import FileUpload from "../common/FileUpload";
import AddCategoryButton from "../Buttons/AddCategoryButton";

const ProductsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

  const handleEditClick = (product) => {
    setSelectedProduct(product); // Set the product to edit
    setIsModalOpen(true); // Open the modal
  };

  const products = [
    {
      id: 1,
      name: "Bonsai",
      orders: 8232,
      unitAmount: "$130.992",
      availableUnit: "$9.500",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      name: "Cactus",
      orders: 1821,
      unitAmount: "$80.250",
      availableUnit: "$4.200",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      name: "Table Roses",
      orders: 2421,
      unitAmount: "$40.600",
      availableUnit: "$9.430",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 4,
      name: "Aloe vera",
      orders: 5921,
      unitAmount: "$91.300",
      availableUnit: "$7.364",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 5,
      name: "Strelitzia nicolai",
      orders: 921,
      unitAmount: "$140.925",
      availableUnit: "$20.531",
      image: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      {/* Filter Buttons */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <button className="bg-green-200 text-green-700 px-4 py-2 rounded-full border border-green-500 hover:bg-green-300">
            All
          </button>
          <button className="bg-white text-green-700 px-4 py-2 rounded-full border border-green-500 hover:bg-green-100">
            Most Sold
          </button>
          <div className="relative">
            <button className="bg-white text-green-700 px-4 py-2 rounded-full border border-green-500 hover:bg-green-100 flex items-center">
              Categories
              <span className="ml-2">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Add Product
        </button>
      </div>

      {/* Product Table */}
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="text-gray-600 uppercase text-sm">
            <th className="py-3 border-b">Product Name</th>
            <th className="py-3 border-b">Unit Amount</th>
            <th className="py-3 border-b">Available Unit</th>
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
                  <p className="text-gray-500 text-sm">{product.orders} orders</p>
                </div>
              </td>
              <td className="py-4 border-b">{product.unitAmount}</td>
              <td className="py-4 border-b">{product.availableUnit}</td>
              <td className="py-4 border-b text-center">
                {/* Edit Button */}
                <button
                  className="text-green-500 mr-2 hover:text-green-700"
                  onClick={() => handleEditClick(product)} // Call the handleEditClick function
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
</svg>

                </button>

                {/* Delete Button */}
                <button className="text-green-500 hover:text-green-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal className="bg-black" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
     
        {selectedProduct && (
          <div
 className="flex flex-col items-start p-16 bg-gray-50 rounded-lg shadow-lg focus:outline-none"
  style={{
    width: '90vw', // Adjust modal width to 80% of the viewport width
    maxWidth: '1200px', // Optional: Set a max width for large screens
    height: 'auto',
    maxHeight: '90vh', // Ensure the modal doesn't exceed 90% of the viewport height
    margin: 'auto', // Center the modal
    overflow: 'auto', // Add scroll if content overflows
  }}
>



  {/* Breadcrumb Section */}
  <div className="w-max">
    <h2 className="text-xl font-semibold">Update Product</h2>
  </div>
  <div className="w-full mt-6 flex flex-col lg:flex-row gap-10">
    {/* Left Column */}
    <div className="flex flex-col space-y-4 lg:w-1/2">
      {/* Category Name */}
      <div>
        <label className="block text-gray-600 text-sm mb-2">Category Name</label>
        <input
          type="text"
          placeholder="Bonsai"
          className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow"
        />
      </div>

      {/* Product Name */}
      <div>
        <label className="block text-gray-600 text-sm mb-2">Product Name</label>
        <input
          type="text"
          placeholder="Indoor plants"
          className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow"
        />
      </div>

      {/* Species */}
      <div>
        <label className="block text-gray-600 text-sm mb-2">Species</label>
        <input
          type="text"
          placeholder="22"
          className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-600 text-sm mb-2">Description</label>
        <textarea
          placeholder="Bonsai is a herbal plant that grows."
          className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow"
          rows="4"
        ></textarea>      
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-start lg:w-1/2">
      <label className="block text-gray-600 text-sm mb-2">Image</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full h-[220px] flex justify-center items-center">
        <FileUpload />
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="flex justify-end mt-8 w-full">
    <AddCategoryButton />
  </div>
</div>


        )}

      </Modal>
    </div>
  );
};

export default ProductsTable;










