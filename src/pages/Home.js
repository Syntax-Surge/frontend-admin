import React from "react";
import AddProductButton from "../components/Buttons/AddProductButton";
import UpdateProductButton from "../components/Buttons/UpdateProductButton";
import CancelButton from "../components/Buttons/CancelButton";
import AddCategoryButton from "../components/Buttons/AddCategoryButton";

const Home = () => {
  return (
    <div>
      <AddProductButton />
      <UpdateProductButton />
      <br /> <br />
      <CancelButton />
      <br /> <br />
      <AddCategoryButton />
    </div>
  );
};

export default Home;
