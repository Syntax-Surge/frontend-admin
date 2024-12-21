import React, { useEffect, useState } from 'react'
import FileUpload from '../../common/FileUpload'
import AddButton from '../../Buttons/CommonButtons/AddButton'
import DropDown from '../../common/DropDown'
import AddButtonOutlined from '../../Buttons/AddButtonOutlined'
import { useCustomContext } from '../../../contexts/Context'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import DeleteButton from '../../Buttons/CommonButtons/DeleteButton'
import axios from 'axios';
import { BASE_URL } from '../../../config'

const CategoryForm = ({categories, fetchCategories}) => {

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const navigate = useNavigate();

  const {               
    categoryName,
    setCategoryName,
    parentValue,
    setParentValue,
    description,
    setDescription,
    image,
    setImage,
    resetDropdown,
    setResetDropdown,
    editCategory, 
    setEditCategory,
    selectedItem,
    previewImage,
    setPreviewImage } = useCustomContext();
  
  const onClear = () => {
    setCategoryName("")
    setParentValue("")
    setDescription("")
    setImage(null)
    setPreviewImage(null);
    setResetDropdown((prev) => !prev);
    handleFileSelect(null);
  }

  useEffect(() => {
    onClear();
  },[navigate])

  const handleDropDownChange = (value) => {
    setParentValue(value);
  };

  const handleFileSelect = (file) => {
    console.log("file is", file);
    setImage(file);
  }

  const handleUpload = async () => {
    if (!image && !previewImage) {
      console.log("No image selected.");
      return null;
    }
    
    if (!image && previewImage){
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
      const response = await axios.post(`${BASE_URL}/categories/uploadCategoryImage`, formData, {
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
  
  

  const onSubmit = async () => {
    if (!categoryName ){
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
      console.log(categoryName, parentValue, description);

      try {
        setLoading(true);

        const uploadedImageUrl = await handleUpload();
        if (!uploadedImageUrl && image) {
          throw new Error("Image upload failed");
        }

        const formData = {
          "name": categoryName,
          "parentValue": parentValue,
          "description": description,
          "image": uploadedImageUrl,
        }

        console.log(formData);

        const response = await axios.post(`${BASE_URL}/categories`, formData, {
          headers: {
            'Content-Type': 'Application/json',
          },
        });
        if (response.status === 201) {
          toast.success('New category created successfully', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          fetchCategories();
          onClear();
          console.log('response : ', response.data)
        }
      } catch (error) {
        console.error('category creation failed:', error.response.data.message);
        toast.error(`Category creation failed! ${error.response.data.message}`, {
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

  const onUpdate = async () => {
    if (!selectedItem){
      toast.error('Please Select a Category', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return
    }
    const id = selectedItem;

    if (!categoryName){
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
      return;
    }

    else{
      try {     
        setLoading(true);
        const uploadedImageUrl = await handleUpload();
        if (!uploadedImageUrl && image) {
          throw new Error("Image upload failed");
        }

        const formData = {
          "name": categoryName,
          "parentValue": parentValue,
          "description": description,
          "image": uploadedImageUrl,
        }
        console.log(formData);

        const response = await axios.put(`${BASE_URL}/categories/${id}`, formData, {
          headers: {
            'Content-Type': 'Application/json',
          },
        });
        if (response.status === 200) {
          toast.success('Category update successfully', {
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
            setEditCategory(false);
            fetchCategories();
            onClear();
        }
      } catch (error) {
        console.error('category update failed:', error.response.data.message);
        toast.error(`Category update failed! ${error.response.data.message}`, {
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


  const onDelete = async () => {
      if (!selectedItem){
        toast.error('Please Select a Category', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        return
      }
      const id = selectedItem;
      try {
        const confirmed = window.confirm("Are you sure you want to delete this product?");
        if (!confirmed) return; // Exit if user cancels
        
        setLoadingDelete(true);

        const response = await axios.delete(`${BASE_URL}/categories/${id}`);

        if (response.status === 200) {
          toast.success('Category Deleted Successfully', {
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
            setEditCategory(false);
            fetchCategories();
            onClear();
        }
      } catch (error) {
        console.error('category delete failed:', error.response.data.message);
        toast.error(`Category deletion failed! ${error.response.data.message}`,  {
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
        setLoadingDelete(false);
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
      <div className="flex flex-col w-full items-center pt-10 px-8">
        <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
          
            {editCategory? (
              <label className="text-lg font-bold">
                Edit Category
              </label>
            ):(              
              <label className="text-lg font-bold">
                Add new Category
              </label>
            )}
          
        </div>
        <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
            <label class="block mb-2 text-sm text-gray-600">
                Category Name
            </label>
            <input class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow" 
              placeholder="Bonsai"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
        </div>
        <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px]  p-2">
            <label class="block mb-2 text-sm text-gray-600">
                Parent Category
            </label>
            <DropDown onValueChange={handleDropDownChange} reset={resetDropdown} categories={categories}/>
        </div>      
        <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px] p-2">
            <label class="block mb-2 text-sm text-gray-600">
                Description
            </label>
            <textarea class="w-full bg-transparent placeholder:text-gray-400 text-gray-700 text-sm border border-gray-300 rounded-md px-3 py-2 transition duration-300 ease focus:outline focus:border-gray-600 hover:border-gray-600 shadow-sm focus:shadow" 
              placeholder="Bonsai is herbal plat that grows." 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <div class="w-full max-w-lg lg:min-w-[400px] min-w-[300px]">
          <label class="block mx-2 mb-2 text-sm text-gray-600">
                Image
          </label>
          <FileUpload onFileSelect={handleFileSelect}/>
        </div>
        <div className="w-full gap-2 flex max-w-lg lg:min-w-[400px] min-w-[30px] pt-8 justify-end pb-12">
          {editCategory? (
            <>            
              <DeleteButton name="Delete" onClick={onDelete} loading={loadingDelete}/>
              <AddButton name="Update Category" onClick={onUpdate} loading={loading}/>
            </>
          ):(          
            <>            
              {/* <AddButtonOutlined name="Clear" onClick={onClear}/> */}
              <AddButton name="Add Category" onClick={onSubmit} loading={loading}/>
            </>
          )}

        </div>
      </div>
    </>
  )
}

export default CategoryForm
