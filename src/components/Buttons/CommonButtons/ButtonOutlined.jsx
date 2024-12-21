import React from "react";
import { Button } from "@material-tailwind/react";

const ButtonOutlined = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center justify-center normal-case text-[16px] h-12 text-[#3FAEAE] hover:text-[#2C9D5D] border-2 border-[#3FAEAE] hover:border-[#2C9D5D]"
        style={{
          backgroundColor: "#ffffff",
          height: "35px",
          borderRadius: "4px",
        }}
        loading={loading}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default ButtonOutlined;
