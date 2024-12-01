import React, { useEffect, useState } from 'react';
import DropDown from '../../common/DropDown';
import FileUpload from '../../common/FileUpload';
import AddButton from '../../Buttons/CommonButtons/AddButton';
import axios from 'axios';
import { BASE_URL } from '../../../config';
import { useCustomContext } from '../../../contexts/Context';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({title, selectedProduct, setIsModalOpen, fetchProducts}) => {
  const navigate = useNavigate();

  // State management
  const [productName, setProductName] = useState(selectedProduct?.productName);
  const [productDescription, setProductDescription] = useState(selectedProduct?.productDescription);
  const [unitWeight, setUnitWeight] = useState(selectedProduct?.unitWeight);
  const [unitPrice, setUnitPrice] = useState(selectedProduct?.unitPrice);
  const [availableQuantity, setAvailableQuantity] = useState(selectedProduct?.availableQuantity);
  const [categoryId, setCategoryId] = useState(selectedProduct?.categoryId);

  const [loading, setLoading] = useState(false);

  const [categories, setCategories] = useState([]);
  const [resetDropdown] = useState(false);
  const {setParentValue, image, setImage, previewImage, setPreviewImage} = useCustomContext();

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/subCategories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching sub categories:", error);
    }
  };

  useEffect(() => {
    fetchSubCategories();
    setPreviewImage(selectedProduct?.pictureLocation)
    setParentValue(selectedProduct?.categoryId);
  }, []);

  // Handle dropdown change
  const handleDropDownChange = (value) => {
    setParentValue(value);
    setCategoryId(value);
  };

  // Handle file select
  const handleFileSelect = (file) => {
    setImage(file);
  };

  const onClear = () => {
    setImage(null)
    setPreviewImage(null);
    handleFileSelect(null);
  }

  const handleUpload = async () => {
    if (!image && !previewImage) {
      console.log("No image selected.");
      return null;
    }else if (image || previewImage){
      console.log("Image Url found")
      return previewImage;
    }
    
  
    const formData = new FormData();
    formData.append('image', image);
  
    console.log("form data", image);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
  
    try {
      setLoading(true);
      const response = await axios.post(`${BASE_URL}/products/uploadProductImage`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log("Image uploaded successfully:", response.data.url);
      return response.data.url;
    } catch (error) {
      console.error('Upload failed:', error.response?.data || error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const onUpdate = async () => {
    const id = selectedProduct?.id;
    if (!productName || !unitWeight || !unitPrice || !availableQuantity || !categoryId){
      toast.error('Please fill required fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    else{
      try {       
        setLoading(true);
        const uploadedImageUrl = await handleUpload();
        if (!uploadedImageUrl && image) {
          throw new Error("Image upload failed");
        }

        const formData = {
          "productName": productName,
          "productDescription": productDescription,
          "pictureLocation": uploadedImageUrl,
          "unitWeight": unitWeight,
          "unitPrice": unitPrice,
          "availableQuantity": availableQuantity,
          "categoryId": categoryId
        }

        console.log(formData);

        const response = await axios.put(`${BASE_URL}/products/${id}`, formData, {
          headers: {
            'Content-Type': 'Application/json',
          },
        });

        if (response.status === 200) {
          console.log('Product update successfully');
          toast.success('Product update successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            console.log('response : ', response.data)
            setIsModalOpen(false);
            onClear();
            fetchProducts();
        }
      } catch (error) {
        console.error('product update failed:', error);
        toast.error('Product update failed!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
      } finally {
        setLoading(false);
      }
    }
  }

  const onSubmit = async () => {
    if (!productName || !unitWeight || !unitPrice || !availableQuantity || !categoryId ){
      console.log(productName,unitWeight,unitPrice,availableQuantity,categoryId)
      console.log('Please fill required fields');
      toast.error('Please fill required fields', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    else{
      try {       
        setLoading(true);
        const uploadedImageUrl = await handleUpload();
        if (!uploadedImageUrl && image){
          throw new Error("Image upload failed");
        }

        const formData = {
          "productName": productName,
          "productDescription": productDescription,
          "pictureLocation": uploadedImageUrl,
          "unitWeight": unitWeight,
          "unitPrice": unitPrice,
          "availableQuantity": availableQuantity,
          "categoryId": categoryId
        }

        console.log(formData);

        const response = await axios.post(`${BASE_URL}/products`, formData, {
          headers: {
            'Content-Type': 'Application/json',
          },
        });

        if (response.status === 201) {
          console.log('Product added successfully');
          toast.success('Product added successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            console.log('response : ', response.data)
            navigate('/products')
            onClear();
            fetchProducts();
        }
      } catch (error) {
        console.error('product update failed:', error);
        toast.error('Product add failed!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          }); 
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={2} 
        theme="light" 
      />
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-full pb-8">
          <label className="text-lg font-bold ">{title}</label>  
        </div>   
        <div className="flex flex-wrap lg:flex-nowrap gap-8 w-full max-w-full justify-center"> 
          {/* Left Column */} 
          <div className="flex flex-col flex-1 space-y-4 max-w-lg">
            <div>
              <label className="block mb-2 text-sm text-gray-600">Product Category</label>
              <DropDown
                onValueChange={handleDropDownChange}
                reset={resetDropdown}
                categories={categories}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600">Product Name</label>
              <input
                className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow"
                placeholder="Bonsai"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-gray-600">Description</label>
              <textarea
                className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow"
                placeholder="Bonsai is a herbal plant that grows."
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600">Unit Weight</label>
                <input
                  type="number"
                  min="1"
                  className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow"
                  placeholder="e.g., 1 kg"
                  value={unitWeight}
                  onChange={(e) => setUnitWeight(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600">Unit Price</label>
                <input
                  type="number"
                  min="1"
                  className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow"
                  placeholder="e.g., Rs:10"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Right Column */}           
          <div class="flex flex-col flex-1 space-y-4 max-w-lg">      
            <div>
              <label className="block mb-2 text-sm text-gray-600">Available Quantity</label>
              <input
                type="number"
                min="1"
                className="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow"
                placeholder="e.g., 100"
                value={availableQuantity}
                onChange={(e) => setAvailableQuantity(e.target.value)}
              />
            </div>
            <div>
              <label class="block text-sm text-gray-600 py-2">
                    Image
              </label>
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap py-2 w-full max-w-full justify-end px-12">
          {title === "Add Product" ? (
            <AddButton name={title} onClick={onSubmit} loading={loading}/>
          ):(
            <AddButton name={title} onClick={onUpdate} loading={loading}/>
          )}

        </div>
      </div>
    </>
  );
};

export default ProductForm;
