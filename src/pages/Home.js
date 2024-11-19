import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ButtonFilled from "../components/Buttons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/ButtonOutlined";
import AddButton from "../components/Buttons/AddButton";
import DashboardCard from "../components/common/DashboardCard";
import BadgeOverlap from "../components/common/BadgeOverlap";
import {HomeIcon,UserPlusIcon } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";


const Home = () => {
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <div className="flex-row">
        <Header />
        <div className="flex flex-row gap-5 ml-6">
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
