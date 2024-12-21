import React from 'react'
import { Button } from "@material-tailwind/react";

const CustomColorOutlinedButton = ({name, onClick, loading}) => {
  return (
    <div>
      <Button
        variant="outlined"
        className="flex bg-white items-center h-10 justify-center normal-case text-[16px] text-[#3FAEAE] border-2 rounded-3xl border-[#1B786F] hover:border-[#1B786F] hover:bg-gray-300 transition duration-300 ease"
        loading={loading}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  )
}

export default CustomColorOutlinedButton
