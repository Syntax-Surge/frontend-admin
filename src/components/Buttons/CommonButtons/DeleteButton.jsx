import React from "react";
import { Button } from "@material-tailwind/react";

const DeleteButton = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center normal-case text-[16px] h-12 text-white bg-[#ff0000] hover:bg-[#696969] transition duration-300 ease"
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

export default DeleteButton;