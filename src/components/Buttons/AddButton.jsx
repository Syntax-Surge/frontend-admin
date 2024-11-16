import React from "react";
import { Button } from "@material-tailwind/react";

const AddButton = ({name, onClick}) => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center bg-[#03720a] normal-case text-[14px] h-12 transition duration-300 hover:bg-[#045d09] "
        style={{
          height: "35px",
          borderRadius: "3px",
        }}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default AddButton;
