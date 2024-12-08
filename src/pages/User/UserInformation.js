import React, { useEffect, useState } from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import { useParams } from "react-router-dom";
import FlexibleCard from "../../components/common/FlexibleCard";
import { Typography } from "@material-tailwind/react";
import UserOrderItemsTable from "../../components/layout/UserLayout/UserOrderItemsTable";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserInformation = () => {
  const location = useLocation();
  const user = location.state?.user;

  const [address, setAddress] = useState();

  console.log(user)

  const fetchAddress = async () => {
    try {
      const response = await axios.get(`http://localhost:3003/api/v1/users/getAddressById?id=20`);
      // console.log(response.data);
      setAddress(response.data); 
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // console.log(address)

  useEffect(() => {
    fetchAddress();
  }, []);

  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div className="flex  flex-col w-full px-8 py-2 pt-28 lg:pl-80">

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
                        Address Line 1: <span className="font-normal">{address?.addressLine1}</span>
                      </Typography>
                      <Typography className="font-bold">
                        Address Line 2: <span className="font-normal">{address?.addressLine2}</span>
                      </Typography>
                      <Typography className="font-bold">
                        City: <span className="font-normal">{address?.city}</span>
                      </Typography>
                      <Typography className="font-bold">
                        Postal Code: <span className="font-normal">{address?.postalCode}</span>
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
                Purchase History
              </h3>
              <UserOrderItemsTable userId={user.id}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
