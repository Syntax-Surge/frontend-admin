import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import DashboardCard from "../components/common/DashboardCard";
import {HomeIcon,UserPlusIcon } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";


const Home = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex overflow-y-auto flex-row w-full px-8 py-6 pt-28 lg:pl-80">
          <DashboardCard count="200" Icon={UserPlusIcon}/>
          <DashboardCard count="500" Icon={Bars3CenterLeftIcon}/>
          <DashboardCard count="34k" Icon={HomeIcon}/>
          <DashboardCard count="+91" Icon={HomeIcon}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
