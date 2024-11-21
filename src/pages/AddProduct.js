import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ProductForm from "../components/layout/ProductForm";

const AddProduct = () => {
  return (
    <div className="flex bg-gray-50 h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col w-full px-10 py-6 pt-28 lg:pl-80 ">
          <ProductForm title="Add Product"/>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
