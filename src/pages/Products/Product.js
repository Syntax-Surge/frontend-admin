import React, {useEffect, useState} from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import ProductTable from "../../components/layout/ProductLayout/ProductTable";
import ProductForm from "../../components/layout/ProductLayout/ProductForm";
import CategorySelector from "../../components/layout/ProductLayout/CategorySelector";
import AddButton from "../../components/Buttons/CommonButtons/AddButton";
import Modal from '../../components/common/Modal';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import axios from "axios"; 

import CustomColorOutlinedButton from "../../components/Buttons/CommonButtons/CustomColorOutlinedButton";
import Pagination from "../../components/common/Pagination";
import CustomColorFilledButton from "../../components/Buttons/CommonButtons/CustomColorFilledButton";

const Product = () => {  

  const [allButton, setAllButton] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [products, setProducts] = useState([]);  
  const [subCategories, setSubCategories] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Select Category")
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
 //fetchCategories
  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/subCategories`);
      setSubCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const filterProducts = async (subCategoryName) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/filter?categoryName=${subCategoryName}`);
      setProducts(response.data.rows); 
      setTotalProducts(response.data.count);
    } catch (error) {
      console.error("Error filtering products:", error);
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

    const onAllButtonRelease = () => {
      setAllButton(false);
    }

    const onAllButtonPress = () => {
      setAllButton(true);
      fetchProducts();
      setSelectedCategory("Select Category")
    }

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-28 lg:pl-80 ">
          <div className="flex items-center m-2">          
            <div className="flex w-full lg:pl-80 right-0 px-8 py-4 fixed bg-white z-10">
              <div className="flex w-full gap-2">
                {allButton ? (
                  <CustomColorFilledButton name='All'  />
                ):(
                  <CustomColorOutlinedButton name='All' onClick={onAllButtonPress}/>
                )}
                <div className="flex">
                  <CategorySelector filterProducts={filterProducts} setAllButton={setAllButton} subCategories={subCategories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                </div>
              </div>
              <div className="flex w-full items-center justify-end pr-4">
                <AddButton name='Add Product' onClick={() => navigate('/products/addProduct')}/>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center mt-8">
            <ProductTable products={products} setIsModalOpen={setIsModalOpen} setSelectedProduct={setSelectedProduct} fetchProducts={fetchProducts}/>
          </div>
          <Modal className="bg-black" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {selectedProduct && (
              <ProductForm title="Update Product" selectedProduct={selectedProduct} setIsModalOpen={setIsModalOpen} fetchProducts={fetchProducts}/>
            )} 
          </Modal>
          {totalProducts !== 0 ? (       
            <div className="fixed w-full right-0 bottom-0 bg-white">
              <div className="flex flex-col items-end pr-8 pb-2">
              <Pagination handlePageChange={handlePageChange} totalPages={totalPages}/>
              </div>
            </div>
          ):(null)}
        </div>
      </div>
    </div>
  );
};

export default Product;
