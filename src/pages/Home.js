import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ButtonFilled from "../components/Buttons/CommonButtons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/CommonButtons/ButtonOutlined";
import AddButton from "../components/Buttons/CommonButtons/AddButton";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Header />
    </div>
  );
};

export default Home;
