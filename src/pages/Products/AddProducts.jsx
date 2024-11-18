import React, { useState } from 'react';
import AddProductButton from '../../components/Buttons/AddProductButton';
import FileUpload from '../../components/common/FileUpload';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    productName: '',
    species: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user starts typing
    }));
  };



  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.categoryName.trim()) newErrors.categoryName = 'Please fill Category Name';
    if (!formData.productName.trim()) newErrors.productName = 'Please fill Product Name';
    if (!formData.species.trim()) newErrors.species = 'Please fill Species';
    if (!formData.description.trim()) newErrors.description = 'Please fill Description';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed with form submission
    console.log('Form submitted successfully:', formData);
    alert('Product added successfully!');
  };




  return (
    <div className="flex flex-col items-start p-8 w-full h-screen bg-gray-50">
      <div className="w-full">
        <h2 className="text-xl font-semibold">Add Product</h2>
      </div>
      <div className="w-full mt-6 flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col space-y-4 lg:w-1/2">
          <div>
            <label className="block text-gray-600 text-sm mb-2">Category Name</label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              placeholder="Bonsai"
              className={`w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border ${
                errors.categoryName ? 'border-green-500' : 'border-gray-300'
              } rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow`}
            />
            {errors.categoryName && <p className="text-green-500 text-sm">{errors.categoryName}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              placeholder="Indoor plants"
              className={`w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border ${
                errors.productName ? 'border-green-500' : 'border-gray-300'
              } rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow`}
            />
            {errors.productName && <p className="text-green-500 text-sm">{errors.productName}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Species</label>
            <input
              type="text"
              name="species"
              value={formData.species}
              onChange={handleChange}
              placeholder="22"
              className={`w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border ${
                errors.species ? 'border-green-500' : 'border-gray-300'
              } rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow`}
            />
            {errors.species && <p className="text-green-500 text-sm">{errors.species}</p>}
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Bonsai is a herbal plant that grows."
              className={`w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border ${
                errors.description ? 'border-green-500' : 'border-gray-300'
              } rounded-md px-3 py-2 focus:outline focus:border-gray-400 hover:border-gray-600 shadow-sm focus:shadow`}
              rows="4"
            ></textarea>
            {errors.description && <p className="text-green-500 text-sm">{errors.description}</p>}
          </div>
        </div>

        <div className="flex flex-col items-start lg:w-1/2">
          <label className="block text-gray-600 text-sm mb-2">Image</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 w-full h-[220px] flex justify-center items-center">
            <FileUpload />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8 w-full">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProducts;
