import React, { useState } from "react";
import Modal from '../common/Modal'; // Assuming the Modal component is correctly imported
import FileUpload from "../common/FileUpload";
import AddCategoryButton from "../Buttons/AddCategoryButton";
import ProductTable from "./ProductTable";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State for selected product

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
      {/* <ProductTable products={products} setIsModalOpen={setIsModalOpen} setSelectedProduct={setSelectedProduct}/> */}
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} selectedProduct={selectedProduct}/>
    </div>
  );
};

export default Products;










