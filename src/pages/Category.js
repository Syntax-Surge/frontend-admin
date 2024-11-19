import React, {useState, useEffect} from 'react'
import CategoryForm from '../components/layout/CategoryFrom'
import Sidebar from '../components/layout/SideBar'
import Header from '../components/layout/Header'
import AllCategories from '../components/layout/AllCategories'
import axios from "axios";
import { BASE_URL } from "../config";
import { useCustomContext } from "../contexts/Context";

const Category = () => {
  const { setEditCategory,} = useCustomContext();
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    setEditCategory(false);
    fetchCategories();
  }, []);

  return (
    <div>
        <div className='flex flex-row'>
            <Sidebar/>
            <div className='flex flex-col w-full'>
                <Header/>
                <div className='flex flex-row w-full'>
                    <AllCategories categories={categories}/>
                    <CategoryForm categories={categories} fetchCategories={fetchCategories}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category
