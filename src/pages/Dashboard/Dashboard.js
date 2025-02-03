import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/common/DashboardCard"; 
import {
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon,
  ChartBarIcon,
  ChartLineIcon,
  UserPlusIcon,
  Bars3CenterLeftIcon,
} from "@heroicons/react/24/solid";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import axios from "axios";
import { BASE_URL } from "../../config";

ChartJS.register(ArcElement, Tooltip, Legend); 
ChartJS.register(CategoryScale,LinearScale,PointElement,
  LineElement,Title,Tooltip,Legend
);

const Dashboard = () => { // Renamed to Dashboard for clarity
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [categories, setCategories] = useState([]);

  const chartData = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      // {
      //   label: "Sales",
      //   data: [12, 19, 3, 5, 2, 3],
      //   borderColor: "#1B786F",
      //   backgroundColor: "#A0D995",
      // },
      {
        label: "Orders",
        data: [5, 8, 1, 3, 7, 2],
        borderColor: "#FFC107",
        backgroundColor: "#FFE5B4"
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: "Orders from last 6 months",
        font: { 
          size: 14,
        },
        margin: { 
          bottom: 20 
        }
      },
    },
  };

  const pieChartData = {
    labels: categories.map(category => category.name),
    datasets: [
      {
        label: " Sub-Categories",
        data: categories.map(category => category.subcategories.length),   
        backgroundColor: [
          "#FF6384", 
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        hoverBackgroundColor: [
          "#FF7A99",
          "#4AB4FF",
          "#FFDF70",
          "#5AD6D6",
        ],
        borderWidth: 1, // Add border width
        borderColor: '#fff', // Add border color
      },
    ],
  }

  const pieChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Important for responsive sizing
    circumference: 360,
    plugins: {
      legend: {
        position: 'right', // Place legend at the bottom
        align: 'center',
            labels: {
                boxWidth: 14,
            },
      },
      title: {
        paddingTop: '30px',
        display: true,
        text: 'Sub-Categories Distribution by Category',
        font: { 
          size: 14,
        }
      },
    },
  };
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/getAllProducts`);
      setTotalProducts(response.data.count);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/`);
      const categoriesData = response.data; 
  
      console.log("Full categories data:", categoriesData);  
  
      setCategories(categoriesData);  
      if (categoriesData.length > 0) {
        const firstCategory = categoriesData[0];
        console.log("First category:", firstCategory);
        console.log("Subcategories of the first category:", firstCategory.subcategories);
   
        categoriesData.forEach(category => {
          console.log(`Category: ${category.name}`);
          category.subcategories.forEach(subcategory => {
            console.log(`  Subcategory: ${subcategory.name}`); 
          });
        });
      }
  
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchSubCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/subCategories`);
      setTotalCategories(response.data.length);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/orders/orders`);
      setTotalOrders(response.data.count);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/users/users`);
      // setUsers(response.data.rows); 
      setTotalUsers(response.data.count);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchAllOrders(); 
    fetchUsers();
    fetchSubCategories();
  }, []);

  return (
    <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-24 lg:pl-80 ">
      {/* <div className="flex flex-wrap justify-around w-full px-8 py-6 pt-10 lg:pl-80"> */}
        <div className="flex items-center">          
            <span className="font-bold text-lg text-gray-800">Overview</span>
        </div>
        <div className="flex gap-2">
          <DashboardCard title="Total Users" count={totalUsers} Icon={UserPlusIcon} color="#3498db" />
          <DashboardCard title="Total Products" count={totalProducts} Icon={Squares2X2Icon} color="#2ecc71" />
          <DashboardCard title="Total Orders" count={totalOrders} Icon={ClipboardDocumentListIcon} color="#e74c3c" />
          <DashboardCard title="Total Categories" count={totalCategories} Icon={Bars3CenterLeftIcon} color="#9b59b6" />
        </div>
        <div className="flex mt-4">
          <div className="w-full lg:w-1/2 mt-6 p-4">
            <Line options={chartOptions} data={chartData} />
          </div>
          <div className="w-full lg:w-1/2 mt-6 p-4"> 
            <Pie data={pieChartData} options={pieChartOptions} />
          </div>
        </div>
    </div>
  );
};

export default Dashboard;