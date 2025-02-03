import React, {useState, useEffect} from 'react'
import CategoryForm from '../../components/layout/CategoryLayout/CategoryFrom'
import Sidebar from '../../components/layout/SideBar'
import Header from '../../components/layout/Header'
import AllCategories from '../../components/layout/CategoryLayout/AllCategories'
import axios from "axios";
import { BASE_URL } from "../../config";
import { useCustomContext } from "../../contexts/Context";
import { SyncLoader } from 'react-spinners'

const Category = () => {
  const { setEditCategory,} = useCustomContext();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }finally{
      setLoading(false);
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
            <div className='flex flex-col w-full '>
              <Header/>
              {loading ? ( 
                <div className="flex flex-col w-full justify-center mt-28 ml-16">
                  <div className="flex flex-col items-center mt-16 ml-8">
                    <SyncLoader color="#1B786F" size={15} margin={5} />
                    <p className="mt-4 text-gray-600">Loading Categories...</p> 
                  </div>
                </div>
              ) : (
                <div className='flex overflow-y-auto flex-col md:flex-row items-center md:items-start w-full px-8 pt-20 lg:pl-80 '>
                    <AllCategories categories={categories}/>
                    <CategoryForm categories={categories} fetchCategories={fetchCategories}/>
                </div>
              )}
            </div>
        </div>
    </div>
  )
}

export default Category
