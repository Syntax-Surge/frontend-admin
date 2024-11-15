import React from "react";
import { Button } from "@material-tailwind/react";

const CancelButton = () => {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center justify-center normal-case text-[14px] h-12 w-64 text-black"
        style={{
          backgroundColor: "#ffffff",
          height: "35px",
          borderRadius: "3px",
          width: "148px",
        }}
      >
        Cancel
      </Button>
    </div>
  );
};

export default CancelButton;
