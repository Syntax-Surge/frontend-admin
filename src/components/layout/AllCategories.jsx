import React, { useEffect, useState } from "react";
import {Card,Typography,Button,} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../contexts/Context";


const AllCategories = ({categories}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const {    
    setCategoryName,
    setParentValue,
    setDescription,
    setImage,
    editCategory, 
    setEditCategory,
    selectedItem,
    setSelectedItem,
    setResetDropdown,
    setPreviewImage } = useCustomContext();
  
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setEditCategory(false);
  }, []);

  const onClear = () => {
    setCategoryName("")
    setParentValue("")
    setDescription("")
    setImage("")
    setResetDropdown((prev) => !prev);
  }
  const onSetParentValue = (category) => {
    setCategoryName(category.name);
    setParentValue(0);
    setDescription(category.description);
    setImage(category.image);
    setPreviewImage(category.image)
  }

  const onSetSubValue = (category, sub) => {
    setCategoryName(sub.name);
    setParentValue(category.id);
    setDescription(sub.description);
    setImage(sub.image);
    setPreviewImage(sub.image)
  }

  const handleSubClick = (category, sub) => {
    setSelectedItem(sub.id); 
    if (editCategory && onSetSubValue) {
      onSetSubValue(category, sub);
    }
  };
  const handleParentClick = (category) => {
    setSelectedItem(category.id); 
    if (editCategory && onSetSubValue) {
      onSetParentValue(category);
    }
  };

  return (
    <div className="lg:ml-12 flex">
      <Card
        className={`text-black h-full w-[18rem] p-4 pt-4 mt-6 rounded-none rounded-xl shadow-xl shadow-gray-900/5 bg-gray-200`}
      >
        <div className="flex w-full justify-between mb-2 p-2">
          {editCategory? (      
            <> 
              <Typography className="text-lg font-bold">Please Select Category</Typography>
              <Button 
                className="bg-transparent text-black p-0 border-none shadow-none hover:shadow-none hover:text-gray-500 transition duration-300 ease"
                onClick={() => {setEditCategory(false); onClear()}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
              </Button>             
            </>    
          ):(
            <>          
              <Typography className="text-lg font-bold">All Categories</Typography>
              <Button 
                className="bg-transparent text-black p-0 border-none shadow-none hover:shadow-none hover:text-gray-500 transition duration-300 ease"
                onClick={() => {setEditCategory(true); setSelectedItem(null)}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>            
              </Button>
            </>
          )}

        </div>
        <div className="pl-6">
          {categories.map((category) => (
            <div key={category.id}>
              <div key={category.id}
                className={`p-2 mb-1 mr-8 rounded text-md font-bold ${
                  selectedItem === category.id && editCategory
                    ? "bg-[#1B786F] text-lg text-gray-300 font-bold" // Active styles
                    : editCategory
                    ? "text-gray-500 font-normal  hover:text-[#1B786F] hover:bg-gray-400 hover:font-bold cursor-pointer"
                    : "text-gray-800"
                } transition duration-300 ease`}
                onClick={() => handleParentClick(category)}
              >
                {category.name}
              </div>
              {/* Subcategories */}
              <div className="ml-6">
                {category.subcategories?.map((sub) => (
                    <div key={sub.id} 
                      className={`p-2 mr-8 rounded text-sm ${
                      selectedItem === sub.id && editCategory
                        ? "bg-[#1B786F] text-gray-200 font-bold" // Active styles
                        : editCategory
                        ? "text-gray-500 hover:text-md hover:text-[#1B786F] hover:bg-gray-400 hover:font-bold cursor-pointer"
                        : "text-gray-800"
                      } transition duration-300 ease`}
                      onClick={() => handleSubClick(category, sub)}
                    >
                        {sub.name}
                    </div>
                  ))}
              </div>
              <hr className="my-2 mt-4 mx-4 mr-8 border-blue-gray-200" />
            </div>
          ))}
        </div>
      </Card>

      {/* Overlay for smaller screens */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
        ></div>
      )}
    </div>
  );
};

export default AllCategories;
