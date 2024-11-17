import React from 'react';
import AddCategoryButton from '../../components/Buttons/AddCategoryButton';
import FileUpload from '../../components/common/FileUpload';

const AddProducts = () => {
  return (
    <div className="flex flex-col items-start p-8 w-full h-screen bg-gray-50">
      {/* Breadcrumb Section */}
      <div className="w-full">
        <h2 className="text-xl font-semibold">Add Product</h2>
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
  );
};

export default AddProducts;
