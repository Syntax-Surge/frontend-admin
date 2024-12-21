import React from "react";
import { Button } from "@material-tailwind/react";

const ButtonFilled = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center normal-case text-[16px] h-12 text-white bg-[#3FAEAE] hover:bg-[#2C9D5D] transition duration-300"
        style={{
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

export default ButtonFilled;
