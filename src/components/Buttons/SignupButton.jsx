import React from "react";
import { Button } from "@material-tailwind/react";

const SignupButton = () => {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex items-center justify-center normal-case text-[16px] h-12 w-64 text-[#3FAEAE]"
        style={{
          backgroundColor: "#ffffff",
          height: "35px",
          borderRadius: "4px",
          width: "254px",
          border: "2px solid #3FAEAE",
        }}
      >
        Signup
      </Button>
    </div>
  );
};

export default SignupButton;
