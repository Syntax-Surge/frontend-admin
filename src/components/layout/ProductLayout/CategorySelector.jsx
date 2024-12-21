import React, { useState } from "react";
import { Menu, MenuHandler, MenuList, MenuItem, Button } from "@material-tailwind/react";

const CategorySelector = ({ filterProducts, setAllButton, subCategories, selectedCategory, setSelectedCategory, }) => {

  const handleCategorySelect = (subCategory) => {
    setSelectedCategory(subCategory);
    setAllButton(false);
    filterProducts(subCategory.name);
  };

  return (
    <div className="w-full">
      <Menu >
        <MenuHandler>            
          {selectedCategory.name ? (
              <Button className="flex bg-[#3FAEAE] items-center h-10 justify-center normal-case text-[16px] text-white hover:text-white border-2 rounded-3xl border-[#1B786F] hover:border-[#1B786F] hover:bg-[#1B786F] transition duration-300 ease">
                {selectedCategory.name}
              </Button>
            ):(
              <Button className="min-w-[200px] flex bg-white items-center h-10 justify-center normal-case text-[16px] text-[#3FAEAE] border-2 rounded-3xl border-[#1B786F] hover:border-[#1B786F] hover:bg-gray-300 transition duration-300 ease">
                Select a category
              </Button>
            )
          }
        </MenuHandler>
        <MenuList className="max-h-60 overflow-y-auto">
          <MenuItem disabled onClick={() => handleCategorySelect("All Categories")}>
            Select Category
          </MenuItem>
          {subCategories.map((subCategory, index) => (
            <MenuItem key={index} onClick={() => handleCategorySelect(subCategory)}>
              {subCategory.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default CategorySelector;
