import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import { Avatar, Typography } from "@material-tailwind/react";

const AdminProfile = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-col w-full px-8 py-6 pt-28 lg:pl-80">
          <div className="flex flex-row w-full h-44 bg-green-300 pl-10 pt-5">
            <div className="flex flex-row w-64">
              <Avatar
                src="../../assets/face-2.jpg"
                alt="avatar"
                variant="rounded"
              />
            </div>
            <div className="flex flex-col">
                <div><Typography variant="h3">Sathsara Sithum</Typography></div>
                <div className="flex flex-row gap-11">
                    <div>
                        <Typography>Role   </Typography>
                        <Typography>Email  </Typography>
                        <Typography sx={{ color: "blue" }}>Status </Typography>
                    </div>
                    <div>
                        <Typography>:  Admin</Typography>
                        <Typography>:  sathsarasithumgms@gmail.com</Typography>
                        <Typography>:  Active</Typography>
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-row items-center mt-10 w-full">
            <div className="flex flex-row text-lg font-semibold mr-4">Basic Info</div>
            <div className="mt-2 w-full h-0.5 bg-gray-300"></div>
          </div>

          <div className="flex flex-row mt-7 ">
            <div className="flex flex-col ">
                <Typography>First Name</Typography>
                <Typography>Last Name</Typography>
                <Typography>Email</Typography>
                <Typography>Contatct Number</Typography>
                <Typography>Password</Typography>
                <Typography>Role</Typography>
            </div>

            <div className="flex flex-col ml-20 ">
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>:       Sathsara</Typography>
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>:       Sithum</Typography>
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>:       sathsara@gmail.com</Typography>
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>:       076 350 90 28</Typography>
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>:       1999</Typography>
                <Typography sx={{ fontFamily: "Arial, sans-serif" }}>: Admin</Typography>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
