import React, {useEffect, useState} from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
import axios from "axios";
import { Button } from "@material-tailwind/react";
import CustomColorOutlinedButton from "../../components/Buttons/CommonButtons/CustomColorOutlinedButton";
import Pagination from "../../components/common/Pagination";
import ReviewTable from "../../components/layout/ReviewLayout/ReviewTable";

const Review = () => {  
  const [reviews, setReviews] = useState([]);  
  const [currentPage, setCurrentPage] = useState(1);
  const [totalReviews, setTotalReviews] = useState(0);
  const reviewsPerPage = 8;
  const navigate = useNavigate();

  const fetchReviews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/reviews?page=${currentPage}`);
      setReviews(response.data.rows); 
      setTotalReviews(response.data.count);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalReviews / reviewsPerPage);

    // Handle page navigation
    const handlePageChange = (page) => {
      if (page > 0 && page <= totalPages) {
        setCurrentPage(page);
      }
    };

  useEffect(() => {
    fetchReviews();
  }, [currentPage]);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-16 lg:pl-80 ">
          
          <div className="flex flex-col w-full justify-center mt-8">
            <ReviewTable reviews={reviews}/>
          </div>
          {totalReviews !== 0 ? (       
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

export default Review;
