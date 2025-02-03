import React from "react";
import Sidebar from "../../components/layout/SideBar";
import Header from "../../components/layout/Header";
import Dashboard from "../Dashboard/Dashboard"; 

const Home = () => { // This component now just handles layout
  return (
    <div className="flex flex-row">
      <div>
        <Sidebar />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <Dashboard /> {/* Use the Dashboard component here */}
      </div>
    </div>
  );
};

export default Home;