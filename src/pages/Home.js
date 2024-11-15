import React from "react";
import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";

const Home = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Header />
    </div>
  );
};

export default Home;
