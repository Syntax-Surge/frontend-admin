import React from "react";
import { Button } from "@material-tailwind/react";

const UpdateProductButton = () => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center normal-case text-[14px] h-12 w-64 text-white"
        style={{
          backgroundColor: "#3B823E",
          height: "35px",
          borderRadius: "3px",
          width: "148px",
        }}
      >
        Update Product
      </Button>
    </div>
  );
};

export default UpdateProductButton;
