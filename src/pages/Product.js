import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ProductsTable from "../components/layout/ProductsTable";

const Product = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-col w-full px-6 py-6">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default Product;
