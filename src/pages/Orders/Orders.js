import React, {useEffect, useState} from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import OrdersTable from '../../components/layout/OrderLayout/OrderTable';
import CustomColorFilledButton from '../../components/Buttons/CommonButtons/CustomColorFilledButton';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Pagination from "../../components/common/Pagination";
import { SyncLoader } from "react-spinners";

const Orders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [orders, setOrders] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(false);

  const usersPerPage = 8;
  const navigate = useNavigate();


  const fetchAllOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:3002/api/v1/orders/orders`);
      setOrders(response.data.rows); 
      console.log(response.data.rows[0]);
      setTotalUsers(response.data.count);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally{
      setLoading(false)
    }
  };

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalUsers / usersPerPage);

    // Handle page navigation
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  useEffect(() => {
    fetchAllOrders()
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-14 lg:pl-80 ">
          <div className="flex items-center m-2">          
            <div className="flex w-full lg:pl-80 right-0 px-8 py-4 fixed bg-white z-10">
              <div className="flex w-full gap-2">
                <CustomColorFilledButton name='All'/>
                {/* <CustomColorOutlinedButton name='Most Purchasing Users'/> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center mt-8">
            {loading ? ( 
              <div className="flex flex-col items-center mt-16 ml-8">
                <SyncLoader color="#1B786F" size={15} margin={5} />
                <p className="mt-4 text-gray-600">Loading Orders...</p> 
              </div>
            ) : (
              <OrdersTable orders={orders} fetchAllOrders={fetchAllOrders}/>
            )}
          </div>
          {totalUsers !== 0 ? (       
            <div className="fixed w-full right-0 bottom-0 bg-white">
              <div className="flex flex-col items-end pr-8 pb-2">
                <Pagination handlePageChange={handlePageChange} totalPages={totalPages}/>
              </div>
            </div>
          ):(null)}
        </div>
      </div>
    </div>
  )
}

export default Orders
