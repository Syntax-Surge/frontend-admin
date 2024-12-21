import React, { useEffect, useState } from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import FlexibleCard from "../../components/common/FlexibleCard";
import { Typography } from "@material-tailwind/react";
import OrdersItemTable from "../../components/layout/OrderLayout/OrdersItemTable";
import { useLocation } from "react-router-dom";
import axios from "axios";

const OrderInformation = () => {
  const location = useLocation();
  const order = location.state?.order;
  const userId = order?.userId;

  const [user, setUser] = useState();
  const [orderDetails, setOrderDetails] = useState();

  // console.log(user)

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/api/v1/orders/getOrderByOrderId?id=${order?.orderId}`);
      // console.log(response.data);
      setOrderDetails(response.data.rows[0]); 
    } catch (error) {
      console.error("Error fetching order details:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/v1/users/getUserByID?id=${userId}`);
      // console.log(response.data);
      setUser(response.data); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // console.log(address)

  useEffect(() => {
    fetchUser();
    fetchOrderDetails();
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex   flex-col w-full px-8 py-6 pt-28 lg:pl-80 ">
              <div className="flex w-full justify-center flex-row gap-3 ml-1 mt-2">
                <FlexibleCard>
                  <div>
                    <h3
                      style={{ fontSize: "18px" }}
                      className="text-center font-semibold text-gray-700"
                    >
                      Customer Information
                    </h3>
                  </div>

                  <div className="flex flex-row gap-1 mt-7">
                    <div>
                      {user?.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt="img"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      ):(
                      <img
                        src={require('../../images/Login.png')}
                        alt="img"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      )}
  
                    </div>
                    <div className="flex flex-col gap-2">
                      <Typography className="font-bold">
                      Full Name :  <span className="font-normal">{user?.firstName} {user?.lastName}</span>
                      </Typography>
                      <Typography className="font-bold">
                      Mobile :  <span className="font-normal">{user?.contactNo}</span>
                      </Typography>
                      <Typography className="font-bold">
                      Email : <span className="font-normal">{user?.email}</span>
                      </Typography>
                    </div>
                  </div>
                </FlexibleCard>

                <FlexibleCard className="flex w-full  bg-black">
                  <div>
                    <h3
                      style={{ fontSize: "18px" }}
                      className="text-center text-sm font-semibold text-gray-700 text-lg"
                    >
                      Shipping User Details
                    </h3>
                  </div>

                  <div className="flex flex-row gap-1 mt-7">
                    <div>
                      <img
                        src={require('../../images/Login.png')}
                        alt="img"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Typography className="font-bold">
                      First Name :  <span className="font-normal">{orderDetails?.firstName}</span>
                      </Typography>
                      <Typography className="font-bold">
                      Last Name : <span className="font-normal">{orderDetails?.lastName}</span>
                      </Typography>
                      <Typography className="font-bold">
                      Phone : <span className="font-normal">{orderDetails?.phone}</span>
                      </Typography>
                      <Typography className="font-bold">
                      Note : <span className="font-normal">{orderDetails?.note}</span>
                      </Typography>
                    </div>
                  </div>
                </FlexibleCard>

                <FlexibleCard className="flex w-full  bg-black">
                  <div>
                    <h3
                      style={{ fontSize: "18px" }}
                      className="text-center text-sm font-semibold text-gray-700 text-lg"
                    >
                      Shipping Address
                    </h3>
                  </div>
                  <div className="flex flex-row gap-1 mt-7">
                    <div>
                      <img
                        src={require('../../images/Location.png')}
                        alt="img"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Typography className="font-bold">
                        Address Line 1: <span className="font-normal">{orderDetails?.addressLine1}</span>
                      </Typography>
                      <Typography className="font-bold">
                        Address Line 2: <span className="font-normal">{orderDetails?.addressLine2}</span>
                      </Typography>
                      <Typography className="font-bold">
                        City: <span className="font-normal">{orderDetails?.city}</span>
                      </Typography>
                      <Typography className="font-bold">
                        Postal Code: <span className="font-normal">{orderDetails?.postalCode}</span>
                      </Typography>
                    </div>
                  </div>
                </FlexibleCard>

              </div>

            <div className="flex flex-col w-full ml-3 mt-8">
              <h3
                style={{ fontSize: "18px" }}
                className="font-semibold text-gray-700 pb-4"
              >
                Ordered Items
              </h3>
              <OrdersItemTable order={order}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
