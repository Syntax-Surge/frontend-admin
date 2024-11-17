import React, { useState } from "react";

const UpdateProduct = ({ product, onClose }) => {
  const [categoryName, setCategoryName] = useState(product?.categoryName || "");
  const [productName, setProductName] = useState(product?.name || "");
  const [species, setSpecies] = useState(product?.species || "");
  const [description, setDescription] = useState(product?.description || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Product:", {
      categoryName,
      productName,
      species,
      description,
    });
    onClose(); // Close the modal after update
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Update Product</h2>
      <form onSubmit={handleUpdate} className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Category Name</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Species</label>
          <input
            type="text"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            placeholder="Enter species"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>
        <div className="col-span-2 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
