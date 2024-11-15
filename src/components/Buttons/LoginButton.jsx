import React from "react";
import { Button } from "@material-tailwind/react";

const LoginButton = () => {
  return (
    <div>
      <Button
        variant="filled"
        className="flex items-center justify-center normal-case text-[16px] h-12 w-64 text-white bg-[#3FAEAE] hover:bg-[#3FAEAE]"
        style={{
          height: "35px",
          borderRadius: "4px",
          width: "254px",
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginButton;
