import React, {useEffect, useState} from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import Modal from '../../components/common/Modal';
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import axios from "axios";
import Pagination from "../../components/common/Pagination";
import UserTable from "../../components/layout/UserLayout/UserTable";
import CustomColorFilledButton from "../../components/Buttons/CommonButtons/CustomColorFilledButton";

const User = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [selectedUser, setSelectedUser] = useState(null); 
  const [users, setUsers] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const usersPerPage = 8;
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/v1/users?page=${currentPage}`);
      setUsers(response.data.rows); 
      setTotalUsers(response.data.count);
    } catch (error) {
      console.error("Error fetching users:", error);
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
    fetchUsers();
  }, [currentPage]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-28 lg:pl-80 ">
          <div className="flex items-center m-2">          
            <div className="flex w-full lg:pl-80 right-0 px-8 py-4 fixed bg-white z-10">
              <div className="flex w-full gap-2">
                
                <CustomColorFilledButton name='All'/>
                {/* <CustomColorOutlinedButton name='Most Purchasing Users'/> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full justify-center mt-8">
            <UserTable users={users} setIsModalOpen={setIsModalOpen} setSelectedUser={setSelectedUser} fetchUsers={fetchUsers}/>
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
  );
};

export default User;
