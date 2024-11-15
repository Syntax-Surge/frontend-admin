import React from "react";
import { Button } from "@material-tailwind/react";

const AddProductButton = () => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center normal-case text-[14px] h-12 w-64 text-white bg-[#0f3f12] hover:bg-[#1b4d1d]"
        style={{
          height: "35px",
          borderRadius: "3px",
          width: "148px",
        }}
      >
        Add Product
      </Button>
    </div>
  );
};

export default AddProductButton;
