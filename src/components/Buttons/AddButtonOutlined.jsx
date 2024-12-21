import React from "react";
import { Button } from "@material-tailwind/react";

const AddButtonOutlined = ({name, onClick}) => {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center justify-center normal-case text-[16px] h-12 transition duration-300 ease text-[#03720a] hover:text-[#696969] border-2 border-[#03720a] hover:border-[#696969]"
        style={{
          height: "35px",
          borderRadius: "4px",
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default AddButtonOutlined;
