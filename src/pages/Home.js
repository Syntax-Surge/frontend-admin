import React from "react";
import Sidebar from "../components/layout/SideBar";
import Header from "../components/layout/Header";
import ButtonFilled from "../components/Buttons/ButtonFilled";
import ButtonOutlined from "../components/Buttons/ButtonOutlined";
import AddButton from "../components/Buttons/AddButton";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Header />
    </div>
  );
};

export default Home;
