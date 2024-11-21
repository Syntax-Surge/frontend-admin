import React, {useEffect, useState} from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ProductTable from "../components/layout/ProductTable";
import ProductForm from "../components/layout/ProductForm";
import AddButton from "../components/Buttons/AddButton";
import Modal from '../components/common/Modal';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
import axios from "axios";
import { Button } from "@material-tailwind/react";

import CustomColorOutlinedButton from "../components/Buttons/CustomColorOutlinedButton";
import Pagination from "../components/common/Pagination";

const Product = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [products, setProducts] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 8;
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products?page=${currentPage}`);
      setProducts(response.data.rows); 
      setTotalProducts(response.data.count);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Handle page navigation
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-28 lg:pl-80">
          <div className="flex justify-between items-center mb-6 px-4">
            <div className="flex gap-2">
              <CustomColorOutlinedButton name='All'/>
              <CustomColorOutlinedButton name='Most Sold'/>
              <div className="flex">
                <Button className="flex bg-white items-center h-10 justify-center normal-case text-[16px] text-[#3FAEAE] hover:text-white border-2 rounded-3xl border-[#1B786F] hover:border-[#2C9D5D] hover:bg-[#2C9D5D] transition duration-300 ease">
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
                </Button>
              </div>
            </div>
            <AddButton name='Add Product' onClick={() => navigate('/products/addProduct')}/>
          </div>
          <ProductTable products={products} setIsModalOpen={setIsModalOpen} setSelectedProduct={setSelectedProduct} fetchProducts={fetchProducts}/>
          <Modal className="bg-black" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {selectedProduct && (
              <ProductForm title="Update Product" selectedProduct={selectedProduct} setIsModalOpen={setIsModalOpen} fetchProducts={fetchProducts}/>
            )} 
          </Modal>
          {/* <div className="flex flex-col items-end"> */}
          <div className="fixed right-0 bottom-0 p-4 pr-8">
            <Pagination handlePageChange={handlePageChange} totalPages={totalPages}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
