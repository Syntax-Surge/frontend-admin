import React from "react";
import AddProductButton from "../components/Buttons/AddProductButton";
import UpdateProductButton from "../components/Buttons/UpdateProductButton";
import CancelButton from "../components/Buttons/CancelButton";
import AddCategoryButton from "../components/Buttons/AddCategoryButton";
import LoginButton from "../components/Buttons/LoginButton";
import SignupButton from "../components/Buttons/SignupButton";

const Home = () => {
  return (
    <div>
      <AddProductButton />
      <UpdateProductButton />
      <br /> <br />
      <CancelButton />
      <br /> <br />
      <AddCategoryButton />
      <br /> <br />
      <LoginButton />
      <br /> <br />
      <SignupButton />
    </div>
  );
};

export default Home;
