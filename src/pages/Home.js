import React, { useEffect, useState } from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import DashboardCard from "../components/common/DashboardCard";
import {HomeIcon,UserPlusIcon } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlantWilt } from '@fortawesome/free-solid-svg-icons'; 
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



const Home = () => {

  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);


  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const userResponse = await axios.get("/api/users/count");
        const productResponse = await axios.get("/api/products/count");
        const categoryResponse = await axios.get("/api/categories/count");

        
        setUserCount(userResponse.data.count);
        setProductCount(productResponse.data.count);
        setCategoryCount(categoryResponse.data.count);
      } catch (error) {
        console.error("Error fetching counts", error);
      }
    };

    
    fetchCounts();
  }, []);

  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-row w-full px-8 py-6 pt-28 lg:pl-80 gap-6">
          <DashboardCard 
            title ="Users" 
            count="200" 
            color="bg-purple-700"
            Icon={UserPlusIcon} />
          <DashboardCard 
            title ="Products" 
            count="500" 
            Icon={ () => <FontAwesomeIcon size="2x" icon={faTree} />} 
            color="bg-green-800"/>
          <DashboardCard 
            title ="Revenue" 
            count="34k" 
            Icon={ () => <FontAwesomeIcon size="2x" icon={faDollarSign} />} 
            color="bg-pink-500"/>
          <DashboardCard 
            title ="Categories" 
            count="+91"
            Icon={() => <FontAwesomeIcon size="2x" icon={faPlantWilt} />} 
            color="bg-blue-500"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
