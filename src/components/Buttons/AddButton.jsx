import React from "react";
import { Button } from "@material-tailwind/react";

const AddButton = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center bg-[#03720a] normal-case text-[14px] h-12 transition duration-300 ease hover:bg-[#696969] "
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

export default AddButton;
